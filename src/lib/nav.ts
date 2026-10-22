import { router } from 'expo-router';

/** Opens someone's public profile; your own opens the Profile tab. */
export function openProfile(id: string | null | undefined, me: string | null | undefined) {
  if (!id) return;
  if (id === me) router.navigate('/(tabs)/profile');
  else router.push(`/user/${id}`);
}
