-- Applied 2026-10-22.
-- 4) Task location privacy: clients get coordinates rounded to ~100 m, never the exact
--    point the poster was standing on (often their home).
alter table public.jobs
  add column if not exists lat_approx double precision generated always as (round(lat::numeric, 3)::double precision) stored,
  add column if not exists lng_approx double precision generated always as (round(lng::numeric, 3)::double precision) stored;

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

