import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { Button, Card, Field, H1, IconButton, Segmented, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { createJob, pickAndUploadPhoto } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { CATEGORIES } from '@/lib/categories';
import { euro } from '@/lib/format';
import { useLocation } from '@/lib/location';
import type { CategoryKey, Job } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

type When = 'today' | 'tomorrow' | 'week' | 'flexible';

function scheduledFor(w: When): string | null {
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
  const [budget, setBudget] = useState(30);
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [created, setCreated] = useState<Job | null>(null);

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

  const publish = async () => {
    if (!userId) return;
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
        budget,
        lat: loc.lat,
        lng: loc.lng,
        address: loc.area ?? '',
        photos,
        scheduled_at: scheduledFor(whenSel),
      });
      setCreated(job);
    } catch {
      Alert.alert('ergo', t.common.error);
    } finally {
      setSaving(false);
    }
  };

  if (created) {
    return (
      <Animated.View entering={FadeIn} style={{ flex: 1, backgroundColor: c.primary, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 16 }}>
        <Animated.View entering={ZoomIn.springify().damping(12)} style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" color={c.primary} size={56} strokeWidth={2.6} />
        </Animated.View>
        <Txt size={28} weight="800" color="#FFFFFF" center>
          {t.post.liveTitle}
        </Txt>
        <Txt size={16} color="#FFFFFF" center style={{ maxWidth: 300 }}>
          {t.post.liveBody}
        </Txt>
        <View style={{ alignSelf: 'stretch', gap: 10, marginTop: 16 }}>
          <Button title={t.post.seeIt} variant="outline" onPress={() => router.replace(`/task/${created.id}`)} />
          <Button title={t.common.back} variant="ghost" onPress={() => router.back()} style={{ borderColor: 'transparent' }} />
        </View>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 8 }}>
          <IconButton name="close" label={t.common.cancel} onPress={() => router.back()} />
          <Txt weight="700">{t.post.title}</Txt>
          <View style={{ width: 46 }} />
        </View>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 20, paddingBottom: 120 }} keyboardShouldPersistTaps="handled">
          <H1>{t.post.h1}</H1>

          <View accessibilityRole="radiogroup" accessibilityLabel={t.post.category} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {CATEGORIES.map((k) => {
              const on = k.key === cat;
              return (
                <Pressable
                  key={k.key}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  onPress={() => setCat(k.key)}
                  style={({ pressed }) => ({
                    width: '31%',
                    flexGrow: 1,
                    height: 100,
                    borderRadius: 22,
                    borderWidth: 2,
                    borderColor: on ? c.primary : c.card,
                    backgroundColor: c.card,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: 6,
                    transform: [{ scale: pressed ? 0.95 : on ? 1.02 : 1 }],
                  })}
                >
                  <CategoryTile cat={k.key} size={40} />
                  <Txt size={12} weight="700" center numberOfLines={2}>
                    {t.categories[k.key]}
                  </Txt>
                </Pressable>
              );
            })}
          </View>

          <Card style={{ gap: 14 }}>
            <Field label={t.post.taskTitle} value={title} onChangeText={setTitle} placeholder={t.post.taskTitlePh} maxLength={120} />
            <Field label={t.post.details} value={desc} onChangeText={setDesc} placeholder={t.post.detailsPh} multiline maxLength={2000} />
            <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
              {photos.map((p) => (
                <Image key={p} source={{ uri: p }} style={{ width: 72, height: 72, borderRadius: 18 }} contentFit="cover" />
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
            <Txt weight="700">{t.post.when}</Txt>
            <Segmented<When>
              label={t.post.when}
              value={whenSel}
              onChange={setWhen}
              options={[
                { value: 'today', label: t.post.today },
                { value: 'tomorrow', label: t.post.tomorrow },
                { value: 'week', label: t.post.week },
                { value: 'flexible', label: t.post.flexible },
              ]}
            />
          </View>

          <Card style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Txt size={13} weight="700">
                {t.post.budget}
              </Txt>
              <Txt size={12} muted>
                {t.post.budgetHint}
              </Txt>
            </View>
            <IconButton name="minus" label="−5 €" bg={c.soft} onPress={() => setBudget((b) => Math.max(5, b - 5))} />
            <Animated.View key={budget} entering={ZoomIn.duration(180)} style={{ minWidth: 70, alignItems: 'center' }}>
              <Txt size={24} weight="800">
                {euro(budget, lang)}
              </Txt>
            </Animated.View>
            <IconButton name="plus" label="+5 €" bg={c.soft} onPress={() => setBudget((b) => b + 5)} />
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
          <Button title={`${t.post.publish} · ${euro(budget, lang)}`} loading={saving} onPress={publish} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
