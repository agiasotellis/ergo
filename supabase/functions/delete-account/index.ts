// Deletes the signed-in user's account and everything they own.
// Called from the app (Profile → Delete account). Required by Google Play.
//
// Auth: the caller's access token (Authorization: Bearer <jwt>) is verified here with
// auth.getUser, so the function is deployed with verify_jwt = false.
// Deleting the auth user cascades to profiles → jobs, offers, chats, messages, reviews,
// notifications (all foreign keys are ON DELETE CASCADE).
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

function secretKey(): string {
  const keys = Deno.env.get('SUPABASE_SECRET_KEYS');
  if (keys) {
    try {
      const k = JSON.parse(keys)['default'];
      if (k) return k;
    } catch {
      // fall through to the legacy key
    }
  }
  return Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
}

async function removeFolder(admin: ReturnType<typeof createClient>, bucket: string, folder: string) {
  for (let page = 0; page < 50; page++) {
    const { data, error } = await admin.storage.from(bucket).list(folder, { limit: 100 });
    if (error || !data || data.length === 0) return;
    const paths = data.map((f) => `${folder}/${f.name}`);
    const { error: rmError } = await admin.storage.from(bucket).remove(paths);
    if (rmError) return;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const token = (req.headers.get('Authorization') ?? '').replace(/^Bearer\s+/i, '');
  if (!token) return json({ error: 'unauthorized' }, 401);

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, secretKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(token);
  const user = userData?.user;
  if (userError || !user) return json({ error: 'unauthorized' }, 401);

  // Tasks this person was helping with go back to "open" so their posters can pick someone else.
  await admin.from('jobs').update({ status: 'open', assigned_to: null }).eq('assigned_to', user.id).eq('status', 'assigned');

  // Uploaded photos live under <user id>/ in each bucket.
  await removeFolder(admin, 'job-photos', user.id);
  await removeFolder(admin, 'avatars', user.id);

  const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
  if (deleteError) return json({ error: 'delete_failed' }, 500);

  return json({ ok: true });
});
