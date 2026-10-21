-- Security hardening (Oct 2026)
-- 1) Posters can edit a task's content, but status / helper only change through the
--    checked RPCs (accept_application, complete_job, cancel_job). Prevents fake
--    "completed" jobs used to leave reviews.
revoke update on public.jobs from anon, authenticated;
grant update (title, description, category, budget, address, photos, scheduled_at) on public.jobs to authenticated;

-- 2) Message recipients may only mark messages as read, not rewrite them.
revoke update on public.messages from anon, authenticated;
grant update (read_at) on public.messages to authenticated;

-- 3) Profiles: other users see name, photo and bio only (not push token or locale).
revoke select, update on public.profiles from anon, authenticated;
grant select (id, full_name, avatar_url, bio, created_at) on public.profiles to authenticated;
grant update (full_name, avatar_url, bio, locale, expo_push_token) on public.profiles to authenticated;

-- 4) Task location privacy: clients get coordinates rounded to ~100 m, never the exact
--    point the poster was standing on (often their home).
alter table public.jobs
  add column if not exists lat_approx double precision generated always as (round(lat::numeric, 3)::double precision) stored,
  add column if not exists lng_approx double precision generated always as (round(lng::numeric, 3)::double precision) stored;

revoke select on public.jobs from anon, authenticated;
grant select (id, poster_id, title, description, category, budget, lat_approx, lng_approx, address, photos,
              scheduled_at, status, assigned_to, created_at) on public.jobs to authenticated;
-- Inserting still sends the exact point (needed for distance search); it's just not readable back.
revoke insert on public.jobs from anon, authenticated;
grant insert (poster_id, title, description, category, budget, lat, lng, address, photos, scheduled_at) on public.jobs to authenticated;

-- Nearby search runs with owner rights so it can use exact coordinates, but only returns
-- rounded coordinates and distance rounded to 100 m (prevents triangulation).
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
      and j.lat between p_lat - least(p_radius_km, 50) / 111.0 and p_lat + least(p_radius_km, 50) / 111.0
  ) s
  where s.distance_km <= least(p_radius_km, 50)
  order by s.distance_km asc
  limit 200;
$$;
revoke execute on function public.jobs_nearby_v2(double precision, double precision, double precision, text) from public, anon;
grant execute on function public.jobs_nearby_v2(double precision, double precision, double precision, text) to authenticated;

-- 5) Sensible size limits on user input (NOT VALID: enforced for new/changed rows).
alter table public.jobs add constraint jobs_description_len check (char_length(description) <= 2000) not valid;
alter table public.jobs add constraint jobs_budget_max check (budget is null or budget <= 100000) not valid;
alter table public.jobs add constraint jobs_photos_max check (coalesce(array_length(photos, 1), 0) <= 10) not valid;
alter table public.applications add constraint applications_message_len check (message is null or char_length(message) <= 500) not valid;
alter table public.applications add constraint applications_amount_max check (amount is null or amount <= 100000) not valid;
alter table public.reviews add constraint reviews_comment_len check (comment is null or char_length(comment) <= 1000) not valid;
alter table public.profiles add constraint profiles_name_len check (char_length(full_name) <= 80) not valid;
alter table public.profiles add constraint profiles_bio_len check (bio is null or char_length(bio) <= 500) not valid;

-- 6) In-app account deletion (required by Google Play).
create or replace function public.delete_my_account()
returns void language plpgsql security definer set search_path to 'public' as $$
declare v uuid := auth.uid();
begin
  if v is null then raise exception 'not signed in'; end if;
  delete from public.messages m using public.conversations c
    where m.conversation_id = c.id and (c.poster_id = v or c.worker_id = v or c.job_id in (select id from public.jobs where poster_id = v));
  delete from public.conversations where poster_id = v or worker_id = v or job_id in (select id from public.jobs where poster_id = v);
  delete from public.applications where applicant_id = v or job_id in (select id from public.jobs where poster_id = v);
  delete from public.reviews where reviewer_id = v or reviewee_id = v or job_id in (select id from public.jobs where poster_id = v);
  update public.jobs set assigned_to = null, status = 'open' where assigned_to = v and status = 'assigned';
  update public.jobs set assigned_to = null where assigned_to = v;
  delete from public.jobs where poster_id = v;
  delete from public.profiles where id = v;
  delete from auth.users where id = v;
end $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
