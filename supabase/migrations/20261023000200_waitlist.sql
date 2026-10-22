-- Pre-launch waitlist filled from the landing page (anonymous visitors).
-- Visitors can't read or touch the table; they can only call join_waitlist().
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  lang text not null default 'el' check (lang in ('el', 'en')),
  role text check (role in ('need_help', 'helper', 'both')),
  platform text check (platform in ('android', 'iphone')),
  ip_hash text,
  created_at timestamptz not null default now()
);
create unique index if not exists waitlist_email_key on public.waitlist (lower(email));
create index if not exists waitlist_ip_recent on public.waitlist (ip_hash, created_at);
alter table public.waitlist enable row level security;
revoke all on public.waitlist from public, anon, authenticated;

create or replace function public.join_waitlist(p_email text, p_lang text default 'el', p_role text default null, p_platform text default null)
returns text language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare
  v_email text := lower(btrim(coalesce(p_email, '')));
  v_ip text;
  v_hash text;
  v_recent int;
begin
  if length(v_email) > 254 or v_email !~ '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' then
    return 'invalid';
  end if;
  -- Light abuse guard: at most 5 sign-ups per hour from one address (stored only as a hash).
  begin
    v_ip := split_part(coalesce(current_setting('request.headers', true)::json ->> 'x-forwarded-for', ''), ',', 1);
  exception when others then v_ip := '';
  end;
  if v_ip <> '' then
    v_hash := encode(digest(v_ip || 'ergo-waitlist', 'sha256'), 'hex');
    select count(*) into v_recent from public.waitlist where ip_hash = v_hash and created_at > now() - interval '1 hour';
    if v_recent >= 5 then return 'rate_limited'; end if;
  end if;
  insert into public.waitlist (email, lang, role, platform, ip_hash)
  values (v_email,
          case when p_lang = 'en' then 'en' else 'el' end,
          case when p_role in ('need_help', 'helper', 'both') then p_role end,
          case when p_platform in ('android', 'iphone') then p_platform end,
          v_hash)
  on conflict ((lower(email))) do nothing;
  return 'ok';
end $$;
revoke execute on function public.join_waitlist(text, text, text, text) from public;
grant execute on function public.join_waitlist(text, text, text, text) to anon, authenticated;
