import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import { Txt } from './ui';

/** Three-step tracker: posted → in progress → completed, with an animated fill. */
export function TaskProgress({ step, labels }: { step: 0 | 1 | 2; labels: [string, string, string] }) {
  const { c } = useTheme();
  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withDelay(200, withSpring(step / 2, { damping: 18, stiffness: 90 }));
  }, [step, fill]);

  const bar = useAnimatedStyle(() => ({ width: `${fill.value * 100}%` }));

  return (
    <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 2, now: step, text: labels[step] }} style={{ gap: 10 }}>
      <View style={{ height: 28, justifyContent: 'center', marginHorizontal: 14 }}>
        <View style={{ height: 4, borderRadius: 2, backgroundColor: c.line }} />
        <Animated.View style={[{ position: 'absolute', left: 0, height: 4, borderRadius: 2, backgroundColor: c.ok }, bar]} />
        <View style={{ position: 'absolute', left: -14, right: -14, flexDirection: 'row', justifyContent: 'space-between' }}>
          {[0, 1, 2].map((i) => (
            <Dot key={i} state={i < step ? 'done' : i === step ? (step === 2 ? 'done' : 'current') : 'todo'} />
          ))}
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {labels.map((l, i) => (
          <Txt
            key={l}
            size={12}
            weight={i === step ? '800' : '600'}
            color={i <= step ? c.ink : c.muted}
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{ flex: 1, textAlign: i === 0 ? 'left' : i === 2 ? 'right' : 'center' }}
          >
            {l}
          </Txt>
        ))}
      </View>
    </View>
  );
}

function Dot({ state }: { state: 'done' | 'current' | 'todo' }) {
  const { c } = useTheme();
  const pulse = useSharedValue(0);
  useEffect(() => {
    if (state === 'current') pulse.value = withRepeat(withSequence(withTiming(1, { duration: 900 }), withTiming(0, { duration: 900 })), -1);
  }, [state, pulse]);
  const halo = useAnimatedStyle(() => ({ opacity: 0.45 * (1 - pulse.value), transform: [{ scale: 1 + pulse.value * 0.7 }] }));

  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      {state === 'current' && <Animated.View style={[{ position: 'absolute', width: 28, height: 28, borderRadius: 14, backgroundColor: c.ok }, halo]} />}
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: state === 'todo' ? c.card : c.ok,
          borderWidth: 2.5,
          borderColor: state === 'todo' ? c.line : c.ok,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {state === 'done' && <Icon name="check" color="#FFFFFF" size={13} strokeWidth={3.4} />}
        {state === 'current' && <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFFFFF' }} />}
      </View>
    </View>
  );
}
