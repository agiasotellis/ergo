import { Nunito_800ExtraBold, Nunito_900Black, useFonts } from '@expo-google-fonts/nunito';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider as NavThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { I18nProvider, useI18n } from '@/i18n/I18nProvider';
import { AuthProvider, useAuth } from '@/lib/auth';
import { LocationProvider } from '@/lib/location';
import { ThemeProvider, useTheme } from '@/theme/ThemeProvider';

SplashScreen.preventAutoHideAsync();

function Navigator() {
  const { c, isDark } = useTheme();
  const { ready } = useI18n();
  const { initializing } = useAuth();
  const [fontsLoaded] = useFonts({ Nunito_800ExtraBold, Nunito_900Black });

  const appReady = ready && !initializing && fontsLoaded;
  useEffect(() => {
    if (appReady) SplashScreen.hideAsync();
  }, [appReady]);

  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.card, text: c.ink, border: c.line, primary: c.primary } };

  if (!appReady) return null;

  return (
    <NavThemeProvider value={navTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg }, animation: 'slide_from_right' }}>
        <Stack.Screen name="index" options={{ animation: 'none' }} />
        <Stack.Screen name="welcome" options={{ animation: 'fade' }} />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
        <Stack.Screen name="post" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
      </Stack>
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <LocationProvider>
              <Navigator />
            </LocationProvider>
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
