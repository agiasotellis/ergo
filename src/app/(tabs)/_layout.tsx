import { Redirect } from 'expo-router';
import { Tabs } from 'expo-router/tabs';
import { useCallback, useEffect, useState } from 'react';

import { TabBar } from '@/components/TabBar';
import { unreadCount } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export default function TabsLayout() {
  const { session, userId } = useAuth();
  const [unread, setUnread] = useState(0);

  const refresh = useCallback(async () => {
    if (userId) setUnread(await unreadCount(userId));
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    refresh();
    const ch = supabase
      .channel('unread')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, () => refresh())
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [userId, refresh]);

  if (!session) return <Redirect href="/auth" />;

  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} unread={unread} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
