// Sends a push notification to every phone of one user via Firebase Cloud Messaging (HTTP v1).
// Called only by the database (public.send_push via pg_net) with the x-push-secret header,
// which is checked against Vault. Deployed with verify_jwt = false.
//
// Needs the Edge Function secret FCM_SERVICE_ACCOUNT: the Firebase service-account JSON
// (Firebase console -> Project settings -> Service accounts -> Generate new private key).
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

type Payload = { user_id: string; title?: string | null; body?: string | null; data?: Record<string, unknown> };
type ServiceAccount = { project_id: string; client_email: string; private_key: string };

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

function secretKey(): string {
  try {
    const k = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}')['default'];
    if (k) return k;
  } catch {
    // fall back to the legacy key
  }
  return Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
}

const admin = createClient(Deno.env.get('SUPABASE_URL')!, secretKey(), { auth: { persistSession: false, autoRefreshToken: false } });

// ---------- texts in the recipient's language ----------
function compose(lang: 'el' | 'en', p: Payload): { title: string; body: string } {
  const d = (p.data ?? {}) as Record<string, string | number | boolean | null>;
  const task = String(d.title ?? '');
  const who = String(d.actor || (lang === 'el' ? 'Κάποιος' : 'Someone'));
  const amount = d.amount != null ? `${Number(d.amount).toLocaleString(lang === 'el' ? 'el-GR' : 'en-GB')} €` : '';
  const el = lang === 'el';
  switch (d.type) {
    case 'offer':
      return { title: el ? 'Νέα προσφορά' : 'New offer', body: el ? `${who} πρόσφερε ${amount} · ${task}` : `${who} offered ${amount} · ${task}` };
    case 'accepted':
      return { title: el ? 'Σε επέλεξαν! 🎉' : 'You got the job! 🎉', body: el ? `${who} δέχτηκε την προσφορά σου · ${task}` : `${who} accepted your offer · ${task}` };
    case 'completed':
      return { title: el ? 'Η εργασία ολοκληρώθηκε' : 'Task completed', body: task };
    case 'cancelled':
      return { title: el ? 'Η εργασία ακυρώθηκε' : 'Task cancelled', body: task };
    case 'review_request':
      return {
        title: el ? 'Πώς πήγε; ⭐' : 'How did it go? ⭐',
        body: el ? `Άφησε κριτική για ${who} · ${task}` : `Leave a review for ${who} · ${task}`,
      };
    case 'review':
      return { title: `${el ? 'Νέα κριτική' : 'New review'} ${'★'.repeat(Math.max(1, Math.min(5, Number(d.rating ?? 5))))}`, body: `${who} · ${task}` };
    case 'message':
      return { title: p.title || 'ergo', body: p.body || (d.image ? (el ? '📷 Φωτογραφία' : '📷 Photo') : '') };
    default:
      return { title: p.title || 'ergo', body: p.body || '' };
  }
}

// ---------- Google OAuth for FCM (service-account JWT, cached) ----------
let cached: { token: string; exp: number } | null = null;

const b64url = (data: ArrayBuffer | Uint8Array | string) => {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

async function accessToken(sa: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cached && cached.exp - 60 > now) return cached.token;
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/firebase.messaging', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })
  );
  const pem = sa.private_key.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '');
  const der = Uint8Array.from(atob(pem), (ch) => ch.charCodeAt(0));
  const key = await crypto.subtle.importKey('pkcs8', der, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(`${header}.${claims}`));
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claims}.${b64url(sig)}` }),
  });
  if (!res.ok) throw new Error(`oauth ${res.status}: ${await res.text()}`);
  const body = await res.json();
  cached = { token: body.access_token, exp: now + (body.expires_in ?? 3600) };
  return cached.token;
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const secret = req.headers.get('x-push-secret') ?? '';
  const { data: ok } = await admin.rpc('push_secret_ok', { p_secret: secret });
  if (!secret || ok !== true) return json({ error: 'unauthorized' }, 401);

  const raw = Deno.env.get('FCM_SERVICE_ACCOUNT');
  if (!raw) return json({ skipped: 'FCM_SERVICE_ACCOUNT not set' });
  let sa: ServiceAccount;
  try {
    sa = JSON.parse(raw);
  } catch {
    return json({ error: 'FCM_SERVICE_ACCOUNT is not valid JSON' }, 500);
  }

  const p = (await req.json()) as Payload;
  if (!p.user_id) return json({ error: 'user_id required' }, 400);

  const [{ data: tokens }, { data: profile }] = await Promise.all([
    admin.from('push_tokens').select('token').eq('user_id', p.user_id),
    admin.from('profiles').select('locale').eq('id', p.user_id).maybeSingle(),
  ]);
  if (!tokens?.length) return json({ sent: 0 });

  const lang = profile?.locale === 'en' ? 'en' : 'el';
  const { title, body } = compose(lang, p);
  // FCM data values must be strings.
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(p.data ?? {})) if (v != null) data[k] = String(v);

  const auth = await accessToken(sa);
  let sent = 0;
  const dead: string[] = [];
  await Promise.all(
    tokens.map(async ({ token }) => {
      const res = await fetch(`https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${auth}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: {
            token,
            notification: { title, body },
            data,
            android: {
              priority: 'high',
              notification: {
                channel_id: data.type === 'message' ? 'messages' : 'default',
                sound: 'default',
                tag: data.conversationId ?? data.jobId,
                color: '#2563EB',
              },
            },
          },
        }),
      });
      if (res.ok) sent++;
      else {
        const text = await res.text();
        // Uninstalled app / expired token: forget it.
        if (res.status === 404 || text.includes('UNREGISTERED') || (res.status === 400 && text.includes('registration token'))) dead.push(token);
        else console.error('fcm', res.status, text);
      }
    })
  );
  if (dead.length) await admin.from('push_tokens').delete().in('token', dead);
  return json({ sent, removed: dead.length });
});
