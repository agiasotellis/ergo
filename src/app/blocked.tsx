import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { Avatar, Button, Card, Empty, H1, IconButton, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { blockedProfiles, unblockUser } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { useTheme } from '@/theme/ThemeProvider';

type Row = Awaited<ReturnType<typeof blockedProfiles>>[number];

/** People you've blocked, with Unblock. */
export default function Blocked() {
  const { c } = useTheme();
  const { t } = useI18n();
  const { userId } = useAuth();
  const [rows, setRows] = useState<Row[] | null>(null);

  useFocusEffect(
    useCallback(() => {
      blockedProfiles()
        .then(setRows)
        .catch(() => setRows([]));
    }, [])
  );

  const unblock = async (id: string) => {
    if (!userId) return;
    try {
      await unblockUser(userId, id);
      setRows((r) => (r ?? []).filter((x) => x.blocked_id !== id));
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 20, paddingTop: 8 }}>
        <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
        <H1 style={{ flex: 1 }}>{t.safety.blockedList}</H1>
      </View>
      {rows === null ? (
        <Loading />
      ) : (
        <FlatList
          data={rows}
          keyExtractor={(r) => r.blocked_id}
          contentContainerStyle={{ padding: 20, gap: 10, flexGrow: 1 }}
          ListEmptyComponent={
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 80 }}>
              <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: c.soft, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="block" color={c.muted} size={30} />
              </View>
              <Empty title={t.safety.noBlocked} />
            </View>
          }
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 40)} exiting={FadeOut}>
              <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12 }}>
                <Avatar name={item.profile?.full_name} url={item.profile?.avatar_url} size={44} />
                <Txt weight="700" numberOfLines={1} style={{ flex: 1 }}>
                  {item.profile?.full_name || '—'}
                </Txt>
                <Button title={t.safety.unblock} variant="secondary" size="md" onPress={() => unblock(item.blocked_id)} />
              </Card>
            </Animated.View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
