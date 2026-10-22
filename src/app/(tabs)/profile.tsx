import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Pressable, ScrollView, Switch, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons';
import { Avatar, Badge, Card, Empty, H1, H2, Segmented, Stars, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { deleteMyAccount, getStats, myJobs, pickAndUploadPhoto, reviewsFor, updateProfile } from '@/lib/api';
import { useAppLock } from '@/lib/appLock';
import { useAuth } from '@/lib/auth';
import { ago, euro, rating } from '@/lib/format';
import type { Job, ProfileStats, Review } from '@/lib/types';
import { openProfile } from '@/lib/nav';
import { useTheme, type ThemePref } from '@/theme/ThemeProvider';

function Row({ icon, label, children, onPress, danger }: { icon: IconName; label: string; children?: React.ReactNode; onPress?: () => void; danger?: boolean }) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      onPress={onPress}
      disabled={!onPress}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, minHeight: 56 }}
    >
      <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: danger ? c.dangerSoft : c.soft, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} color={danger ? c.danger : c.ink} size={20} />
      </View>
      <Txt weight="600" color={danger ? c.danger : c.ink} style={{ flex: 1 }} numberOfLines={2}>
        {label}
      </Txt>
      {children}
    </Pressable>
  );
}

export default function Profile() {
  const { c, pref, setPref } = useTheme();
  const { t, lang, setLang } = useI18n();
  const { userId, profile, refreshProfile, signOut } = useAuth();
  const lock = useAppLock();
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [tab, setTab] = useState<'worker' | 'poster'>('worker');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  const load = useCallback(async () => {
    if (!userId) return;
    try {
      const [s, r, j] = await Promise.all([getStats(userId), reviewsFor(userId, tab), myJobs(userId)]);
      setStats(s);
      setReviews(r);
      setJobs(j);
    } catch {
      // Keep whatever is already on screen.
    }
  }, [userId, tab]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const changePhoto = async () => {
    if (!userId) return;
    try {
      const url = await pickAndUploadPhoto(userId, 'avatars');
      if (url) {
        await updateProfile(userId, { avatar_url: url });
        refreshProfile();
      }
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  };

  const confirmDelete = () =>
    Alert.alert(t.profile.deleteAccount, t.profile.deleteConfirm, [
      { text: t.common.cancel, style: 'cancel' },
      {
        text: t.profile.deleteYes,
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteMyAccount();
            await signOut();
            router.replace('/auth');
          } catch {
            Alert.alert('ergo', t.common.error);
          }
        },
      },
    ]);

  const roleRating = tab === 'worker' ? stats?.worker_rating : stats?.poster_rating;
  const doneCount = jobs.filter((j) => j.status === 'completed').length;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 130, gap: 18 }}>
        <H1>{t.profile.title}</H1>

        <Animated.View entering={FadeInDown.duration(400)}>
          <Card style={{ alignItems: 'center', gap: 10, padding: 20 }}>
            <Pressable accessibilityRole="button" accessibilityLabel={t.post.addPhoto} onPress={changePhoto}>
              <Avatar name={profile?.full_name} url={profile?.avatar_url} size={92} />
              <View style={{ position: 'absolute', right: -4, bottom: -4, width: 32, height: 32, borderRadius: 16, backgroundColor: c.primary, borderWidth: 3, borderColor: c.card, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="camera" color="#FFFFFF" size={14} strokeWidth={2.4} />
              </View>
            </Pressable>
            <Txt size={24} weight="900" center numberOfLines={2} style={{ letterSpacing: -0.4 }}>
              {profile?.full_name || '—'}
            </Txt>
            <View style={{ flexDirection: 'row', gap: 8, width: '100%', marginTop: 6 }}>
              {[
                { v: `★ ${rating(stats?.worker_rating ?? stats?.poster_rating, lang)}`, l: t.profile.rating },
                { v: String(doneCount), l: t.profile.done },
                { v: String((stats?.worker_reviews ?? 0) + (stats?.poster_reviews ?? 0)), l: t.profile.reviewsCount },
              ].map((s) => (
                <View key={s.l} style={{ flex: 1, minWidth: 0, backgroundColor: c.soft, borderRadius: 18, paddingVertical: 14, paddingHorizontal: 6, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <Txt size={20} weight="800" center numberOfLines={1}>
                    {s.v}
                  </Txt>
                  {/* One line that shrinks to fit, so long Greek words never break mid-word. */}
                  <Txt size={12} weight="500" muted center numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.75} style={{ alignSelf: 'stretch' }}>
                    {s.l}
                  </Txt>
                </View>
              ))}
            </View>
          </Card>
        </Animated.View>

        <View style={{ gap: 12 }}>
          <H2>{t.profile.reviews}</H2>
          <Segmented
            label={t.profile.reviews}
            value={tab}
            onChange={setTab}
            options={[
              { value: 'worker', label: t.profile.asHelper },
              { value: 'poster', label: t.profile.asPoster },
            ]}
          />
          {roleRating != null && (
            <Txt muted>{`★ ${rating(roleRating, lang)} · ${tab === 'worker' ? stats?.worker_reviews : stats?.poster_reviews} ${t.profile.reviewsCount.toLowerCase()}`}</Txt>
          )}
          {reviews.length === 0 ? (
            <Empty title={t.profile.noReviews} />
          ) : (
            reviews.map((r, i) => (
              <Animated.View key={r.id} entering={FadeInDown.delay(i * 60)}>
                <Card style={{ gap: 10 }}>
                  <Pressable accessibilityRole="button" onPress={() => openProfile(r.reviewer_id, userId)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar name={r.reviewer?.full_name} url={r.reviewer?.avatar_url} size={40} />
                    <View style={{ flex: 1 }}>
                      <Txt weight="700">{r.reviewer?.full_name || '—'}</Txt>
                      <Txt size={12} muted numberOfLines={1}>
                        {[r.job?.title, ago(r.created_at, lang)].filter(Boolean).join(' · ')}
                      </Txt>
                    </View>
                    <Stars value={r.rating} />
                  </Pressable>
                  {!!r.comment && <Txt color={c.body}>{r.comment}</Txt>}
                </Card>
              </Animated.View>
            ))
          )}
        </View>

        <View style={{ gap: 12 }}>
          <H2>{t.profile.myTasks}</H2>
          {jobs.length === 0 ? (
            <Empty title={t.profile.noTasks} />
          ) : (
            jobs.slice(0, 10).map((j) => (
              <Card key={j.id} onPress={() => router.push(`/task/${j.id}`)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12 }}>
                <CategoryTile cat={j.category} size={44} />
                <View style={{ flex: 1, gap: 4 }}>
                  <Txt weight="700" numberOfLines={1}>
                    {j.title}
                  </Txt>
                  <Badge
                    label={t.task.status[j.status]}
                    bg={j.status === 'open' ? c.primarySoft : j.status === 'completed' ? c.okSoft : j.status === 'cancelled' ? c.dangerSoft : c.warnSoft}
                    fg={j.status === 'open' ? c.primaryText : j.status === 'completed' ? c.ok : j.status === 'cancelled' ? c.danger : c.warn}
                  />
                </View>
                <Txt weight="800" numberOfLines={1}>
                  {euro(j.budget, lang)}
                </Txt>
                <Icon name="chevron" color={c.muted} size={18} />
              </Card>
            ))
          )}
        </View>

        <View style={{ gap: 4 }}>
          <H2 style={{ marginBottom: 8 }}>{t.profile.settings}</H2>
          <Card style={{ paddingVertical: 4 }}>
            <Row icon="globe" label={t.profile.language}>
              <View style={{ width: 116 }}>
                <Segmented
                  label={t.profile.language}
                  value={lang}
                  onChange={(l) => {
                    setLang(l);
                    if (userId) updateProfile(userId, { locale: l }).catch(() => {});
                  }}
                  options={[
                    { value: 'el', label: 'ΕΛ' },
                    { value: 'en', label: 'EN' },
                  ]}
                />
              </View>
            </Row>
            <View style={{ paddingBottom: 12, gap: 8 }}>
              <Row icon="moon" label={t.profile.theme} />
              <Segmented<ThemePref>
                label={t.profile.theme}
                value={pref}
                onChange={setPref}
                options={[
                  { value: 'system', label: t.profile.themeSystem },
                  { value: 'light', label: t.profile.themeLight },
                  { value: 'dark', label: t.profile.themeDark },
                ]}
              />
            </View>
            <Row icon="fingerprint" label={t.lock.setting}>
              <Switch
                accessibilityLabel={t.lock.setting}
                value={lock.enabled}
                disabled={!lock.available && !lock.enabled}
                onValueChange={(on) => {
                  lock.setEnabled(on).catch(() => Alert.alert('ergo', t.common.error));
                }}
                trackColor={{ false: c.line, true: c.primary }}
                thumbColor="#FFFFFF"
              />
            </Row>
            <Txt size={12} muted style={{ marginTop: -6, marginBottom: 6, marginLeft: 52 }}>
              {lock.available || lock.enabled ? t.lock.settingHint : t.lock.unavailable}
            </Txt>
            <Row icon="block" label={t.safety.blockedList} onPress={() => router.push('/blocked')}>
              <Icon name="chevron" color={c.muted} size={18} />
            </Row>
            <Row
              icon="logout"
              label={t.profile.logout}
              onPress={async () => {
                await signOut();
                router.replace('/auth');
              }}
            />
            <Row icon="trash" label={t.profile.deleteAccount} danger onPress={confirmDelete} />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
