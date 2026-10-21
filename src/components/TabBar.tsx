import type { BottomTabBarProps } from 'expo-router/tabs';
import { router } from 'expo-router';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import type { IconName } from './icons';
import { Txt } from './ui';

const ICON: Record<string, IconName> = { index: 'home', map: 'map', messages: 'chat', profile: 'user' };

/** Floating, fully rounded, icon-only tab bar with a centre "post a task" button. */
export function TabBar({ state, navigateToTab, unread = 0 }: BottomTabBarProps & { unread?: number }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  const labels: Record<string, string> = { index: t.tabs.home, map: t.tabs.map, messages: t.tabs.messages, profile: t.tabs.profile };

  const items = state.routes.map((route, i) => {
    const focused = state.index === i;
    return (
      <Pressable
        key={route.key}
        accessibilityRole="tab"
        accessibilityState={{ selected: focused }}
        accessibilityLabel={route.name === 'messages' && unread ? `${labels[route.name]}, ${unread}` : labels[route.name]}
        onPress={() => {
          if (!focused) navigateToTab(route.key);
        }}
        style={{ width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? c.primarySoft : 'transparent' }}
      >
        <Icon name={ICON[route.name] ?? 'home'} color={focused ? c.primaryText : c.muted} size={22} strokeWidth={focused ? 2.3 : 2} />
        {route.name === 'messages' && unread > 0 && (
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
              {unread > 9 ? '9+' : String(unread)}
            </Txt>
          </View>
        )}
      </Pressable>
    );
  });

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
      {items.slice(0, 2)}
      {fab}
      {items.slice(2)}
    </View>
  );
}
