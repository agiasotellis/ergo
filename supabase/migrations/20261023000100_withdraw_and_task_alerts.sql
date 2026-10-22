-- 1) A chosen helper can step back; the task reopens and earlier offers count again.
-- 2) People who weren't picked hear about it.
-- 3) Alerts when a matching task is posted nearby.

alter table public.applications drop constraint applications_status_check;
alter table public.applications add constraint applications_status_check
  check (status in ('pending', 'accepted', 'rejected', 'withdrawn'));

alter table public.notifications drop constraint notifications_type_check;
alter table public.notifications add constraint notifications_type_check
  check (type in ('offer', 'accepted', 'completed', 'cancelled', 'review', 'review_request', 'not_selected', 'withdrawn', 'nearby_task'));

-- ---------- accept: tell the others ----------
create or replace function public.accept_application(p_application_id uuid)
returns void language plpgsql security definer set search_path to 'public' as $$
declare v_job uuid; v_applicant uuid; v_amount numeric; v_title text; v_poster uuid;
begin
  select a.job_id, a.applicant_id, coalesce(a.amount, j.budget), j.title, j.poster_id
    into v_job, v_applicant, v_amount, v_title, v_poster
  from public.applications a join public.jobs j on j.id = a.job_id
  where a.id = p_application_id and j.poster_id = auth.uid() and j.status = 'open' and a.status = 'pending';
  if v_job is null then raise exception 'not allowed'; end if;

  insert into public.notifications (user_id, type, job_id, actor_id, data)
  select a.applicant_id, 'not_selected', v_job, v_poster, jsonb_build_object('title', v_title)
  from public.applications a
  where a.job_id = v_job and a.id <> p_application_id and a.status = 'pending';

  update public.applications set status = case when id = p_application_id then 'accepted' else 'rejected' end
  where job_id = v_job and status in ('pending', 'accepted', 'rejected');
  update public.jobs set status = 'assigned', assigned_to = v_applicant where id = v_job;
  perform public.post_task_note(v_job, 'assigned', jsonb_build_object('amount', v_amount));
end $$;

-- ---------- helper steps back ----------
create or replace function public.withdraw_from_job(p_job_id uuid)
returns void language plpgsql security definer set search_path to 'public' as $$
declare j public.jobs;
begin
  select * into j from public.jobs where id = p_job_id for update;
  if j.id is null or j.status <> 'assigned' or j.assigned_to is distinct from auth.uid() then
    raise exception 'not allowed';
  end if;
  -- Note in their chat while the helper is still assigned (post_task_note needs it).
  perform public.post_task_note(j.id, 'withdrawn');
  update public.applications set status = 'withdrawn' where job_id = j.id and applicant_id = j.assigned_to;
  update public.applications set status = 'pending' where job_id = j.id and status = 'rejected';
  update public.jobs set status = 'open', assigned_to = null where id = j.id;
  insert into public.notifications (user_id, type, job_id, actor_id, data)
  values (j.poster_id, 'withdrawn', j.id, j.assigned_to, jsonb_build_object('title', j.title));
end $$;
revoke execute on function public.withdraw_from_job(uuid) from public, anon;
grant execute on function public.withdraw_from_job(uuid) to authenticated;

-- ---------- nearby task alerts ----------
create table if not exists public.task_alerts (
  user_id uuid primary key references auth.users (id) on delete cascade,
  enabled boolean not null default true,
  lat double precision not null check (lat between -90 and 90),
  lng double precision not null check (lng between -180 and 180),
  radius_km integer not null default 10 check (radius_km between 1 and 100),
  categories text[] not null default '{}',
  min_budget numeric not null default 0 check (min_budget between 0 and 100000),
  updated_at timestamptz not null default now()
);
alter table public.task_alerts enable row level security;
create policy "own alerts" on public.task_alerts for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
revoke all on public.task_alerts from anon, public;
grant select, insert, update on public.task_alerts to authenticated;
create index if not exists task_alerts_enabled_lat on public.task_alerts (lat) where enabled;

create or replace function public.notify_nearby_task() returns trigger
language plpgsql security definer set search_path to 'public' as $$
begin
  if new.status <> 'open' or new.lat is null or new.lng is null then return new; end if;
  insert into public.notifications (user_id, type, job_id, actor_id, data)
  select a.user_id, 'nearby_task', new.id, new.poster_id,
         jsonb_build_object('title', new.title, 'amount', new.budget, 'category', new.category,
                            'km', round((6371 * 2 * asin(sqrt(
                                power(sin(radians(new.lat - a.lat) / 2), 2)
                                + cos(radians(a.lat)) * cos(radians(new.lat)) * power(sin(radians(new.lng - a.lng) / 2), 2))))::numeric, 1))
  from public.task_alerts a
  where a.enabled
    and a.user_id <> new.poster_id
    -- cheap box first (1° lat ≈ 111 km), then the exact distance
    and a.lat between new.lat - a.radius_km / 111.0 and new.lat + a.radius_km / 111.0
    and 6371 * 2 * asin(sqrt(
          power(sin(radians(new.lat - a.lat) / 2), 2)
          + cos(radians(a.lat)) * cos(radians(new.lat)) * power(sin(radians(new.lng - a.lng) / 2), 2))) <= a.radius_km
    and (cardinality(a.categories) = 0 or new.category = any (a.categories))
    and (a.min_budget <= 0 or coalesce(new.budget, 0) >= a.min_budget)
    and not exists (select 1 from public.blocks b
                    where (b.blocker_id = a.user_id and b.blocked_id = new.poster_id)
                       or (b.blocker_id = new.poster_id and b.blocked_id = a.user_id))
    -- at most 10 alerts a day per person
    and (select count(*) from public.notifications n
         where n.user_id = a.user_id and n.type = 'nearby_task' and n.created_at > now() - interval '1 day') < 10;
  return new;
end $$;
revoke execute on function public.notify_nearby_task() from public, anon, authenticated;

create trigger on_job_created_alerts after insert on public.jobs
  for each row execute function public.notify_nearby_task();
