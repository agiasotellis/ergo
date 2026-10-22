-- Fix: `new.kind` only exists on messages. PL/pgSQL doesn't short-circuit `and`, so the old
-- check failed on every insert into jobs / applications / reports ("record new has no field kind").
create or replace function public.enforce_rate_limit() returns trigger
language plpgsql security definer set search_path to 'public' as $$
declare n int;
begin
  if tg_table_name = 'messages' then
    if new.kind = 'system' then return new; end if;
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
