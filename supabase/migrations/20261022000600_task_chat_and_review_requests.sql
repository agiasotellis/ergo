-- Automatic task chat + review requests (2026-10-22).

-- Applied separately first: allow the new notification type.
-- alter table public.notifications drop constraint notifications_type_check;
-- alter table public.notifications add constraint notifications_type_check
--   check (type in ('offer', 'accepted', 'completed', 'cancelled', 'review', 'review_request'));

-- System notes in chats ("task assigned / completed / cancelled"). The app renders them in
-- each reader's language from `meta`; `body` is a short language-neutral preview.
alter table public.messages add column if not exists kind text not null default 'text';
alter table public.messages add constraint messages_kind_check check (kind in ('text', 'system')) not valid;
alter table public.messages add column if not exists meta jsonb;

-- People can only send normal messages; system notes come from the functions below.
alter policy "participants send messages" on public.messages
  with check (
    (select auth.uid()) = sender_id
    and kind = 'text'
    and exists (
      select 1 from public.conversations c
      where c.id = messages.conversation_id
        and (select auth.uid()) in (c.poster_id, c.worker_id)
        and not public.is_blocked(c.poster_id, c.worker_id)
    )
  );

-- Finds or creates the owner<->helper chat for a task and posts a system note in it.
create or replace function public.post_task_note(p_job uuid, p_event text, p_meta jsonb default '{}'::jsonb)
returns void language plpgsql security definer set search_path to 'public' as $$
declare j public.jobs; v_conv uuid; v_icon text;
begin
  select * into j from public.jobs where id = p_job;
  if j.id is null or j.assigned_to is null then return; end if;
  insert into public.conversations (job_id, poster_id, worker_id) values (j.id, j.poster_id, j.assigned_to)
  on conflict (job_id, worker_id) do nothing;
  select id into v_conv from public.conversations where job_id = j.id and worker_id = j.assigned_to;
  v_icon := case p_event when 'assigned' then '🤝' when 'completed' then '✅' when 'cancelled' then '✖️' else 'ℹ️' end;
  insert into public.messages (conversation_id, sender_id, body, kind, meta)
  values (v_conv, j.poster_id, v_icon || ' ' || left(j.title, 120), 'system',
          coalesce(p_meta, '{}'::jsonb) || jsonb_build_object('event', p_event, 'title', j.title));
end $$;
revoke execute on function public.post_task_note(uuid, text, jsonb) from public, anon, authenticated;

create or replace function public.accept_application(p_application_id uuid)
returns void language plpgsql security definer set search_path to 'public' as $$
declare v_job uuid; v_applicant uuid; v_amount numeric;
begin
  select a.job_id, a.applicant_id, coalesce(a.amount, j.budget) into v_job, v_applicant, v_amount
  from public.applications a join public.jobs j on j.id = a.job_id
  where a.id = p_application_id and j.poster_id = auth.uid() and j.status = 'open';
  if v_job is null then raise exception 'not allowed'; end if;
  update public.applications set status = case when id = p_application_id then 'accepted' else 'rejected' end where job_id = v_job;
  update public.jobs set status = 'assigned', assigned_to = v_applicant where id = v_job;
  perform public.post_task_note(v_job, 'assigned', jsonb_build_object('amount', v_amount));
end $$;

-- Status changes: review requests for both people when done; notes in their chat.
create or replace function public.notify_job_status() returns trigger
language plpgsql security definer set search_path to 'public' as $$
begin
  if new.status = 'completed' and old.status <> 'completed' and new.assigned_to is not null then
    insert into public.notifications (user_id, type, job_id, actor_id, data) values
      (new.assigned_to, 'review_request', new.id, new.poster_id, jsonb_build_object('title', new.title, 'role', 'poster')),
      (new.poster_id, 'review_request', new.id, new.assigned_to, jsonb_build_object('title', new.title, 'role', 'worker'));
    perform public.post_task_note(new.id, 'completed');
  elsif new.status = 'cancelled' and old.status <> 'cancelled' then
    insert into public.notifications (user_id, type, job_id, actor_id, data)
    select distinct a.applicant_id, 'cancelled', new.id, new.poster_id, jsonb_build_object('title', new.title)
    from public.applications a
    where a.job_id = new.id and a.status in ('pending', 'accepted');
    if old.assigned_to is not null then perform public.post_task_note(new.id, 'cancelled'); end if;
  end if;
  return new;
end $$;

-- System notes don't need their own push (the status notification already sends one).
create or replace function public.notify_message() returns trigger
language plpgsql security definer set search_path to 'public' as $$
declare c record; v_name text;
begin
  if new.kind = 'system' then return new; end if;
  select * into c from public.conversations where id = new.conversation_id;
  select full_name into v_name from public.profiles where id = new.sender_id;
  perform public.send_push(case when new.sender_id = c.poster_id then c.worker_id else c.poster_id end,
    coalesce(nullif(v_name, ''), 'ergo'),
    case when new.image_path is not null then null else left(new.body, 140) end,
    jsonb_build_object('type', 'message', 'conversationId', new.conversation_id, 'image', new.image_path is not null));
  return new;
end $$;

-- Existing assigned / completed tasks get their chat too.
select public.post_task_note(id, case status when 'assigned' then 'assigned' else 'completed' end,
                             case status when 'assigned' then jsonb_build_object('amount', coalesce((select a.amount from public.applications a where a.job_id = jobs.id and a.status = 'accepted' limit 1), budget)) else '{}'::jsonb end)
from public.jobs
where assigned_to is not null and status in ('assigned', 'completed')
  and not exists (select 1 from public.conversations c join public.messages m on m.conversation_id = c.id
                  where c.job_id = jobs.id and c.worker_id = jobs.assigned_to and m.kind = 'system');
