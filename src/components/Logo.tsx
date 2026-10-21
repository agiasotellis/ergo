import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import Svg, { Circle, G, Path } from 'react-native-svg';

import { brand } from '@/theme/tokens';

const APath = Animated.createAnimatedComponent(Path);

/** The ergo high-five symbol (viewBox 0 -6 200 150). `animate` draws the arms and rays in. */
export function Symbol({ width = 120, animate = false }: { width?: number; animate?: boolean }) {
  const arm = useSharedValue(animate ? 90 : 0);
  const ray = useSharedValue(animate ? 24 : 0);

  useEffect(() => {
    if (!animate) return;
    arm.value = withDelay(250, withTiming(0, { duration: 450 }));
    ray.value = withDelay(650, withSpring(0, { damping: 14 }));
  }, [animate, arm, ray]);

  const armProps = useAnimatedProps(() => ({ strokeDashoffset: arm.value }));
  const rayProps = useAnimatedProps(() => ({ strokeDashoffset: ray.value }));

  return (
    <Svg width={width} height={(width * 150) / 200} viewBox="0 -6 200 150">
      <G strokeLinecap="round" strokeLinejoin="round">
        <Circle cx={40} cy={60} r={20} fill={brand.coral} />
        <Path d="M4 138 V117 C4 100 18 87 35 87 H42 C56 87 66 97 66 111 V138 Z" fill={brand.coral} />
        <APath animatedProps={armProps} strokeDasharray="90" d="M54 113 C79 105 91 83 96 55" stroke={brand.coral} strokeWidth={21} fill="none" />
        <Circle cx={160} cy={60} r={20} fill={brand.blue} />
        <Path d="M196 138 V117 C196 100 182 87 165 87 H158 C144 87 134 97 134 111 V138 Z" fill={brand.blue} />
        <APath animatedProps={armProps} strokeDasharray="90" d="M146 113 C121 105 109 83 104 55" stroke={brand.blue} strokeWidth={21} fill="none" />
        <APath animatedProps={rayProps} strokeDasharray="24" d="M100 2 V24" stroke={brand.orange} strokeWidth={10} fill="none" />
        <APath animatedProps={rayProps} strokeDasharray="24" d="M73 15 L84 29" stroke={brand.orange} strokeWidth={10} fill="none" />
        <APath animatedProps={rayProps} strokeDasharray="24" d="M127 15 L116 29" stroke={brand.orange} strokeWidth={10} fill="none" />
      </G>
    </Svg>
  );
}

export function Wordmark({ size = 40, color }: { size?: number; color: string }) {
  return (
    <Text
      accessibilityRole="header"
      style={{ fontFamily: 'Nunito_900Black', fontSize: size, lineHeight: size * 1.15, color, letterSpacing: -size * 0.02 }}
    >
      ergo
    </Text>
  );
}

export function LogoInline({ color }: { color: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Symbol width={40} />
      <Wordmark size={26} color={color} />
    </View>
  );
}
