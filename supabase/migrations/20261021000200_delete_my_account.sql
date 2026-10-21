-- NOT YET APPLIED. Required by Google Play (in-app account deletion).
-- Apply in the Supabase SQL editor, or ask Claude to apply it.
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
