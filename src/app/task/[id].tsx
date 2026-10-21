import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, SlideInDown, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { Avatar, Badge, Button, Card, Field, IconButton, Loading, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import {
  acceptOffer,
  applicationsForJob,
  cancelJob,
  completeJob,
  getJob,
  getProfile,
  getStats,
  leaveReview,
  myApplication,
  myReviewForJob,
  sendOffer,
  startConversation,
} from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { categoryColors } from '@/lib/categories';
import { euro, rating, when } from '@/lib/format';
import type { Application, Job, Profile, ProfileStats } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

export default function TaskDetail() {
  const { id, offer } = useLocalSearchParams<{ id: string; offer?: string }>();
  const { c, isDark } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [job, setJob] = useState<Job | null>(null);
  const [poster, setPoster] = useState<Profile | null>(null);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [apps, setApps] = useState<Application[]>([]);
  const [mine, setMine] = useState<Application | null>(null);
  const [reviewed, setReviewed] = useState(true);
  const [sheet, setSheet] = useState(offer === '1');
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState('');

  const isOwner = !!job && job.poster_id === userId;
  const isWorker = !!job && job.assigned_to === userId;

  const load = useCallback(async () => {
    if (!id || !userId) return;
    try {
      const j = await getJob(id);
      setJob(j);
      setAmount((a) => a || Number(j.budget ?? 20));
      const [p, s] = await Promise.all([getProfile(j.poster_id), getStats(j.poster_id)]);
      setPoster(p);
      setStats(s);
      if (j.poster_id === userId) setApps(await applicationsForJob(j.id));
      else setMine(await myApplication(j.id, userId));
      if (j.status === 'completed' && (j.poster_id === userId || j.assigned_to === userId)) setReviewed(!!(await myReviewForJob(j.id, userId)));
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  }, [id, userId, t.common.error]);

  useEffect(() => {
    load();
  }, [load]);

  if (!job) return <Loading />;
  const col = categoryColors(job.category, isDark);

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    try {
      await fn();
      await load();
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setBusy(false);
    }
  };

  const openChat = async (other: string) => {
    try {
      const convId = await startConversation(job.id, other);
      router.push(`/chat/${convId}`);
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.card }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        <View style={{ height: 280, backgroundColor: col.bg, alignItems: 'center', justifyContent: 'center' }}>
          {job.photos[0] ? (
            <Image source={{ uri: job.photos[0] }} style={{ position: 'absolute', inset: 0 }} contentFit="cover" />
          ) : (
            <Animated.View entering={ZoomIn.springify()} style={{ width: 120, height: 120, borderRadius: 36, backgroundColor: c.card, alignItems: 'center', justifyContent: 'center' }}>
              <CategoryTile cat={job.category} size={84} />
            </Animated.View>
          )}
          <SafeAreaView edges={['top']} style={{ position: 'absolute', top: 0, left: 16, right: 16 }}>
            <View style={{ paddingTop: 8 }}>
              <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
            </View>
          </SafeAreaView>
        </View>

        <View style={{ marginTop: -32, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: c.card, padding: 20, gap: 20 }}>
          <Animated.View entering={FadeInDown.duration(400)} style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Badge label={t.categories[job.category]} bg={col.bg} fg={col.ink} />
              {job.status !== 'open' && <Badge label={t.task.status[job.status]} bg={c.soft} fg={c.muted} />}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
              <Txt size={26} weight="800" style={{ flex: 1, lineHeight: 32 }}>
                {job.title}
              </Txt>
              <View style={{ alignItems: 'flex-end' }}>
                <Txt size={28} weight="800">
                  {euro(job.budget, lang)}
                </Txt>
                <Txt size={12} muted>
                  {t.task.fixed}
                </Txt>
              </View>
            </View>
          </Animated.View>

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ flex: 1, backgroundColor: c.soft, borderRadius: 18, padding: 12, gap: 4 }}>
              <Icon name="pin" color={c.primaryText} size={18} />
              <Txt weight="700" numberOfLines={1}>
                {job.address || '—'}
              </Txt>
            </View>
            <View style={{ flex: 1, backgroundColor: c.soft, borderRadius: 18, padding: 12, gap: 4 }}>
              <Icon name="calendar" color={c.primaryText} size={18} />
              <Txt weight="700" numberOfLines={1}>
                {when(job.scheduled_at, lang, t.task.flexible)}
              </Txt>
            </View>
          </View>

          {poster && (
            <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderColor: c.line }}>
              <Avatar name={poster.full_name} url={poster.avatar_url} size={48} />
              <View style={{ flex: 1 }}>
                <Txt weight="700">{isOwner ? t.common.you : poster.full_name || '—'}</Txt>
                <Txt size={13} muted>{`★ ${rating(stats?.poster_rating, lang)} · ${stats?.poster_reviews ?? 0} ${t.profile.reviewsCount.toLowerCase()}`}</Txt>
              </View>
              {!isOwner && <IconButton name="chat" label={t.task.message} bg={c.primarySoft} color={c.primaryText} onPress={() => openChat(job.poster_id)} />}
            </Card>
          )}

          {!!job.description && (
            <View style={{ gap: 8 }}>
              <Txt size={17} weight="700">
                {t.task.about}
              </Txt>
              <Txt size={15} color={c.body} style={{ lineHeight: 24 }}>
                {job.description}
              </Txt>
            </View>
          )}

          {job.photos.length > 1 && (
            <View style={{ gap: 10 }}>
              <Txt size={17} weight="700">
                {t.task.photos}
              </Txt>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                {job.photos.map((p) => (
                  <Image key={p} source={{ uri: p }} style={{ width: 120, height: 96, borderRadius: 18 }} contentFit="cover" />
                ))}
              </ScrollView>
            </View>
          )}

          {!isOwner && (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: c.soft, borderRadius: 16, padding: 12 }}>
              <Icon name="shield" color={c.primaryText} size={20} />
              <Txt size={13} color={c.body} style={{ flex: 1 }}>
                {t.task.addressHidden}
              </Txt>
            </View>
          )}

          {isOwner && (
            <View style={{ gap: 10 }}>
              <Txt size={17} weight="700">{`${t.task.offers} (${apps.length})`}</Txt>
              {apps.length === 0 && <Txt muted>{t.task.noOffers}</Txt>}
              {apps.map((a) => (
                <Card key={a.id} style={{ gap: 10, borderWidth: 1.5, borderColor: a.status === 'accepted' ? c.ok : c.line }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar name={a.applicant?.full_name} url={a.applicant?.avatar_url} size={40} />
                    <Txt weight="700" style={{ flex: 1 }}>
                      {a.applicant?.full_name || '—'}
                    </Txt>
                    <Txt size={18} weight="800">
                      {euro(a.amount ?? job.budget, lang)}
                    </Txt>
                  </View>
                  {!!a.message && <Txt color={c.body}>{a.message}</Txt>}
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Button title={t.task.message} variant="secondary" size="md" style={{ flex: 1 }} onPress={() => openChat(a.applicant_id)} />
                    {job.status === 'open' && a.status === 'pending' && (
                      <Button title={t.task.accept} size="md" style={{ flex: 1 }} loading={busy} onPress={() => run(() => acceptOffer(a.id))} />
                    )}
                    {a.status === 'accepted' && <Badge label={t.task.accepted} bg={c.okSoft} fg={c.ok} />}
                  </View>
                </Card>
              ))}
            </View>
          )}

          {job.status === 'completed' && (isOwner || isWorker) && !reviewed && (
            <Animated.View entering={FadeIn}>
              <Card style={{ gap: 12, borderWidth: 1.5, borderColor: c.line }}>
                <Txt size={17} weight="700">
                  {t.task.leaveReview}
                </Txt>
                <View style={{ flexDirection: 'row', gap: 6 }} accessibilityRole="adjustable" accessibilityValue={{ min: 1, max: 5, now: stars }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Pressable key={n} accessibilityRole="button" accessibilityLabel={`${n}`} onPress={() => setStars(n)} hitSlop={6}>
                      <Txt size={32} color={n <= stars ? '#F5A524' : c.line}>
                        ★
                      </Txt>
                    </Pressable>
                  ))}
                </View>
                <TextInput
                  value={comment}
                  onChangeText={setComment}
                  placeholder={t.task.reviewPlaceholder}
                  placeholderTextColor={c.muted}
                  multiline
                  style={{ minHeight: 72, borderRadius: 16, borderWidth: 1.5, borderColor: c.line, padding: 12, color: c.ink, textAlignVertical: 'top' }}
                />
                <Button
                  title={t.common.save}
                  loading={busy}
                  onPress={() =>
                    run(async () => {
                      await leaveReview({
                        job_id: job.id,
                        reviewer_id: userId!,
                        reviewee_id: isOwner ? job.assigned_to! : job.poster_id,
                        reviewee_role: isOwner ? 'worker' : 'poster',
                        rating: stars,
                        comment: comment.trim(),
                      });
                      Alert.alert('ergo', t.task.reviewThanks);
                    })
                  }
                />
              </Card>
            </Animated.View>
          )}
        </View>
      </ScrollView>

      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, paddingBottom: 26, backgroundColor: c.card, borderTopWidth: 1, borderColor: c.line, flexDirection: 'row', gap: 10 }}>
        {isOwner ? (
          <>
            {job.status === 'assigned' && <Button title={t.task.markDone} style={{ flex: 1 }} loading={busy} onPress={() => run(() => completeJob(job.id))} />}
            {(job.status === 'open' || job.status === 'assigned') && (
              <Button title={t.task.cancelTask} variant="danger" style={{ flex: job.status === 'assigned' ? 0.8 : 1 }} disabled={busy} onPress={() => run(() => cancelJob(job.id))} />
            )}
            {(job.status === 'completed' || job.status === 'cancelled') && <Txt muted style={{ flex: 1, textAlign: 'center', paddingVertical: 16 }}>{t.task.status[job.status]}</Txt>}
          </>
        ) : (
          <>
            <Button title={t.task.message} variant="secondary" style={{ width: 130 }} onPress={() => openChat(job.poster_id)} />
            <Button
              title={mine ? t.task.offerSent : t.task.makeOffer}
              style={{ flex: 1 }}
              disabled={!!mine || job.status !== 'open'}
              onPress={() => setSheet(true)}
            />
          </>
        )}
      </View>

      <Modal visible={sheet && !isOwner && !mine} transparent animationType="fade" onRequestClose={() => setSheet(false)} statusBarTranslucent>
        <Pressable accessibilityRole="button" accessibilityLabel={t.common.cancel} onPress={() => setSheet(false)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <Animated.View entering={SlideInDown.springify().damping(20)} style={{ backgroundColor: c.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20, paddingBottom: 32, gap: 16 }}>
          <View style={{ width: 40, height: 5, borderRadius: 3, backgroundColor: c.line, alignSelf: 'center' }} />
          <Txt size={22} weight="800">
            {t.task.yourOffer}
          </Txt>
          <Txt muted>{t.task.offerHint}</Txt>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: c.soft, borderRadius: 24, padding: 12 }}>
            <IconButton name="minus" label="−5 €" onPress={() => setAmount((a) => Math.max(5, a - 5))} size={56} />
            <Animated.View key={amount} entering={ZoomIn.duration(180)}>
              <Txt size={40} weight="800">
                {euro(amount, lang)}
              </Txt>
            </Animated.View>
            <IconButton name="plus" label="+5 €" onPress={() => setAmount((a) => a + 5)} size={56} />
          </View>
          <Field label={t.task.note} value={note} onChangeText={setNote} maxLength={500} />
          <Button
            title={t.task.send}
            loading={busy}
            onPress={() =>
              run(async () => {
                await sendOffer(job.id, userId!, amount, note.trim());
                setSheet(false);
              })
            }
          />
        </Animated.View>
      </Modal>
    </View>
  );
}
