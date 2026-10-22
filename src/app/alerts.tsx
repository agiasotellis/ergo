import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, Switch, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { Button, Card, Chip, H1, IconButton, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { getTaskAlert, saveTaskAlert } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { CATEGORIES } from '@/lib/categories';
import { euro, km } from '@/lib/format';
import { RADIUS_OPTIONS } from '@/lib/filters';
import { useLocation } from '@/lib/location';
import { registerForPush } from '@/lib/push';
import type { CategoryKey, TaskAlert } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

const MIN_PRICES = [0, 10, 20, 50, 100];

/** Settings for push alerts about new tasks nearby (matched in the database when a task is posted). */
export default function Alerts() {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const loc = useLocation();
  const insets = useSafeAreaInsets();
  const [saved, setSaved] = useState<TaskAlert | null | undefined>(undefined);
  const [enabled, setEnabled] = useState(true);
  const [radius, setRadius] = useState(5);
  const [cats, setCats] = useState<CategoryKey[]>([]);
  const [minBudget, setMinBudget] = useState(0);
  // null = use the current device position when saving.
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!userId) return;
    getTaskAlert(userId)
      .then((a) => {
        setSaved(a);
        if (a) {
          setEnabled(a.enabled);
          setRadius(a.radius_km);
          setCats(a.categories ?? []);
          setMinBudget(Number(a.min_budget) || 0);
          setCenter({ lat: a.lat, lng: a.lng });
        }
      })
      .catch(() => setSaved(null));
  }, [userId]);

  if (saved === undefined || !userId) return <Loading />;

  const toggleCat = (k: CategoryKey) => setCats((list) => (list.includes(k) ? list.filter((x) => x !== k) : [...list, k]));

  const save = async () => {
    const pos = center ?? (loc.granted ? { lat: loc.lat, lng: loc.lng } : null);
    if (!pos) {
      loc.refresh();
      return Alert.alert('ergo', t.alerts.needLocation);
    }
    setBusy(true);
    try {
      await saveTaskAlert({ user_id: userId, enabled, lat: pos.lat, lng: pos.lng, radius_km: radius, categories: cats, min_budget: minBudget });
      // Alerts arrive as push notifications, so make sure this phone can receive them.
      const canPush = enabled ? await registerForPush(lang) : true;
      Alert.alert('ergo', canPush ? t.alerts.saved : t.alerts.needPush, [{ text: 'OK', onPress: () => router.back() }]);
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4 }}>
        <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
        <H1 style={{ flex: 1 }}>{t.alerts.title}</H1>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 120 + insets.bottom }}>
        <Txt color={c.body}>{t.alerts.sub}</Txt>

        <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: enabled ? c.primarySoft : c.soft, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="bell" color={enabled ? c.primaryText : c.muted} size={20} />
          </View>
          <Txt weight="700" style={{ flex: 1 }}>
            {t.alerts.enable}
          </Txt>
          <Switch accessibilityLabel={t.alerts.enable} value={enabled} onValueChange={setEnabled} trackColor={{ false: c.line, true: c.primary }} thumbColor="#FFFFFF" />
        </Card>

        {enabled && (
          <Animated.View entering={FadeIn} style={{ gap: 16 }}>
            <Card style={{ gap: 12 }}>
              <Txt size={14} weight="800">
                {t.alerts.area}
              </Txt>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Icon name="pin" color={c.primaryText} size={18} />
                <Txt style={{ flex: 1 }} color={c.body}>
                  {center ? t.alerts.areaSaved : loc.area ? `${t.alerts.areaHere} · ${loc.area}` : t.alerts.areaHere}
                </Txt>
              </View>
              {center && (
                <Button
                  title={t.alerts.useHere}
                  icon="locate"
                  variant="secondary"
                  size="md"
                  onPress={async () => {
                    await loc.refresh();
                    setCenter(null);
                  }}
                />
              )}
            </Card>

            <Card style={{ gap: 10 }}>
              <Txt size={14} weight="800">
                {t.alerts.radius}
              </Txt>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {RADIUS_OPTIONS.map((r) => (
                  <Chip key={r} label={km(r, lang)} selected={r === radius} onPress={() => setRadius(r)} />
                ))}
              </View>
            </Card>

            <Card style={{ gap: 10 }}>
              <Txt size={14} weight="800">
                {t.alerts.categories}
              </Txt>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                <Chip label={t.alerts.allCategories} selected={cats.length === 0} onPress={() => setCats([])} />
                {CATEGORIES.map(({ key }) => (
                  <Chip key={key} label={t.categories[key]} selected={cats.includes(key)} onPress={() => toggleCat(key)} />
                ))}
              </View>
            </Card>

            <Card style={{ gap: 10 }}>
              <Txt size={14} weight="800">
                {t.alerts.minPrice}
              </Txt>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {MIN_PRICES.map((p) => (
                  <Chip key={p} label={p === 0 ? t.alerts.anyPrice : `${euro(p, lang)}+`} selected={p === minBudget} onPress={() => setMinBudget(p)} />
                ))}
              </View>
            </Card>

            <Txt size={12} muted center>
              {t.alerts.limit}
            </Txt>
          </Animated.View>
        )}
      </ScrollView>

      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, paddingBottom: Math.max(insets.bottom, 12) + 4, backgroundColor: c.bg }}>
        <Button title={t.alerts.save} loading={busy} onPress={save} />
      </View>
    </SafeAreaView>
  );
}
