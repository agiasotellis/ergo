import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, SlideInLeft, SlideInRight, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { Button, H1, IconButton, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { euro } from '@/lib/format';
import { setPref } from '@/lib/storage';
import { useTheme } from '@/theme/ThemeProvider';

function finish() {
  setPref('onboarded', true);
  router.replace('/auth');
}

function StepPost() {
  const { c } = useTheme();
  const { lang } = useI18n();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <View style={{ flexDirection: 'row', gap: 18 }}>
        {(['home', 'pets', 'cleaning'] as const).map((k, i) => (
          <Animated.View key={k} entering={ZoomIn.delay(150 + i * 100).springify()}>
            <CategoryTile cat={k} size={64} />
          </Animated.View>
        ))}
      </View>
      <Animated.View
        entering={FadeIn.delay(450)}
        style={{ width: '82%', backgroundColor: c.card, borderRadius: 24, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }}
      >
        <CategoryTile cat="home" size={44} />
        <View style={{ flex: 1, gap: 8 }}>
          <View style={{ height: 10, borderRadius: 5, backgroundColor: c.soft, width: '90%' }} />
          <View style={{ height: 10, borderRadius: 5, backgroundColor: c.soft, width: '60%' }} />
        </View>
        <Txt size={18} weight="800">
          {euro(45, lang)}
        </Txt>
      </Animated.View>
      <Animated.View entering={ZoomIn.delay(700).springify()} style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: c.primary, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="plus" color="#FFFFFF" size={28} strokeWidth={2.6} />
      </Animated.View>
    </View>
  );
}

function StepMap() {
  const { c } = useTheme();
  const { lang } = useI18n();
  const pins: [number, number, number][] = [
    [22, 26, 12],
    [62, 30, 45],
    [36, 68, 30],
  ];
  return (
    <View style={{ flex: 1, backgroundColor: c.soft, overflow: 'hidden' }}>
      <View style={{ position: 'absolute', left: '-10%', right: '-10%', top: '48%', height: 14, backgroundColor: c.card, transform: [{ rotate: '-12deg' }] }} />
      <View style={{ position: 'absolute', top: '-10%', bottom: '-10%', left: '58%', width: 14, backgroundColor: c.card, transform: [{ rotate: '6deg' }] }} />
      <Animated.View entering={ZoomIn.delay(150)} style={{ position: 'absolute', left: '20%', top: '22%', width: '60%', aspectRatio: 1, borderRadius: 999, backgroundColor: c.mapRing, borderWidth: 1.5, borderColor: c.primary, borderStyle: 'dashed' }} />
      <View style={{ position: 'absolute', left: '47%', top: '47%', width: 18, height: 18, borderRadius: 9, backgroundColor: c.primary, borderWidth: 3.5, borderColor: '#FFFFFF' }} />
      {pins.map(([x, y, p], i) => (
        <Animated.View
          key={i}
          entering={ZoomIn.delay(400 + i * 150).springify()}
          style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, backgroundColor: i === 1 ? c.inv : c.card }}
        >
          <Txt size={14} weight="800" color={i === 1 ? c.invInk : c.ink}>
            {euro(p, lang)}
          </Txt>
        </Animated.View>
      ))}
    </View>
  );
}

function StepDeal() {
  const { c } = useTheme();
  const { lang } = useI18n();
  const a = lang === 'el' ? ['Μπορείς αύριο στις 18:00;', `Ναι! Για ${euro(45, lang)} είμαστε εντάξει;`, `Συμφωνία στα ${euro(45, lang)}`] : ['Can you do tomorrow at 18:00?', `Yes! Is ${euro(45, lang)} okay?`, `Deal at ${euro(45, lang)}`];
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', gap: 12 }}>
      <Animated.View entering={SlideInLeft.delay(150).springify().damping(18)} style={{ alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: c.card, padding: 14, borderRadius: 20, borderBottomLeftRadius: 6 }}>
        <Txt>{a[0]}</Txt>
      </Animated.View>
      <Animated.View entering={SlideInRight.delay(450).springify().damping(18)} style={{ alignSelf: 'flex-end', maxWidth: '80%', backgroundColor: c.primary, padding: 14, borderRadius: 20, borderBottomRightRadius: 6 }}>
        <Txt color="#FFFFFF">{a[1]}</Txt>
      </Animated.View>
      <Animated.View entering={ZoomIn.delay(800).springify()} style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: c.okSoft, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 20, marginTop: 6 }}>
        <Icon name="check" color={c.ok} size={20} strokeWidth={3} />
        <Txt weight="800" color={c.ok}>
          {a[2]}
        </Txt>
      </Animated.View>
      <Animated.View entering={ZoomIn.delay(1100)} style={{ alignSelf: 'center' }}>
        <Txt size={26} color="#F5A524" style={{ letterSpacing: 4 }}>
          ★★★★★
        </Txt>
      </Animated.View>
    </View>
  );
}

export default function Onboarding() {
  const { c } = useTheme();
  const { height } = useWindowDimensions();
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<'f' | 'b'>('f');
  const steps = [
    { title: t.onboarding.s1t, body: t.onboarding.s1b, Art: StepPost },
    { title: t.onboarding.s2t, body: t.onboarding.s2b, Art: StepMap },
    { title: t.onboarding.s3t, body: t.onboarding.s3b, Art: StepDeal },
  ];
  const cur = steps[step];
  const go = (n: number) => {
    setDir(n > step ? 'f' : 'b');
    setStep(n);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ height: 56, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {step > 0 ? (
          <IconButton name="back" label={t.common.back} onPress={() => go(step - 1)} />
        ) : (
          <Txt weight="700" muted>
            {`1 ${t.onboarding.of} 3`}
          </Txt>
        )}
        <Pressable accessibilityRole="button" onPress={finish} hitSlop={10} style={{ padding: 10 }}>
          <Txt weight="700" color={c.primaryText}>
            {t.onboarding.skip}
          </Txt>
        </Pressable>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 8, height: Math.min(380, Math.round(height * 0.44)), borderRadius: 36, backgroundColor: c.primarySoft, overflow: 'hidden' }}>
        <Animated.View key={step} entering={(dir === 'f' ? SlideInRight : SlideInLeft).springify().damping(20)} style={{ flex: 1 }}>
          <cur.Art />
        </Animated.View>
      </View>

      <Animated.View key={`copy-${step}`} entering={FadeIn.duration(400)} style={{ paddingHorizontal: 24, paddingTop: 28, gap: 10, flex: 1 }}>
        <H1>{cur.title}</H1>
        <Txt size={16} muted style={{ lineHeight: 24 }} numberOfLines={5}>
          {cur.body}
        </Txt>
      </Animated.View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingBottom: 28 }}>
        <View style={{ flexDirection: 'row', gap: 8 }} accessibilityElementsHidden>
          {steps.map((_, i) => (
            <View key={i} style={{ height: 8, width: i === step ? 28 : 8, borderRadius: 4, backgroundColor: i === step ? c.primary : c.line }} />
          ))}
        </View>
        <Button
          title={step < 2 ? t.onboarding.next : t.onboarding.go}
          iconRight="send"
          onPress={() => (step < 2 ? go(step + 1) : finish())}
          style={{ paddingHorizontal: 26, flexShrink: 1, marginLeft: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}
