-- Applied 2026-10-21 to the "taskmate" project.
alter table public.applications add column if not exists amount numeric check (amount is null or amount >= 0);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path to 'public' as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    coalesce(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture')
  )
  on conflict (id) do nothing;
  return new;
end $$;

create or replace function public.jobs_nearby_v2(p_lat double precision, p_lng double precision, p_radius_km double precision default 10, p_category text default null)
returns table(id uuid, poster_id uuid, title text, description text, category text, budget numeric, lat double precision, lng double precision,
  address text, photos text[], scheduled_at timestamptz, status text, created_at timestamptz, distance_km double precision,
  poster_name text, poster_avatar text)
language sql stable set search_path to 'public' as $$
  select s.* from (
    select j.id, j.poster_id, j.title, j.description, j.category, j.budget, j.lat, j.lng, j.address, j.photos, j.scheduled_at, j.status, j.created_at,
      6371 * 2 * asin(sqrt(power(sin(radians(j.lat - p_lat) / 2), 2)
        + cos(radians(p_lat)) * cos(radians(j.lat)) * power(sin(radians(j.lng - p_lng) / 2), 2))) as distance_km,
      p.full_name as poster_name, p.avatar_url as poster_avatar
    from public.jobs j join public.profiles p on p.id = j.poster_id
    where j.status = 'open' and (p_category is null or j.category = p_category)
      and j.lat between p_lat - p_radius_km / 111.0 and p_lat + p_radius_km / 111.0
  ) s where s.distance_km <= p_radius_km
  order by s.distance_km asc limit 200;
$$;
grant execute on function public.jobs_nearby_v2(double precision, double precision, double precision, text) to anon, authenticated;

create index if not exists jobs_status_lat_idx on public.jobs (status, lat);
