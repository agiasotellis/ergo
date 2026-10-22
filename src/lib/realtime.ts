let seq = 0;

/**
 * A unique realtime channel name. supabase-js reuses a channel when the same name is asked
 * for again, and adding listeners to one that's already subscribed throws
 * ("cannot add postgres_changes callbacks ... after subscribe()"). That happens when a screen
 * mounts again before the previous channel has closed, so every subscription gets its own name.
 */
export function uniqueTopic(base: string) {
  seq += 1;
  return `${base}:${seq}:${Date.now().toString(36)}`;
}
