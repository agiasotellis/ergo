import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Avatar, Card, Empty, H1, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { myConversations } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { ago } from '@/lib/format';
import type { Conversation } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

export default function Messages() {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [items, setItems] = useState<Conversation[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      setItems(await myConversations());
    } catch {
      setItems((i) => i ?? []);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.bg }}>
      <FlatList
        data={items ?? []}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 130, gap: 10 }}
        ListHeaderComponent={<H1 style={{ marginBottom: 8 }}>{t.messages.title}</H1>}
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
        ListEmptyComponent={items === null ? <Loading /> : <Empty title={t.messages.empty} />}
        renderItem={({ item, index }) => {
          const other = item.poster_id === userId ? item.worker : item.poster;
          return (
            <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 40)}>
              <Card onPress={() => router.push(`/chat/${item.id}`)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14 }}>
                <View>
                  <Avatar name={other?.full_name} url={other?.avatar_url} size={50} />
                  {item.job && (
                    <View style={{ position: 'absolute', right: -6, bottom: -6 }}>
                      <CategoryTile cat={item.job.category} size={24} />
                    </View>
                  )}
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
                    <Txt weight="700" numberOfLines={1} style={{ flex: 1 }}>
                      {other?.full_name || '—'}
                    </Txt>
                    <Txt size={12} muted>
                      {ago(item.last_message_at, lang)}
                    </Txt>
                  </View>
                  <Txt size={13} muted numberOfLines={1}>
                    {item.job?.title}
                  </Txt>
                  {!!item.last_message && (
                    <Txt size={14} numberOfLines={1} color={c.body}>
                      {item.last_message}
                    </Txt>
                  )}
                </View>
              </Card>
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
  );
}
