import { router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, FadeInDown, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LogoMark, Wordmark } from '@/components/Logo';
import { Button, Segmented, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';

function Ring({ delay }: { delay: number }) {
  const { isDark } = useTheme();
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = withDelay(delay, withRepeat(withTiming(1, { duration: 3600, easing: Easing.out(Easing.quad) }), -1));
  }, [delay, p]);
  const style = useAnimatedStyle(() => ({ opacity: 0.6 * (1 - p.value), transform: [{ scale: 0.4 + p.value * 1.2 }] }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        { position: 'absolute', width: 340, height: 340, borderRadius: 170, borderWidth: 2, borderColor: isDark ? 'rgba(59,130,246,0.35)' : 'rgba(59,130,246,0.22)' },
        style,
      ]}
    />
  );
}

export default function Welcome() {
  const { isDark } = useTheme();
  const { t, lang, setLang } = useI18n();
  const bg = isDark ? '#0F1F3D' : '#FFFFFF';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
      <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, paddingTop: 8 }}>
        <View style={{ width: 120 }}>
          <Segmented
            label="Language"
            value={lang}
            onChange={setLang}
            options={[
              { value: 'el', label: 'ΕΛ' },
              { value: 'en', label: 'EN' },
            ]}
          />
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Ring delay={0} />
        <Ring delay={1200} />
        <Ring delay={2400} />
        <Animated.View entering={FadeInDown.duration(500)}>
          <LogoMark width={200} animate />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).duration(500)} style={{ marginTop: 6 }}>
          <Wordmark size={76} color={isDark ? '#FFFFFF' : '#0F1F3D'} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(450).duration(500)}>
          <Txt size={12} weight="800" color={isDark ? '#C9D3E6' : '#3A4A66'} style={{ letterSpacing: 3, marginTop: 8 }} center>
            {t.welcome.tagline}
          </Txt>
        </Animated.View>
      </View>

      <Animated.View entering={FadeInDown.delay(650).duration(500)} style={{ padding: 20, paddingBottom: 28 }}>
        <Button title={t.welcome.start} iconRight="send" onPress={() => router.push('/onboarding')} />
      </Animated.View>
    </SafeAreaView>
  );
}
