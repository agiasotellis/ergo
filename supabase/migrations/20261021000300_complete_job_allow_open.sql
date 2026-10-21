-- Let a poster mark a task completed even when no helper was assigned in the app.
create or replace function public.complete_job(p_job_id uuid)
 returns void
 language plpgsql
 security definer
 set search_path to 'public'
as $function$
begin
  update public.jobs set status = 'completed'
  where id = p_job_id and poster_id = auth.uid() and status in ('open','assigned');
  if not found then raise exception 'not allowed'; end if;
end $function$;
