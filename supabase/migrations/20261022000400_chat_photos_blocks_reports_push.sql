-- Chat photos, blocking, reporting and FCM push tokens (2026-10-22).

-- ---------- photos in chat ----------
alter table public.messages add column if not exists image_path text;
alter table public.messages add constraint messages_image_path_len check (image_path is null or char_length(image_path) <= 300) not valid;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('chat-photos', 'chat-photos', false, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/heic'])
on conflict (id) do nothing;

-- Files live at <conversation id>/<file>; only that chat's two participants can read or add them.
create or replace function public.is_conversation_member(p_conversation text)
returns boolean language sql stable security definer set search_path to 'public' as $$
  select exists (
    select 1 from public.conversations c
    where c.id::text = p_conversation and (select auth.uid()) in (c.poster_id, c.worker_id)
  );
$$;
revoke execute on function public.is_conversation_member(text) from public, anon;
grant execute on function public.is_conversation_member(text) to authenticated;

create policy "chat members read chat photos" on storage.objects for select to authenticated
  using (bucket_id = 'chat-photos' and public.is_conversation_member((storage.foldername(name))[1]));
create policy "chat members upload chat photos" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat-photos' and public.is_conversation_member((storage.foldername(name))[1]));

-- ---------- blocking ----------
create table if not exists public.blocks (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);
create index if not exists blocks_blocked_idx on public.blocks (blocked_id);
alter table public.blocks enable row level security;
create policy "see own blocks" on public.blocks for select to authenticated using ((select auth.uid()) = blocker_id);
create policy "block others" on public.blocks for insert to authenticated with check ((select auth.uid()) = blocker_id);
create policy "unblock" on public.blocks for delete to authenticated using ((select auth.uid()) = blocker_id);

-- True when either person has blocked the other.
create or replace function public.is_blocked(a uuid, b uuid)
returns boolean language sql stable security definer set search_path to 'public' as $$
  select exists (select 1 from public.blocks where (blocker_id = a and blocked_id = b) or (blocker_id = b and blocked_id = a));
$$;
revoke execute on function public.is_blocked(uuid, uuid) from public, anon;
grant execute on function public.is_blocked(uuid, uuid) to authenticated;

alter policy "participants send messages" on public.messages
  with check (
    (select auth.uid()) = sender_id
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (select auth.uid()) in (c.poster_id, c.worker_id)
        and not public.is_blocked(c.poster_id, c.worker_id)
    )
  );

alter policy "apply to open jobs" on public.applications
  with check (
    (select auth.uid()) = applicant_id and status = 'pending'
    and exists (
      select 1 from public.jobs j
      where j.id = applications.job_id and j.status = 'open' and j.poster_id <> (select auth.uid())
        and not public.is_blocked((select auth.uid()), j.poster_id)
    )
  );

create or replace function public.start_conversation(p_job_id uuid, p_other uuid)
returns uuid language plpgsql security definer set search_path to 'public' as $$
declare v_poster uuid; v_worker uuid; v_id uuid;
begin
  select poster_id into v_poster from public.jobs where id = p_job_id;
  if v_poster is null then raise exception 'job not found'; end if;
  if auth.uid() = v_poster then v_worker := p_other;
  else
    if p_other <> v_poster then raise exception 'not allowed'; end if;
    v_worker := auth.uid();
  end if;
  if v_worker is null or v_worker = v_poster then raise exception 'not allowed'; end if;
  if public.is_blocked(v_poster, v_worker) then raise exception 'blocked'; end if;
  insert into public.conversations (job_id, poster_id, worker_id) values (p_job_id, v_poster, v_worker)
  on conflict (job_id, worker_id) do nothing;
  select id into v_id from public.conversations where job_id = p_job_id and worker_id = v_worker;
  return v_id;
end $$;

-- Hide tasks from people you blocked (or who blocked you) in nearby search.
create or replace function public.jobs_nearby_v2(p_lat double precision, p_lng double precision, p_radius_km double precision default 10, p_category text default null)
returns table(id uuid, poster_id uuid, title text, description text, category text, budget numeric, lat double precision, lng double precision,
              address text, photos text[], scheduled_at timestamptz, status text, created_at timestamptz, distance_km double precision,
              poster_name text, poster_avatar text)
language sql stable security definer set search_path to 'public' as $$
  select s.id, s.poster_id, s.title, s.description, s.category, s.budget, s.lat_approx, s.lng_approx, s.address, s.photos,
         s.scheduled_at, s.status, s.created_at, round(s.distance_km::numeric, 1)::double precision, s.poster_name, s.poster_avatar
  from (
    select j.*,
      6371 * 2 * asin(sqrt(power(sin(radians(j.lat - p_lat) / 2), 2)
        + cos(radians(p_lat)) * cos(radians(j.lat)) * power(sin(radians(j.lng - p_lng) / 2), 2))) as distance_km,
      p.full_name as poster_name, p.avatar_url as poster_avatar
    from public.jobs j join public.profiles p on p.id = j.poster_id
    where auth.uid() is not null
      and j.status = 'open' and (p_category is null or j.category = p_category)
      and not public.is_blocked(auth.uid(), j.poster_id)
      and j.lat between p_lat - least(p_radius_km, 50) / 111.0 and p_lat + least(p_radius_km, 50) / 111.0
  ) s
  where s.distance_km <= least(p_radius_km, 50)
  order by s.distance_km asc
  limit 200;
$$;

-- ---------- reports ----------
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  target_type text not null check (target_type in ('job', 'user', 'message')),
  target_id uuid not null,
  reported_user_id uuid references public.profiles(id) on delete set null,
  reason text not null check (reason in ('spam', 'scam', 'inappropriate', 'harassment', 'other')),
  details text check (details is null or char_length(details) <= 1000),
  status text not null default 'open' check (status in ('open', 'reviewed', 'dismissed', 'actioned')),
  created_at timestamptz not null default now(),
  unique (reporter_id, target_type, target_id)
);
create index if not exists reports_status_idx on public.reports (status, created_at desc);
create index if not exists reports_reported_user_idx on public.reports (reported_user_id);
alter table public.reports enable row level security;
create policy "file reports" on public.reports for insert to authenticated with check ((select auth.uid()) = reporter_id and status = 'open');
create policy "see own reports" on public.reports for select to authenticated using ((select auth.uid()) = reporter_id);

-- ---------- push tokens (FCM) ----------
create table if not exists public.push_tokens (
  token text primary key check (char_length(token) <= 4096),
  user_id uuid not null references public.profiles(id) on delete cascade,
  platform text not null default 'android' check (platform in ('android', 'ios')),
  updated_at timestamptz not null default now()
);
create index if not exists push_tokens_user_idx on public.push_tokens (user_id);
alter table public.push_tokens enable row level security;
create policy "see own push tokens" on public.push_tokens for select to authenticated using ((select auth.uid()) = user_id);
-- A device token belongs to whoever signed in on that phone most recently.
create or replace function public.register_push_token(p_token text, p_platform text default 'android')
returns void language sql security definer set search_path to 'public' as $$
  insert into public.push_tokens (token, user_id, platform, updated_at)
  select p_token, auth.uid(), coalesce(p_platform, 'android'), now()
  where auth.uid() is not null and char_length(p_token) between 20 and 4096
  on conflict (token) do update set user_id = excluded.user_id, platform = excluded.platform, updated_at = now();
$$;
revoke execute on function public.register_push_token(text, text) from public, anon;
grant execute on function public.register_push_token(text, text) to authenticated;
create policy "remove own push token" on public.push_tokens for delete to authenticated using ((select auth.uid()) = user_id);

-- (applied separately) Only answer for pairs that include the caller.
create or replace function public.is_blocked(a uuid, b uuid)
returns boolean language sql stable security definer set search_path to 'public' as $$
  select (select auth.uid()) in (a, b)
     and exists (select 1 from public.blocks where (blocker_id = a and blocked_id = b) or (blocker_id = b and blocked_id = a));
$$;
