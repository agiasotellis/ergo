-- In-app notifications, written by triggers so clients never insert them directly.
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type text not null check (type in ('offer', 'accepted', 'completed', 'cancelled', 'review')),
  job_id uuid references public.jobs(id) on delete cascade,
  actor_id uuid references public.profiles(id) on delete set null,
  data jsonb not null default '{}'::jsonb,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists notifications_user_created_idx on public.notifications (user_id, created_at desc);
create index if not exists notifications_unread_idx on public.notifications (user_id) where read_at is null;
create index if not exists notifications_job_idx on public.notifications (job_id);
create index if not exists notifications_actor_idx on public.notifications (actor_id);

alter table public.notifications enable row level security;

create policy "read own notifications" on public.notifications
  for select using ((select auth.uid()) = user_id);
create policy "mark own notifications read" on public.notifications
  for update using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "delete own notifications" on public.notifications
  for delete using ((select auth.uid()) = user_id);

-- New offer -> poster
create or replace function public.notify_new_offer() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_job public.jobs;
begin
  select * into v_job from public.jobs where id = new.job_id;
  if v_job.poster_id is not null and v_job.poster_id <> new.applicant_id then
    insert into public.notifications (user_id, type, job_id, actor_id, data)
    values (v_job.poster_id, 'offer', v_job.id, new.applicant_id,
            jsonb_build_object('title', v_job.title, 'amount', coalesce(new.amount, v_job.budget)));
  end if;
  return new;
end $$;

create trigger on_application_created after insert on public.applications
  for each row execute function public.notify_new_offer();

-- Offer accepted -> helper
create or replace function public.notify_offer_accepted() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_job public.jobs;
begin
  if new.status = 'accepted' and old.status is distinct from 'accepted' then
    select * into v_job from public.jobs where id = new.job_id;
    insert into public.notifications (user_id, type, job_id, actor_id, data)
    values (new.applicant_id, 'accepted', v_job.id, v_job.poster_id,
            jsonb_build_object('title', v_job.title, 'amount', coalesce(new.amount, v_job.budget)));
  end if;
  return new;
end $$;

create trigger on_application_accepted after update of status on public.applications
  for each row execute function public.notify_offer_accepted();

-- Task completed -> assigned helper; task cancelled -> assigned helper or pending applicants
create or replace function public.notify_job_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.status = 'completed' and old.status <> 'completed' and new.assigned_to is not null then
    insert into public.notifications (user_id, type, job_id, actor_id, data)
    values (new.assigned_to, 'completed', new.id, new.poster_id, jsonb_build_object('title', new.title));
  elsif new.status = 'cancelled' and old.status <> 'cancelled' then
    insert into public.notifications (user_id, type, job_id, actor_id, data)
    select distinct a.applicant_id, 'cancelled', new.id, new.poster_id, jsonb_build_object('title', new.title)
    from public.applications a
    where a.job_id = new.id and a.status in ('pending', 'accepted');
  end if;
  return new;
end $$;

create trigger on_job_status_changed after update of status on public.jobs
  for each row execute function public.notify_job_status();

-- New review -> reviewee
create or replace function public.notify_new_review() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_title text;
begin
  select title into v_title from public.jobs where id = new.job_id;
  insert into public.notifications (user_id, type, job_id, actor_id, data)
  values (new.reviewee_id, 'review', new.job_id, new.reviewer_id,
          jsonb_build_object('title', v_title, 'rating', new.rating));
  return new;
end $$;

create trigger on_review_created after insert on public.reviews
  for each row execute function public.notify_new_review();

revoke execute on function public.notify_new_offer() from public, anon, authenticated;
revoke execute on function public.notify_offer_accepted() from public, anon, authenticated;
revoke execute on function public.notify_job_status() from public, anon, authenticated;
revoke execute on function public.notify_new_review() from public, anon, authenticated;

-- Live badge updates
alter publication supabase_realtime add table public.notifications;
