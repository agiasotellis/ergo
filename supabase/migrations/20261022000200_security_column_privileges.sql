-- Applied 2026-10-22.
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

-- Task coordinates: only the rounded columns are readable.
revoke select on public.jobs from anon, authenticated;
grant select (id, poster_id, title, description, category, budget, lat_approx, lng_approx, address, photos,
              scheduled_at, status, assigned_to, created_at) on public.jobs to authenticated;
-- Inserting still sends the exact point (needed for distance search); it's just not readable back.
revoke insert on public.jobs from anon, authenticated;
grant insert (poster_id, title, description, category, budget, lat, lng, address, photos, scheduled_at) on public.jobs to authenticated;

