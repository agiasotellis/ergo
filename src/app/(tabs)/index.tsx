import { router } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, TextInput, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { TaskCard } from '@/components/TaskCard';
import { Avatar, Button, Chip, Empty, H1, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { nearbyJobs } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { CATEGORIES } from '@/lib/categories';
import { useLocation } from '@/lib/location';
import { darkMapStyle, lightMapStyle } from '@/lib/mapStyle';
import type { CategoryKey, NearbyJob } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

const HOME_RADIUS_KM = 10;

export default function Home() {
  const { c, isDark } = useTheme();
  const { t } = useI18n();
  const { profile } = useAuth();
  const loc = useLocation();
  const [cat, setCat] = useState<CategoryKey | null>(null);
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState<NearbyJob[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    try {
      setError(false);
      setJobs(await nearbyJobs(loc.lat, loc.lng, HOME_RADIUS_KM, cat));
    } catch {
      setError(true);
      setJobs((j) => j ?? []);
    }
  }, [loc.lat, loc.lng, cat]);

  useEffect(() => {
    load();
  }, [load]);

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all([load(), loc.refresh()]);
    setRefreshing(false);
  };

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (jobs ?? []).filter((j) => !q || j.title.toLowerCase().includes(q) || j.description.toLowerCase().includes(q));
  }, [jobs, query]);

  const hour = new Date().getHours();
  const first = profile?.full_name?.split(' ')[0];
  const greet = `${hour < 12 ? t.home.greetMorning : t.home.greetEvening}${first ? `, ${first}` : ''}`;

  const header = (
    <View style={{ gap: 16, paddingBottom: 12 }}>
      <Animated.View entering={FadeInDown.duration(400)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Pressable accessibilityRole="button" accessibilityLabel={t.tabs.profile} onPress={() => router.navigate('/(tabs)/profile')}>
          <Avatar name={profile?.full_name} url={profile?.avatar_url} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Txt size={13} muted>
            {greet}
          </Txt>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Icon name="pin" size={16} color={c.primaryText} strokeWidth={2.2} />
            <Txt size={16} weight="700" numberOfLines={1}>
              {loc.area ?? (loc.granted ? '…' : 'Αθήνα')}
            </Txt>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(60).duration(400)}>
        <H1>
          {t.home.hero1}
          {'\n'}
          {t.home.hero2}
        </H1>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(120).duration(400)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, height: 52, paddingHorizontal: 16, borderRadius: 18, backgroundColor: c.card }}>
        <Icon name="search" color={c.muted} size={20} />
        <TextInput
          accessibilityLabel={t.home.search}
          value={query}
          onChangeText={setQuery}
          placeholder={t.home.search}
          placeholderTextColor={c.muted}
          style={{ flex: 1, fontSize: 15, color: c.ink }}
          returnKeyType="search"
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(180).duration(400)}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t.home.mapCard}
          onPress={() => router.navigate('/(tabs)/map')}
          style={({ pressed }) => ({ height: 150, borderRadius: 26, overflow: 'hidden', transform: [{ scale: pressed ? 0.98 : 1 }] })}
        >
          <MapView
            provider={PROVIDER_GOOGLE}
            liteMode
            pointerEvents="none"
            style={{ flex: 1 }}
            customMapStyle={isDark ? darkMapStyle : lightMapStyle}
            region={{ latitude: loc.lat, longitude: loc.lng, latitudeDelta: 0.05, longitudeDelta: 0.05 }}
          />
          <View style={{ position: 'absolute', left: 14, bottom: 14, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 16, backgroundColor: c.card }}>
            <Txt size={15} weight="700">
              {t.home.tasksWithin(jobs?.length ?? 0, HOME_RADIUS_KM)}
            </Txt>
            <Txt size={13} weight="600" color={c.primaryText}>
              {t.home.mapCard}
            </Txt>
          </View>
        </Pressable>
      </Animated.View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }} style={{ marginHorizontal: -20 }}>
        <View style={{ width: 12 }} />
        <Chip label={t.categories.all} selected={!cat} onPress={() => setCat(null)} />
        {CATEGORIES.map((k) => (
          <Chip key={k.key} label={t.categories[k.key]} selected={cat === k.key} onPress={() => setCat(k.key)} />
        ))}
        <View style={{ width: 12 }} />
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 }}>
        <Txt size={18} weight="700">
          {t.home.nearest}
        </Txt>
        {!loc.granted && !loc.loading && (
          <Pressable accessibilityRole="button" onPress={loc.refresh}>
            <Txt size={12} weight="600" color={c.primaryText}>
              {t.map.myLocation}
            </Txt>
          </Pressable>
        )}
      </View>
      {!loc.granted && !loc.loading && (
        <Txt size={13} muted>
          {t.home.locationOff}
        </Txt>
      )}
    </View>
  );

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.bg }}>
      <FlatList
        data={shown}
        keyExtractor={(j) => j.id}
        ListHeaderComponent={header}
        contentContainerStyle={{ padding: 20, paddingBottom: 130, gap: 12 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={c.primary} colors={[c.primary]} />}
        renderItem={({ item, index }) => <TaskCard job={item} index={index} onPress={() => router.push(`/task/${item.id}`)} />}
        ListEmptyComponent={
          jobs === null ? (
            <Loading />
          ) : error ? (
            <Empty title={t.common.error} action={<Button title={t.common.retry} variant="secondary" size="md" onPress={load} />} />
          ) : (
            <Empty title={t.home.emptyTitle} body={t.home.emptyBody} action={<Button title={t.home.postFirst} size="md" icon="plus" onPress={() => router.push('/post')} />} />
          )
        }
      />
    </SafeAreaView>
  );
}
