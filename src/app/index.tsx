import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/lib/auth';
import { getPref } from '@/lib/storage';

/** Entry gate: first launch → welcome; signed out → auth; otherwise the app. */
export default function Index() {
  const { session } = useAuth();
  const [onboarded, setOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    getPref('onboarded', false).then(setOnboarded);
  }, []);

  if (onboarded === null) return null;
  if (session) return <Redirect href="/(tabs)" />;
  if (!onboarded) return <Redirect href="/welcome" />;
  return <Redirect href="/auth" />;
}
