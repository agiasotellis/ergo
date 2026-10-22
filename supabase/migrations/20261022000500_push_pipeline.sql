-- Push pipeline: database triggers -> send-push Edge Function -> Firebase Cloud Messaging.
-- A random secret in Vault authenticates the database to the function.

select vault.create_secret(encode(extensions.gen_random_bytes(32), 'hex'), 'push_webhook_secret', 'Authenticates pg_net calls to the send-push Edge Function')
where not exists (select 1 from vault.secrets where name = 'push_webhook_secret');

-- Called by the Edge Function (secret key only) to check the header it received.
create or replace function public.push_secret_ok(p_secret text)
returns boolean language sql stable security definer set search_path to 'public' as $$
  select exists (select 1 from vault.decrypted_secrets where name = 'push_webhook_secret' and decrypted_secret = p_secret);
$$;
revoke execute on function public.push_secret_ok(text) from public, anon, authenticated;
grant execute on function public.push_secret_ok(text) to service_role;

-- Queue a push for one user. Title/body are optional: the function writes them in the
-- recipient's language from data.type when they're null.
create or replace function public.send_push(p_user uuid, p_title text, p_body text, p_data jsonb)
returns void language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare v_secret text;
begin
  if p_user is null or not exists (select 1 from public.push_tokens where user_id = p_user) then return; end if;
  select decrypted_secret into v_secret from vault.decrypted_secrets where name = 'push_webhook_secret';
  perform net.http_post(
    url := 'https://qczfeaibovqzgcnsedks.supabase.co/functions/v1/send-push',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', v_secret),
    body := jsonb_build_object('user_id', p_user, 'title', p_title, 'body', p_body, 'data', coalesce(p_data, '{}'::jsonb)),
    timeout_milliseconds := 5000
  );
end $$;
revoke execute on function public.send_push(uuid, text, text, jsonb) from public, anon, authenticated;

-- Offers/acceptances now come through the notifications table (localised), so the old
-- English-only push from applications is turned off.
create or replace function public.notify_application() returns trigger
language plpgsql security definer set search_path to 'public' as $$
begin
  return new;
end $$;

-- Every in-app notification is also pushed to the phone.
create or replace function public.push_notification() returns trigger
language plpgsql security definer set search_path to 'public' as $$
declare v_actor text;
begin
  select full_name into v_actor from public.profiles where id = new.actor_id;
  perform public.send_push(new.user_id, null, null,
    new.data || jsonb_build_object('type', new.type, 'jobId', new.job_id, 'actor', coalesce(v_actor, '')));
  return new;
end $$;
revoke execute on function public.push_notification() from public, anon, authenticated;

create trigger on_notification_push after insert on public.notifications
  for each row execute function public.push_notification();

-- Chat messages: sender's name as title, the text (or a photo label) as body.
create or replace function public.notify_message() returns trigger
language plpgsql security definer set search_path to 'public' as $$
declare c record; v_name text;
begin
  select * into c from public.conversations where id = new.conversation_id;
  select full_name into v_name from public.profiles where id = new.sender_id;
  perform public.send_push(case when new.sender_id = c.poster_id then c.worker_id else c.poster_id end,
    coalesce(nullif(v_name, ''), 'ergo'),
    case when new.image_path is not null then null else left(new.body, 140) end,
    jsonb_build_object('type', 'message', 'conversationId', new.conversation_id, 'image', new.image_path is not null));
  return new;
end $$;
