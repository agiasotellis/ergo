/**
 * Public runtime configuration. Values come from EXPO_PUBLIC_* variables
 * (a local `.env` file, or GitHub secrets in CI). Supabase publishable keys
 * are designed to be public; access is enforced by row-level security.
 */
export const env = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://qczfeaibovqzgcnsedks.supabase.co',
  supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_KEY || 'sb_publishable_4Do6fCKPOF79cRvyB6H8mQ_fT955KOV',
  // OAuth *Web* client ID (public; Google sign-in returns an ID token for this audience).
  googleWebClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || '578697033878-cq6mf0m20f9ksq2hg92e6t1tpsdh0iop.apps.googleusercontent.com',
};

/** Host of the share-link site (web/ in this repo, on Vercel). Also set in app.config.ts. */
export const LINK_HOST = 'ergo-tasks.vercel.app';

/** https link that opens a task in the app (or a small web page if it isn't installed). */
export const taskLink = (id: string) => `https://${LINK_HOST}/t/${id}`;
