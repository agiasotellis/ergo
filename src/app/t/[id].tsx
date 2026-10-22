import { Redirect, useLocalSearchParams } from 'expo-router';

import { useAuth } from '@/lib/auth';

/** Target of share links (https://<link host>/t/<id>): opens the task, or sign-in first. */
export default function TaskLink() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { session } = useAuth();
  const safeId = String(id ?? '').replace(/[^0-9a-fA-F-]/g, '').slice(0, 36);
  if (!session || !safeId) return <Redirect href="/" />;
  return <Redirect href={`/task/${safeId}`} />;
}
