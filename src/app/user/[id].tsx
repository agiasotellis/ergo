import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { ActionSheet, ReportSheet, confirmBlock } from '@/components/Sheets';
import { Avatar, Card, Empty, H2, IconButton, Loading, Segmented, Stars, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { getProfile, getStats, helpedCount, openJobsOf, reviewsFor } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { ago, euro, rating, when } from '@/lib/format';
import { openProfile } from '@/lib/nav';
import type { Job, Profile, ProfileStats, ReportTarget, Review } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';
import { DUR, EASE_OUT } from '@/theme/motion';

/** Someone else's public profile: who they are, how they're rated, and their open tasks. */
export default function UserProfile() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [helped, setHelped] = useState(0);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [tab, setTab] = useState<'worker' | 'poster'>('worker');
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [menu, setMenu] = useState(false);
  const [report, setReport] = useState<ReportTarget | null>(null);

  useEffect(() => {
    if (!id) return;
    getProfile(id)
      .then(setProfile)
      .catch(() => setProfile(null));
    getStats(id).then(setStats).catch(() => {});
    helpedCount(id).then(setHelped).catch(() => {});
    openJobsOf(id).then(setJobs).catch(() => {});
  }, [id]);

  useEffect(() => {
    if (!id) return;
    let alive = true;
    reviewsFor(id, tab)
      .then((r) => alive && setReviews(r))
      .catch(() => alive && setReviews([]));
    return () => {
      alive = false;
    };
  }, [id, tab]);

  if (profile === undefined) return <Loading />;

  const back = <IconButton name="back" label={t.common.back} onPress={() => router.back()} />;
  if (!profile) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.bg, padding: 20 }}>
        {back}
        <Empty title={t.profile.notFound} />
      </SafeAreaView>
    );
  }

  const name = profile.full_name || '—';
  const totalReviews = (stats?.worker_reviews ?? 0) + (stats?.poster_reviews ?? 0);
  const overall = stats?.worker_rating ?? stats?.poster_rating;
  const since = new Date(profile.created_at).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-GB', { month: 'long', year: 'numeric' });
  const roleRating = tab === 'worker' ? stats?.worker_rating : stats?.poster_rating;
  const roleCount = tab === 'worker' ? stats?.worker_reviews : stats?.poster_reviews;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 8 }}>
        {back}
        {userId && id !== userId && <IconButton name="more" label={t.safety.more} onPress={() => setMenu(true)} />}
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 48, gap: 20 }}>
        <Animated.View entering={FadeInDown.duration(DUR.base).easing(EASE_OUT)}>
          <Card style={{ alignItems: 'center', gap: 8, padding: 20 }}>
            <Avatar name={profile.full_name} url={profile.avatar_url} size={96} />
            <Txt size={24} weight="900" center numberOfLines={2} style={{ letterSpacing: -0.4, marginTop: 4 }}>
              {name}
            </Txt>
            <Txt size={13} muted center>
              {t.profile.memberSince(since)}
            </Txt>
            <View style={{ flexDirection: 'row', gap: 8, width: '100%', marginTop: 8 }}>
              {[
                { v: `★ ${rating(overall, lang)}`, l: t.profile.rating },
                { v: String(helped), l: t.profile.helped },
                { v: String(totalReviews), l: t.profile.reviewsCount },
              ].map((s) => (
                <View key={s.l} style={{ flex: 1, minWidth: 0, backgroundColor: c.soft, borderRadius: 18, paddingVertical: 14, paddingHorizontal: 6, alignItems: 'center', gap: 2 }}>
                  <Txt size={20} weight="800" center numberOfLines={1}>
                    {s.v}
                  </Txt>
                  <Txt size={12} weight="500" muted center numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.75} style={{ alignSelf: 'stretch' }}>
                    {s.l}
                  </Txt>
                </View>
              ))}
            </View>
          </Card>
        </Animated.View>

        {!!profile.bio && (
          <View style={{ gap: 8 }}>
            <H2>{t.profile.about}</H2>
            <Txt color={c.body} style={{ lineHeight: 22 }}>
              {profile.bio}
            </Txt>
          </View>
        )}

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
          {roleRating != null && <Txt muted>{`★ ${rating(roleRating, lang)} · ${roleCount ?? 0} ${t.profile.reviewsCount.toLowerCase()}`}</Txt>}
          {reviews === null ? (
            <Loading />
          ) : reviews.length === 0 ? (
            <Empty title={t.profile.noReviews} />
          ) : (
            reviews.map((r, i) => (
              <Animated.View key={r.id} entering={FadeIn.delay(Math.min(i, 6) * 40).duration(DUR.base)}>
                <Card style={{ gap: 10 }}>
                  <Pressable accessibilityRole="button" onPress={() => openProfile(r.reviewer_id, userId)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar name={r.reviewer?.full_name} url={r.reviewer?.avatar_url} size={40} />
                    <View style={{ flex: 1 }}>
                      <Txt weight="700" numberOfLines={1}>
                        {r.reviewer?.full_name || '—'}
                      </Txt>
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
          <H2>{t.profile.openTasks}</H2>
          {jobs.length === 0 ? (
            <Txt muted>{t.profile.noOpenTasks}</Txt>
          ) : (
            jobs.map((j) => (
              <Card key={j.id} onPress={() => router.push(`/task/${j.id}`)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12 }}>
                <CategoryTile cat={j.category} size={44} />
                <View style={{ flex: 1, gap: 2 }}>
                  <Txt weight="700" numberOfLines={1}>
                    {j.title}
                  </Txt>
                  <Txt size={12} muted numberOfLines={1}>
                    {when(j.scheduled_at, lang, t.task.flexible)}
                  </Txt>
                </View>
                <Txt weight="800" numberOfLines={1}>
                  {euro(j.budget, lang)}
                </Txt>
                <Icon name="chevron" color={c.muted} size={18} />
              </Card>
            ))
          )}
        </View>
      </ScrollView>

      {userId && id && (
        <>
          <ActionSheet
            visible={menu}
            onClose={() => setMenu(false)}
            actions={[
              { icon: 'flag', label: t.safety.reportUser, onPress: () => setReport({ type: 'user', id, userId: id }) },
              { icon: 'block', label: t.safety.block, danger: true, onPress: () => confirmBlock({ me: userId, other: id, name, t, onDone: () => router.back() }) },
            ]}
          />
          <ReportSheet target={report} onClose={() => setReport(null)} onBlocked={() => router.back()} />
        </>
      )}
    </SafeAreaView>
  );
}
