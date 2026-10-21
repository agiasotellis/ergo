import type { BottomTabBarProps } from 'expo-router/tabs';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, View, type LayoutChangeEvent } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import type { IconName } from './icons';
import { Txt } from './ui';

const ICON: Record<string, IconName> = { index: 'home', map: 'map', messages: 'chat', profile: 'user' };
const ITEM = 48;
const SPRING = { damping: 17, stiffness: 190, mass: 0.8 };

/**
 * Floating, fully rounded, icon-only tab bar with a centre "post a task" button.
 * A pill glides to the selected tab and the icon pops when it becomes active.
 */
export function TabBar({ state, navigateToTab, unread = 0 }: BottomTabBarProps & { unread?: number }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  const labels: Record<string, string> = { index: t.tabs.home, map: t.tabs.map, messages: t.tabs.messages, profile: t.tabs.profile };

  const [xs, setXs] = useState<Record<number, number>>({});
  const pillX = useSharedValue(-1);
  const placed = xs[state.index] != null;

  useEffect(() => {
    const x = xs[state.index];
    if (x == null) return;
    // First placement jumps; later changes glide.
    pillX.value = pillX.value < 0 ? x : withSpring(x, SPRING);
  }, [state.index, xs, pillX]);

  const pillStyle = useAnimatedStyle(() => ({ transform: [{ translateX: pillX.value }], opacity: pillX.value < 0 ? 0 : 1 }));

  const onItemLayout = (i: number) => (e: LayoutChangeEvent) => {
    const x = e.nativeEvent.layout.x;
    setXs((prev) => (prev[i] === x ? prev : { ...prev, [i]: x }));
  };

  const items = state.routes.map((route, i) => (
    <TabItem
      key={route.key}
      focused={state.index === i}
      icon={ICON[route.name] ?? 'home'}
      label={route.name === 'messages' && unread ? `${labels[route.name]}, ${unread}` : labels[route.name]}
      badge={route.name === 'messages' ? unread : 0}
      onLayout={onItemLayout(i)}
      onPress={() => {
        if (state.index !== i) navigateToTab(route.key);
      }}
    />
  ));

  const fab = (
    <Pressable
      key="post"
      accessibilityRole="button"
      accessibilityLabel={t.tabs.post}
      onPress={() => router.push('/post')}
      style={({ pressed }) => ({
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: c.primary,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: pressed ? 0.92 : 1 }, { rotate: pressed ? '45deg' : '0deg' }],
      })}
    >
      <Icon name="plus" color="#FFFFFF" size={26} strokeWidth={2.6} />
    </Pressable>
  );

  return (
    <View
      style={{
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: Math.max(insets.bottom, 12) + 4,
        height: 72,
        borderRadius: 36,
        backgroundColor: c.card,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 6,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 10,
      }}
    >
      {placed && (
        <Animated.View
          pointerEvents="none"
          style={[{ position: 'absolute', left: 0, top: (72 - ITEM) / 2, width: ITEM, height: ITEM, borderRadius: ITEM / 2, backgroundColor: c.primarySoft }, pillStyle]}
        />
      )}
      {items.slice(0, 2)}
      {fab}
      {items.slice(2)}
    </View>
  );
}

function TabItem({
  focused,
  icon,
  label,
  badge,
  onPress,
  onLayout,
}: {
  focused: boolean;
  icon: IconName;
  label: string;
  badge: number;
  onPress: () => void;
  onLayout: (e: LayoutChangeEvent) => void;
}) {
  const { c } = useTheme();
  const scale = useSharedValue(focused ? 1.1 : 1);
  const lift = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      scale.value = withSequence(withTiming(0.82, { duration: 90 }), withSpring(1.1, { damping: 9, stiffness: 260 }));
      lift.value = withSequence(withTiming(-4, { duration: 140 }), withSpring(0, { damping: 10, stiffness: 200 }));
    } else {
      scale.value = withSpring(1, SPRING);
    }
  }, [focused, scale, lift]);

  const iconStyle = useAnimatedStyle(() => ({ transform: [{ translateY: lift.value }, { scale: scale.value }] }));

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={label}
      onPress={onPress}
      onLayout={onLayout}
      style={{ width: ITEM, height: ITEM, borderRadius: ITEM / 2, alignItems: 'center', justifyContent: 'center' }}
    >
      <Animated.View style={iconStyle}>
        <Icon name={icon} color={focused ? c.primaryText : c.muted} size={22} strokeWidth={focused ? 2.3 : 2} />
      </Animated.View>
      {badge > 0 && (
        <View
          style={{
            position: 'absolute',
            top: 6,
            right: 4,
            minWidth: 20,
            height: 20,
            paddingHorizontal: 4,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: c.card,
            backgroundColor: '#FF6A3D',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Txt size={10} weight="800" color="#0F1F3D" center style={{ lineHeight: 12 }} maxFontSizeMultiplier={1}>
            {badge > 9 ? '9+' : String(badge)}
          </Txt>
        </View>
      )}
    </Pressable>
  );
}
