-- Audit fixes (2026-10-22): upload limits, least-privilege grants, anti-spam limits.

-- 1) Task and profile photos: images only, max 10 MB (chat-photos already limited).
update storage.buckets
set file_size_limit = 10485760,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/heic']
where id in ('job-photos', 'avatars');

-- 2) Everything in the app needs sign-in: signed-out visitors get nothing, and nobody can
--    TRUNCATE (PostgREST never issues it, but don't leave it granted).
revoke all on all tables in schema public from anon;
revoke truncate on all tables in schema public from authenticated;
alter default privileges in schema public revoke all on tables from anon;
alter default privileges in schema public revoke truncate on tables from authenticated;

-- 3) The original nearby search (exact coordinates) is replaced by jobs_nearby_v2.
revoke execute on function public.jobs_nearby(double precision, double precision, double precision, text) from public, anon, authenticated;

-- 4) Anti-spam limits per person.
create index if not exists messages_sender_created_idx on public.messages (sender_id, created_at desc);
create index if not exists jobs_poster_created_idx on public.jobs (poster_id, created_at desc);
create index if not exists applications_applicant_created_idx on public.applications (applicant_id, created_at desc);
create index if not exists reports_reporter_created_idx on public.reports (reporter_id, created_at desc);

create or replace function public.enforce_rate_limit() returns trigger
language plpgsql security definer set search_path to 'public' as $$
declare n int;
begin
  -- System notes are written by the database itself.
  if tg_table_name = 'messages' and new.kind = 'system' then return new; end if;
  if tg_table_name = 'messages' then
    select count(*) into n from public.messages where sender_id = new.sender_id and created_at > now() - interval '1 minute';
    if n >= 30 then raise exception 'rate_limited' using hint = 'Too many messages, wait a minute.'; end if;
  elsif tg_table_name = 'jobs' then
    select count(*) into n from public.jobs where poster_id = new.poster_id and created_at > now() - interval '1 day';
    if n >= 20 then raise exception 'rate_limited' using hint = 'Too many tasks today.'; end if;
  elsif tg_table_name = 'applications' then
    select count(*) into n from public.applications where applicant_id = new.applicant_id and created_at > now() - interval '1 day';
    if n >= 50 then raise exception 'rate_limited' using hint = 'Too many offers today.'; end if;
  elsif tg_table_name = 'reports' then
    select count(*) into n from public.reports where reporter_id = new.reporter_id and created_at > now() - interval '1 day';
    if n >= 20 then raise exception 'rate_limited' using hint = 'Too many reports today.'; end if;
  end if;
  return new;
end $$;
revoke execute on function public.enforce_rate_limit() from public, anon, authenticated;

create trigger messages_rate_limit before insert on public.messages for each row execute function public.enforce_rate_limit();
create trigger jobs_rate_limit before insert on public.jobs for each row execute function public.enforce_rate_limit();
create trigger applications_rate_limit before insert on public.applications for each row execute function public.enforce_rate_limit();
create trigger reports_rate_limit before insert on public.reports for each row execute function public.enforce_rate_limit();
