import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, RefreshControl, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons';
import { Avatar, Card, Empty, H1, IconButton, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { markNotificationsRead, myNotifications } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { ago, euro } from '@/lib/format';
import type { AppNotification, NotificationType } from '@/lib/types';
import { openProfile } from '@/lib/nav';
import { useTheme } from '@/theme/ThemeProvider';

export default function Notifications() {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [items, setItems] = useState<AppNotification[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    if (!userId) return;
    try {
      const list = await myNotifications(userId);
      setItems(list);
      // Highlights stay on screen for this visit; the badge clears right away.
      if (list.some((n) => !n.read_at)) markNotificationsRead(userId).catch(() => {});
    } catch {
      setItems((i) => i ?? []);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const look: Record<NotificationType, { icon: IconName; bg: string; fg: string }> = {
    offer: { icon: 'tag', bg: c.primarySoft, fg: c.primaryText },
    accepted: { icon: 'check', bg: c.okSoft, fg: c.ok },
    completed: { icon: 'check', bg: c.okSoft, fg: c.ok },
    cancelled: { icon: 'close', bg: c.dangerSoft, fg: c.danger },
    review: { icon: 'star', bg: c.warnSoft, fg: c.warn },
  };

  const text = (n: AppNotification) => {
    const name = n.actor?.full_name || t.notifications.someone;
    switch (n.type) {
      case 'offer':
        return t.notifications.offer(name, euro(n.data.amount ?? null, lang));
      case 'accepted':
        return t.notifications.accepted(name);
      case 'completed':
        return t.notifications.completed;
      case 'cancelled':
        return t.notifications.cancelled;
      case 'review':
        return t.notifications.review(name, n.data.rating ?? 5);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4 }}>
        <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
        <H1 style={{ flex: 1 }}>{t.notifications.title}</H1>
      </View>
      <FlatList
        data={items ?? []}
        keyExtractor={(n) => n.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 40, gap: 10, flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await load();
              setRefreshing(false);
            }}
            colors={[c.primary]}
            tintColor={c.primary}
          />
        }
        ListEmptyComponent={
          items === null ? (
            <Loading />
          ) : (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4, paddingBottom: 80 }}>
              <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: c.soft, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="bell" color={c.muted} size={30} />
              </View>
              <Empty title={t.notifications.empty} />
            </View>
          )
        }
        renderItem={({ item, index }) => {
          const l = look[item.type];
          const unread = !item.read_at;
          return (
            <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 40)}>
              <Card
                onPress={item.job_id ? () => router.push(`/task/${item.job_id}`) : undefined}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderWidth: 1.5, borderColor: unread ? c.primary : 'transparent' }}
              >
                <Pressable accessibilityRole="button" accessibilityLabel={item.actor?.full_name ?? ''} onPress={() => openProfile(item.actor_id, userId)} hitSlop={4}>
                  <Avatar name={item.actor?.full_name} url={item.actor?.avatar_url} size={48} />
                  <View style={{ position: 'absolute', right: -5, bottom: -5, width: 24, height: 24, borderRadius: 12, backgroundColor: l.bg, borderWidth: 2, borderColor: c.card, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={l.icon} color={l.fg} size={12} strokeWidth={3} />
                  </View>
                </Pressable>
                <View style={{ flex: 1, gap: 2 }}>
                  <Txt size={14} weight={unread ? '700' : '500'} numberOfLines={2}>
                    {text(item)}
                  </Txt>
                  {!!item.data.title && (
                    <Txt size={13} muted numberOfLines={1}>
                      {item.data.title}
                    </Txt>
                  )}
                  <Txt size={12} muted>
                    {ago(item.created_at, lang)}
                  </Txt>
                </View>
                {unread && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: c.primary }} />}
              </Card>
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
  );
}
