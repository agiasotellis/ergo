/**
 * Public runtime configuration. Values come from EXPO_PUBLIC_* variables
 * (a local `.env` file, or GitHub secrets in CI). Supabase publishable keys
 * are designed to be public; access is enforced by row-level security.
 */
export const env = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://qczfeaibovqzgcnsedks.supabase.co',
  supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_KEY || 'sb_publishable_4Do6fCKPOF79cRvyB6H8mQ_fT955KOV',
  googleWebClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || '',
};
