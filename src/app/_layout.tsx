import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Nunito_800ExtraBold,
  Nunito_900Black,
  useFonts,
} from "@expo-google-fonts/nunito";
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider as NavThemeProvider,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { AppLockProvider } from "@/lib/appLock";
import { AuthProvider, useAuth } from "@/lib/auth";
import { LocationProvider } from "@/lib/location";
import { ThemeProvider, useTheme } from "@/theme/ThemeProvider";

SplashScreen.preventAutoHideAsync();

/** Shown instead of closing the app when a screen throws. */
export function ErrorBoundary({
  error,
  retry,
}: {
  error: Error;
  retry: () => Promise<void>;
}) {
  SplashScreen.hideAsync().catch(() => {});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        padding: 28,
        gap: 14,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
          color: "#0F1F3D",
          textAlign: "center",
        }}
      >
        Κάτι πήγε στραβά / Something went wrong
      </Text>
      <Text
        selectable
        style={{ fontSize: 13, color: "#55627A", textAlign: "center" }}
      >
        {error.message}
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={retry}
        style={{
          marginTop: 8,
          height: 48,
          paddingHorizontal: 24,
          borderRadius: 24,
          backgroundColor: "#2563EB",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 16 }}>
          Δοκίμασε ξανά / Try again
        </Text>
      </Pressable>
    </View>
  );
}

function Navigator() {
  const { c, isDark } = useTheme();
  const { ready } = useI18n();
  const { initializing } = useAuth();
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const appReady = ready && !initializing && fontsLoaded;
  useEffect(() => {
    if (appReady) SplashScreen.hideAsync();
  }, [appReady]);

  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = {
    ...base,
    colors: {
      ...base.colors,
      background: c.bg,
      card: c.card,
      text: c.ink,
      border: c.line,
      primary: c.primary,
    },
  };

  if (!appReady) return null;

  return (
    <NavThemeProvider value={navTheme}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <AppLockProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: c.bg },
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="index" options={{ animation: "none" }} />
          <Stack.Screen name="welcome" options={{ animation: "fade" }} />
          <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
          <Stack.Screen
            name="post"
            options={{ presentation: "modal", animation: "slide_from_bottom" }}
          />
          <Stack.Screen name="edit-task/[id]" options={{ animation: "slide_from_bottom" }} />
        </Stack>
      </AppLockProvider>
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
