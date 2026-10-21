import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

import { unreadNotifications } from './api';
import { supabase } from './supabase';

/** Live count of unread notifications for the bell badge. */
export function useUnreadNotifications(userId: string | null | undefined) {
  const [count, setCount] = useState(0);

  const refresh = useCallback(async () => {
    if (!userId) return;
    try {
      setCount(await unreadNotifications(userId));
    } catch {
      // Keep the last known count.
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  useEffect(() => {
    if (!userId) return;
    const ch = supabase
      .channel(`notifications-${userId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notifications', filter: `user_id=eq.${userId}` }, () => refresh())
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [userId, refresh]);

  return count;
}
