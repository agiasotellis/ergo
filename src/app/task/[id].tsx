import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, SlideInDown, ZoomIn, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/icons';
import { ActionSheet, ReportSheet, confirmBlock } from '@/components/Sheets';
import { TaskProgress } from '@/components/TaskProgress';
import { Avatar, Badge, Button, Card, Field, H2, IconButton, Loading, MAX_FONT_SCALE, Txt, font } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import {
  acceptOffer,
  applicationsForJob,
  cancelJob,
  completeJob,
  deleteJob,
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
import { setEditDraft } from '@/lib/editDraft';
import { categoryColors } from '@/lib/categories';
import { euro, rating, when } from '@/lib/format';
import type { Application, Job, Profile, ProfileStats, ReportTarget } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

export default function TaskDetail() {
  const { id, offer } = useLocalSearchParams<{ id: string; offer?: string }>();
  const { c, isDark } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const insets = useSafeAreaInsets();
  const [job, setJob] = useState<Job | null>(null);
  const [poster, setPoster] = useState<Profile | null>(null);
  const [helper, setHelper] = useState<Profile | null>(null);
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
  const [menu, setMenu] = useState(false);
  const [report, setReport] = useState<ReportTarget | null>(null);

  const isOwner = !!job && job.poster_id === userId;
  const isWorker = !!job && job.assigned_to === userId;

  const load = useCallback(async () => {
    if (!id || !userId) return;
    try {
      const j = await getJob(id);
      setJob(j);
      setAmount((a) => a || Number(j.budget ?? 20));
      const [p, s, h] = await Promise.all([getProfile(j.poster_id), getStats(j.poster_id), j.assigned_to ? getProfile(j.assigned_to) : Promise.resolve(null)]);
      setPoster(p);
      setStats(s);
      setHelper(h);
      if (j.poster_id === userId) setApps(await applicationsForJob(j.id));
      else setMine(await myApplication(j.id, userId));
      if (j.status === 'completed' && (j.poster_id === userId || j.assigned_to === userId)) setReviewed(!!(await myReviewForJob(j.id, userId)));
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  }, [id, userId, t.common.error]);

  // Reload when coming back (e.g. after editing the task).
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

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

  const active = job.status === 'open' || job.status === 'assigned';
  const accepted = isOwner ? apps.find((a) => a.status === 'accepted') : mine?.status === 'accepted' ? mine : null;
  const agreed = accepted?.amount ?? job.budget;

  const confirmComplete = () =>
    Alert.alert(t.task.markDone, t.task.doneConfirm, [
      { text: t.common.back, style: 'cancel' },
      { text: t.task.markDoneShort, onPress: () => run(() => completeJob(job.id)) },
    ]);

  const confirmCancel = () =>
    Alert.alert(t.task.cancelTask, t.task.cancelConfirm, [
      { text: t.common.back, style: 'cancel' },
      { text: t.task.cancelTask, style: 'destructive', onPress: () => run(() => cancelJob(job.id)) },
    ]);

  const confirmDelete = () =>
    Alert.alert(t.task.deleteTask, t.task.deleteConfirm, [
      { text: t.common.back, style: 'cancel' },
      {
        text: t.task.deleteYes,
        style: 'destructive',
        onPress: async () => {
          setBusy(true);
          try {
            await deleteJob(job);
            router.back();
          } catch {
            setBusy(false);
            Alert.alert('ergo', t.common.error);
          }
        },
      },
    ]);

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
      <ScrollView contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}>
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
                {!isOwner && <IconButton name="more" label={t.safety.more} onPress={() => setMenu(true)} />}
              </View>
            </View>
          </SafeAreaView>
        </View>

        <View style={{ marginTop: -32, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: c.card, padding: 20, gap: 20 }}>
          <Animated.View entering={FadeInDown.duration(400)} style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Badge label={t.categories[job.category]} bg={col.bg} fg={col.ink} />
              {job.status !== 'open' && (
                <Badge
                  label={t.task.status[job.status]}
                  bg={job.status === 'completed' ? c.okSoft : job.status === 'cancelled' ? c.dangerSoft : c.warnSoft}
                  fg={job.status === 'completed' ? c.ok : job.status === 'cancelled' ? c.danger : c.warn}
                />
              )}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <Txt size={26} weight="900" style={{ flex: 1, lineHeight: 32, letterSpacing: -0.5 }}>
                {job.title}
              </Txt>
              <View style={{ alignItems: 'flex-end', flexShrink: 0 }}>
                <Txt size={28} weight="900" numberOfLines={1}>
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

          {job.status !== 'cancelled' && (isOwner || isWorker) && (
            <TaskProgress step={job.status === 'open' ? 0 : job.status === 'assigned' ? 1 : 2} labels={[t.task.stepPosted, t.task.stepProgress, t.task.stepDone]} />
          )}

          {job.status === 'assigned' && (isOwner || isWorker) && (
            <Animated.View entering={FadeInDown.springify().damping(18)}>
              <Card style={{ gap: 12, backgroundColor: c.okSoft }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <LiveDot color={c.ok} />
                  <Txt size={13} weight="800" color={c.ok} style={{ letterSpacing: 0.3 }}>
                    {isOwner ? t.task.helperChosen : t.task.youWereChosen}
                  </Txt>
                </View>
                {isOwner && helper && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Avatar name={helper.full_name} url={helper.avatar_url} size={48} />
                    <View style={{ flex: 1 }}>
                      <Txt size={16} weight="800" numberOfLines={1}>
                        {helper.full_name || '—'}
                      </Txt>
                      <Txt size={13} color={c.body}>{`${t.task.agreed}: ${euro(agreed, lang)}`}</Txt>
                    </View>
                    <IconButton name="chat" label={t.task.message} bg={c.card} color={c.primaryText} onPress={() => openChat(helper.id)} />
                  </View>
                )}
                {isWorker && <Txt size={13} color={c.body}>{`${t.task.agreed}: ${euro(agreed, lang)}`}</Txt>}
                <Txt size={13} color={c.body}>
                  {isOwner ? t.task.inProgressBody : t.task.inProgressWorker}
                </Txt>
              </Card>
            </Animated.View>
          )}

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
              <H2>{t.task.about}</H2>
              <Txt size={15} color={c.body} style={{ lineHeight: 24 }}>
                {job.description}
              </Txt>
            </View>
          )}

          {job.photos.length > 1 && (
            <View style={{ gap: 10 }}>
              <H2>{t.task.photos}</H2>
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
              <H2>{`${t.task.offers} (${apps.length})`}</H2>
              {apps.length === 0 && <Txt muted>{t.task.noOffers}</Txt>}
              {apps.map((a) => (
                <Card key={a.id} style={{ gap: 10, borderWidth: 1.5, borderColor: a.status === 'accepted' ? c.ok : c.line }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Avatar name={a.applicant?.full_name} url={a.applicant?.avatar_url} size={40} />
                    <Txt weight="700" style={{ flex: 1 }} numberOfLines={1}>
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
                    {a.status === 'accepted' && (
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Badge label={t.task.accepted} bg={c.okSoft} fg={c.ok} style={{ alignSelf: 'center' }} />
                      </View>
                    )}
                  </View>
                </Card>
              ))}
            </View>
          )}

          {isOwner && (
            <View style={{ gap: 10 }}>
              <H2>{t.task.manage}</H2>
              <Card style={{ paddingVertical: 4, borderWidth: 1.5, borderColor: c.line }}>
                {job.status === 'open' && (
                  <ManageRow icon="pencil" label={t.task.editTask} onPress={() => {
                    setEditDraft(job);
                    router.push(`/edit-task/${job.id}`);
                  }} disabled={busy} />
                )}
                {active && (
                  <ManageRow icon="close" label={t.task.cancelTask} onPress={confirmCancel} disabled={busy} />
                )}
                <ManageRow icon="trash" label={t.task.deleteTask} danger onPress={confirmDelete} disabled={busy} />
              </Card>
            </View>
          )}

          {job.status === 'completed' && !!job.assigned_to && (isOwner || isWorker) && !reviewed && (
            <Animated.View entering={FadeIn}>
              <Card style={{ gap: 12, borderWidth: 1.5, borderColor: c.line }}>
                <H2>{t.task.leaveReview}</H2>
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
                  maxFontSizeMultiplier={MAX_FONT_SCALE}
                  style={{ minHeight: 72, fontFamily: font['400'], fontSize: 15, borderRadius: 16, borderWidth: 1.5, borderColor: c.line, padding: 12, color: c.ink, textAlignVertical: 'top' }}
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

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: Math.max(insets.bottom, 12) + 4,
          backgroundColor: c.card,
          borderTopWidth: 1,
          borderColor: c.line,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        {isOwner ? (
          active ? (
            <Button title={t.task.markDone} icon="check" style={{ flex: 1 }} loading={busy} onPress={confirmComplete} />
          ) : (
            <View style={{ flex: 1, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 28, backgroundColor: job.status === 'completed' ? c.okSoft : c.dangerSoft }}>
              <Icon name={job.status === 'completed' ? 'check' : 'close'} color={job.status === 'completed' ? c.ok : c.danger} size={20} strokeWidth={2.6} />
              <Txt size={16} weight="800" color={job.status === 'completed' ? c.ok : c.danger}>
                {t.task.status[job.status]}
              </Txt>
            </View>
          )
        ) : (
          <>
            <Button title={t.task.message} variant="secondary" style={{ flex: 0.8 }} onPress={() => openChat(job.poster_id)} />
            <Button
              title={mine ? t.task.offerSent : t.task.makeOffer}
              style={{ flex: 1.2 }}
              disabled={!!mine || job.status !== 'open'}
              onPress={() => setSheet(true)}
            />
          </>
        )}
      </View>

      {!isOwner && userId && (
        <>
          <ActionSheet
            visible={menu}
            onClose={() => setMenu(false)}
            actions={[
              { icon: 'flag', label: t.safety.reportTask, onPress: () => setReport({ type: 'job', id: job.id, userId: job.poster_id }) },
              { icon: 'flag', label: t.safety.reportUser, onPress: () => setReport({ type: 'user', id: job.poster_id, userId: job.poster_id }) },
              {
                icon: 'block',
                label: t.safety.block,
                danger: true,
                onPress: () => confirmBlock({ me: userId, other: job.poster_id, name: poster?.full_name ?? '', t, onDone: () => router.back() }),
              },
            ]}
          />
          <ReportSheet target={report} onClose={() => setReport(null)} onBlocked={() => router.back()} />
        </>
      )}

      <Modal visible={sheet && !isOwner && !mine} transparent animationType="fade" onRequestClose={() => setSheet(false)} statusBarTranslucent>
        <Pressable accessibilityRole="button" accessibilityLabel={t.common.cancel} onPress={() => setSheet(false)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <Animated.View entering={SlideInDown.springify().damping(20)} style={{ backgroundColor: c.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20, paddingBottom: Math.max(insets.bottom, 12) + 20, gap: 16 }}>
          <View style={{ width: 40, height: 5, borderRadius: 3, backgroundColor: c.line, alignSelf: 'center' }} />
          <Txt size={22} weight="900">
            {t.task.yourOffer}
          </Txt>
          <Txt muted>{t.task.offerHint}</Txt>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: c.soft, borderRadius: 24, padding: 12 }}>
            <IconButton name="minus" label="−5 €" onPress={() => setAmount((a) => Math.max(5, a - 5))} size={56} />
            <Animated.View key={amount} entering={ZoomIn.duration(180)} style={{ flex: 1, alignItems: 'center' }}>
              <Txt size={36} weight="900" numberOfLines={1} adjustsFontSizeToFit>
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

function LiveDot({ color }: { color: string }) {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withRepeat(withTiming(1, { duration: 1400 }), -1);
  }, [p]);
  const halo = useAnimatedStyle(() => ({ opacity: 0.6 * (1 - p.value), transform: [{ scale: 1 + p.value * 1.6 }] }));
  return (
    <View style={{ width: 10, height: 10, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[{ position: 'absolute', width: 10, height: 10, borderRadius: 5, backgroundColor: color }, halo]} />
      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }} />
    </View>
  );
}

function ManageRow({ icon, label, onPress, danger, disabled }: { icon: IconName; label: string; onPress: () => void; danger?: boolean; disabled?: boolean }) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        Haptics.selectionAsync().catch(() => {});
        onPress();
      }}
      disabled={disabled}
      style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 56, paddingVertical: 8, opacity: pressed ? 0.6 : 1 })}
    >
      <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: danger ? c.dangerSoft : c.soft, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} color={danger ? c.danger : c.ink} size={20} />
      </View>
      <Txt weight="700" color={danger ? c.danger : c.ink} style={{ flex: 1 }}>
        {label}
      </Txt>
      <Icon name="chevron" color={c.muted} size={18} />
    </Pressable>
  );
}
