import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { memo, useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, TextInput, View } from 'react-native';
import Animated, { FadeIn, ZoomIn, ZoomOut, interpolateColor, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { DateTimeSheet } from '@/components/DateTimeSheet';
import { Icon } from '@/components/Icon';
import { Button, Card, Field, H1, IconButton, Loading, MAX_FONT_SCALE, Txt, font } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { createJob, getJob, pickAndUploadPhoto, updateJob } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { CATEGORIES } from '@/lib/categories';
import { euro, when as formatWhen } from '@/lib/format';
import { useLocation } from '@/lib/location';
import type { CategoryKey, Job } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

type When = 'today' | 'tomorrow' | 'week' | 'flexible' | 'custom';
const MAX_BUDGET = 100000;

function scheduledFor(w: When, custom: Date | null): string | null {
  if (w === 'custom') return custom ? custom.toISOString() : null;
  const d = new Date();
  if (w === 'flexible') return null;
  if (w === 'tomorrow') d.setDate(d.getDate() + 1);
  if (w === 'week') d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7) - 1);
  d.setHours(18, 0, 0, 0);
  return d.toISOString();
}

export default function Post() {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const loc = useLocation();
  const [cat, setCat] = useState<CategoryKey>('home');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [whenSel, setWhen] = useState<When>('today');
  const [customDate, setCustomDate] = useState<Date | null>(null);
  const [calendar, setCalendar] = useState(false);
  const [budget, setBudget] = useState(30);
  // Text while the amount is being typed; committed (and clamped) on blur.
  const [budgetText, setBudgetText] = useState<string | null>(null);
  const typed = budgetText == null ? NaN : Math.round(Number(budgetText));
  // What will be published: the amount being typed (if valid), else the stepped amount.
  const finalBudget = Number.isFinite(typed) && typed > 0 ? Math.min(MAX_BUDGET, typed) : budget;
  const commitBudget = () => {
    if (budgetText == null) return;
    setBudget(finalBudget);
    setBudgetText(null);
  };
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [created, setCreated] = useState<Job | null>(null);
  // Edit mode: /post?edit=<task id> loads the task and saves changes instead of publishing.
  const { edit } = useLocalSearchParams<{ edit?: string }>();
  const [loadingEdit, setLoadingEdit] = useState(!!edit);

  useEffect(() => {
    if (!edit) return;
    getJob(edit)
      .then((j) => {
        if (j.poster_id !== userId || j.status !== 'open') {
          router.back();
          return;
        }
        setCat(j.category);
        setTitle(j.title);
        setDesc(j.description ?? '');
        setBudget(Number(j.budget ?? 30));
        setPhotos(j.photos ?? []);
        if (j.scheduled_at) {
          setCustomDate(new Date(j.scheduled_at));
          setWhen('custom');
        } else setWhen('flexible');
      })
      .catch(() => {
        Alert.alert('ergo', t.common.error);
        router.back();
      })
      .finally(() => setLoadingEdit(false));
  }, [edit, userId, t.common.error]);

  const addPhoto = async () => {
    if (!userId) return;
    setUploading(true);
    try {
      const url = await pickAndUploadPhoto(userId);
      if (url) setPhotos((p) => [...p, url]);
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setUploading(false);
    }
  };

  const saveEdit = async () => {
    if (!edit) return;
    if (title.trim().length < 3) return Alert.alert('ergo', t.post.titleTooShort);
    setSaving(true);
    try {
      await updateJob(edit, {
        title: title.trim(),
        description: desc.trim(),
        category: cat,
        budget: finalBudget,
        photos,
        scheduled_at: scheduledFor(whenSel, customDate),
      });
      router.back();
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setSaving(false);
    }
  };

  const publish = async () => {
    if (!userId) return;
    if (edit) return saveEdit();
    if (title.trim().length < 3) return Alert.alert('ergo', t.post.titleTooShort);
    if (!loc.granted) {
      await loc.refresh();
      if (!loc.granted) return Alert.alert('ergo', t.post.needLocation);
    }
    setSaving(true);
    try {
      const job = await createJob(userId, {
        title: title.trim(),
        description: desc.trim(),
        category: cat,
        budget: finalBudget,
        lat: loc.lat,
        lng: loc.lng,
        address: loc.area ?? '',
        photos,
        scheduled_at: scheduledFor(whenSel, customDate),
      });
      setCreated(job);
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setSaving(false);
    }
  };

  if (loadingEdit) return <Loading />;

  if (created) {
    return (
      <Animated.View entering={FadeIn} style={{ flex: 1, backgroundColor: c.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 32, gap: 16 }}>
        <Animated.View entering={ZoomIn.springify().damping(12)} style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" color={c.primary} size={56} strokeWidth={2.6} />
        </Animated.View>
        <H1 center style={{ color: '#FFFFFF', maxWidth: 340 }}>
          {t.post.liveTitle}
        </H1>
        <Txt size={16} color="#FFFFFF" center style={{ maxWidth: 320, opacity: 0.92 }}>
          {t.post.liveBody}
        </Txt>
        <View style={{ alignSelf: 'stretch', gap: 6, marginTop: 16, maxWidth: 480, width: '100%' }}>
          <Button
            title={t.post.seeIt}
            variant="outline"
            iconRight="chevron"
            onPress={() => router.replace(`/task/${created.id}`)}
            style={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' }}
            textColor="#0F1F3D"
          />
          <Button title={t.common.back} variant="onPrimary" onPress={() => router.back()} />
        </View>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 8 }}>
          <IconButton name="close" label={t.common.cancel} onPress={() => router.back()} />
          <Txt weight="800" numberOfLines={1} style={{ flexShrink: 1 }}>{edit ? t.post.editTitle : t.post.title}</Txt>
          <View style={{ width: 46 }} />
        </View>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20, paddingBottom: 120 }} keyboardShouldPersistTaps="handled">
          <H1>{t.post.h1}</H1>

          <View accessibilityRole="radiogroup" accessibilityLabel={t.post.category} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {CATEGORIES.map((k) => (
              <CategoryOption key={k.key} cat={k.key} label={t.categories[k.key]} on={k.key === cat} onSelect={setCat} />
            ))}
          </View>

          <Card style={{ gap: 14 }}>
            <Field label={t.post.taskTitle} value={title} onChangeText={setTitle} placeholder={t.post.taskTitlePh} maxLength={120} />
            <Field label={t.post.details} value={desc} onChangeText={setDesc} placeholder={t.post.detailsPh} multiline maxLength={2000} />
            <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
              {photos.map((p) => (
                <Animated.View key={p} entering={ZoomIn.springify().damping(14)} exiting={ZoomOut.duration(150)}>
                  <Image source={{ uri: p }} style={{ width: 72, height: 72, borderRadius: 18 }} contentFit="cover" />
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={t.post.removePhoto}
                    hitSlop={8}
                    onPress={() => setPhotos((all) => all.filter((x) => x !== p))}
                    style={{ position: 'absolute', top: -6, right: -6, width: 24, height: 24, borderRadius: 12, backgroundColor: c.inv, borderWidth: 2, borderColor: c.card, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Icon name="close" color={c.invInk} size={12} strokeWidth={3} />
                  </Pressable>
                </Animated.View>
              ))}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t.post.addPhoto}
                onPress={addPhoto}
                disabled={uploading}
                style={{ width: 72, height: 72, borderRadius: 18, borderWidth: 1.5, borderStyle: 'dashed', borderColor: c.muted, alignItems: 'center', justifyContent: 'center' }}
              >
                <Icon name="camera" color={c.muted} />
              </Pressable>
            </View>
            <Txt size={13} muted>
              {t.post.photoHint}
            </Txt>
          </Card>

          <View style={{ gap: 10 }}>
            <Txt weight="800">{t.post.when}</Txt>
            <View accessibilityRole="radiogroup" accessibilityLabel={t.post.when} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {(
                [
                  ['today', t.post.today],
                  ['tomorrow', t.post.tomorrow],
                  ['week', t.post.week],
                  ['flexible', t.post.flexible],
                ] as const
              ).map(([v, label]) => (
                <WhenOption key={v} label={label} on={whenSel === v} onPress={() => setWhen(v)} />
              ))}
              <WhenOption
                full
                icon="calendar"
                label={whenSel === 'custom' && customDate ? formatWhen(customDate.toISOString(), lang, '') : t.post.pickDate}
                trailing={whenSel === 'custom' && customDate ? t.post.changeDate : undefined}
                on={whenSel === 'custom'}
                onPress={() => setCalendar(true)}
              />
            </View>
          </View>

          <Card style={{ gap: 14 }}>
            <View style={{ gap: 2 }}>
              <Txt size={15} weight="800">
                {t.post.budget}
              </Txt>
              <Txt size={13} muted>
                {t.post.budgetHint}
              </Txt>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <IconButton name="minus" label="−5 €" bg={c.soft} size={52} onPress={() => setBudget((b) => Math.max(5, b - 5))} />
              {/* Tap the amount to type it; the buttons still step by 5 €. */}
              <View style={{ flex: 1, height: 64, borderRadius: 20, backgroundColor: c.soft, borderWidth: 1.5, borderColor: budgetText != null ? c.primary : c.soft, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 }}>
                <TextInput
                  accessibilityLabel={t.post.budget}
                  accessibilityHint={t.post.budgetEdit}
                  value={budgetText ?? String(budget)}
                  onFocus={() => setBudgetText(String(budget))}
                  onChangeText={(v) => setBudgetText(v.replace(/[^0-9]/g, '').slice(0, 6))}
                  onBlur={commitBudget}
                  onSubmitEditing={commitBudget}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  selectTextOnFocus
                  maxFontSizeMultiplier={MAX_FONT_SCALE}
                  style={{ minWidth: 40, fontSize: 30, fontFamily: font['900'], color: c.ink, textAlign: 'right', paddingVertical: 0, includeFontPadding: false }}
                />
                <Txt size={30} weight="900" style={{ lineHeight: 36, marginLeft: 4 }}>
                  €
                </Txt>
              </View>
              <IconButton name="plus" label="+5 €" bg={c.soft} size={52} onPress={() => setBudget((b) => Math.min(MAX_BUDGET, b + 5))} />
            </View>
          </Card>

          <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: c.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="pin" color={c.primaryText} size={20} />
            </View>
            <View style={{ flex: 1 }}>
              <Txt weight="700">{loc.area ?? t.post.location}</Txt>
              <Txt size={12} muted>
                {t.post.locationHint}
              </Txt>
            </View>
          </Card>
        </ScrollView>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, paddingBottom: 24, backgroundColor: c.bg }}>
          <Button title={edit ? `${t.post.saveChanges} · ${euro(finalBudget, lang)}` : `${t.post.publish} · ${euro(finalBudget, lang)}`} loading={saving} onPress={publish} />
        </View>
      </KeyboardAvoidingView>
      <DateTimeSheet
        visible={calendar}
        value={customDate}
        onClose={() => setCalendar(false)}
        onPick={(d) => {
          setCustomDate(d);
          setWhen('custom');
          setCalendar(false);
        }}
      />
    </SafeAreaView>
  );
}

/** Category tile: springs and tints on the UI thread when chosen, so switching feels instant. */
const CategoryOption = memo(function CategoryOption({ cat, label, on, onSelect }: { cat: CategoryKey; label: string; on: boolean; onSelect: (k: CategoryKey) => void }) {
  const { c } = useTheme();
  const sel = useSharedValue(on ? 1 : 0);
  const press = useSharedValue(1);
  const pop = useSharedValue(1);

  useEffect(() => {
    sel.value = withSpring(on ? 1 : 0, { damping: 16, stiffness: 240 });
    if (on) pop.value = withSequence(withTiming(1.18, { duration: 120 }), withSpring(1, { damping: 8, stiffness: 260 }));
  }, [on, sel, pop]);

  const tile = useAnimatedStyle(() => ({
    transform: [{ scale: press.value * (1 + sel.value * 0.03) }],
    borderColor: interpolateColor(sel.value, [0, 1], [c.card, c.primary]),
    backgroundColor: interpolateColor(sel.value, [0, 1], [c.card, c.primarySoft]),
  }));
  const icon = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }, { translateY: -sel.value * 2 }] }));

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      accessibilityLabel={label}
      onPressIn={() => {
        press.value = withTiming(0.94, { duration: 90 });
      }}
      onPressOut={() => {
        press.value = withSpring(1, { damping: 12, stiffness: 300 });
      }}
      onPress={() => {
        if (!on) Haptics.selectionAsync().catch(() => {});
        onSelect(cat);
      }}
      style={{ width: '31%', flexGrow: 1 }}
    >
      <Animated.View style={[{ height: 104, borderRadius: 22, borderWidth: 2, alignItems: 'center', justifyContent: 'flex-start', gap: 8, paddingTop: 14, paddingHorizontal: 6 }, tile]}>
        <Animated.View style={icon}>
          <CategoryTile cat={cat} size={40} />
        </Animated.View>
        {/* Fixed two-line label box so every icon sits at the same height. */}
        <View style={{ minHeight: 32, justifyContent: 'center' }}>
          <Txt size={12} weight={on ? '800' : '700'} center numberOfLines={2} style={{ lineHeight: 16 }}>
            {label}
          </Txt>
        </View>
        {on && (
          <Animated.View
            entering={ZoomIn.springify().damping(12)}
            exiting={ZoomOut.duration(120)}
            style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: 10, backgroundColor: c.primary, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="check" color="#FFFFFF" size={12} strokeWidth={3.2} />
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
});

/** "Πότε;" choice: two per row, roomy enough for the full label; `full` spans the row. */
function WhenOption({ label, on, onPress, full, icon, trailing }: { label: string; on: boolean; onPress: () => void; full?: boolean; icon?: 'calendar'; trailing?: string }) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      onPress={() => {
        if (!on) Haptics.selectionAsync().catch(() => {});
        onPress();
      }}
      style={({ pressed }) => ({
        width: full ? '100%' : '48%',
        flexGrow: 1,
        minHeight: 50,
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: full ? 'flex-start' : 'center',
        gap: 10,
        backgroundColor: on ? c.inv : c.card,
        borderWidth: 1.5,
        borderColor: on ? c.inv : c.line,
        transform: [{ scale: pressed ? 0.97 : 1 }],
      })}
    >
      {icon && <Icon name={icon} color={on ? c.invInk : c.primaryText} size={20} />}
      <Txt size={15} weight="700" color={on ? c.invInk : c.ink} numberOfLines={1} style={{ flexShrink: 1 }}>
        {label}
      </Txt>
      {trailing && (
        <Txt size={13} weight="700" color={on ? c.invInk : c.primaryText} style={{ marginLeft: 'auto', opacity: 0.85 }}>
          {trailing}
        </Txt>
      )}
    </Pressable>
  );
}
