import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AppState, BackHandler, Pressable, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { LogoMark } from '@/components/Logo';
import { Button, H1, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { useAuth } from './auth';

const PREF_KEY = 'ergo.biolock';
/** Leaving the app for less than this (e.g. to pick a photo) doesn't re-lock it. */
const GRACE_MS = 60_000;

type LockCtx = {
  /** Device has biometrics (or a screen lock) set up. */
  available: boolean;
  enabled: boolean;
  setEnabled: (on: boolean) => Promise<boolean>;
};

const Ctx = createContext<LockCtx | null>(null);

async function deviceSupportsLock() {
  const [hw, enrolled] = await Promise.all([LocalAuthentication.hasHardwareAsync(), LocalAuthentication.isEnrolledAsync()]);
  return hw && enrolled;
}

/** Biometric app lock: asks for fingerprint / face (or device PIN) on open and after time away. */
export function AppLockProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const { session, initializing } = useAuth();
  const [available, setAvailable] = useState(false);
  const [enabled, setEnabledState] = useState<boolean | null>(null);
  const [locked, setLocked] = useState(true);
  const backgroundAt = useRef<number | null>(null);
  const wasSignedIn = useRef<boolean | null>(null);

  // Signing in with a password in this session already proves who you are: don't lock on top.
  useEffect(() => {
    if (initializing) return;
    const now = !!session;
    if (wasSignedIn.current === false && now) setLocked(false);
    wasSignedIn.current = now;
  }, [initializing, session]);

  useEffect(() => {
    Promise.all([deviceSupportsLock(), SecureStore.getItemAsync(PREF_KEY)])
      .then(([ok, pref]) => {
        setAvailable(ok);
        setEnabledState(pref === '1');
      })
      .catch(() => setEnabledState(false));
  }, []);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'background') backgroundAt.current = Date.now();
      if (state === 'active') {
        const away = backgroundAt.current == null ? 0 : Date.now() - backgroundAt.current;
        backgroundAt.current = null;
        if (away > GRACE_MS) setLocked(true);
        deviceSupportsLock().then(setAvailable).catch(() => {});
      }
    });
    return () => sub.remove();
  }, []);

  const setEnabled = useCallback(
    async (on: boolean) => {
      if (on) {
        const res = await LocalAuthentication.authenticateAsync({ promptMessage: t.lock.enablePrompt, cancelLabel: t.common.cancel });
        if (!res.success) return false;
      }
      await SecureStore.setItemAsync(PREF_KEY, on ? '1' : '0');
      setEnabledState(on);
      setLocked(false);
      return true;
    },
    [t]
  );

  const value = useMemo<LockCtx>(() => ({ available, enabled: !!enabled, setEnabled }), [available, enabled, setEnabled]);
  const showLock = !!session && enabled === true && locked;

  return (
    <Ctx.Provider value={value}>
      {children}
      {showLock && <LockScreen onUnlocked={() => setLocked(false)} />}
    </Ctx.Provider>
  );
}

export function useAppLock() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAppLock outside AppLockProvider');
  return v;
}

function LockScreen({ onUnlocked }: { onUnlocked: () => void }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const { signOut } = useAuth();
  const [busy, setBusy] = useState(false);

  const unlock = useCallback(async () => {
    setBusy(true);
    try {
      const res = await LocalAuthentication.authenticateAsync({ promptMessage: t.lock.prompt, cancelLabel: t.common.cancel, fallbackLabel: t.lock.usePin });
      if (res.success) onUnlocked();
    } finally {
      setBusy(false);
    }
  }, [onUnlocked, t]);

  // Ask right away, and keep the back button from revealing the app underneath.
  useEffect(() => {
    unlock();
    const sub = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => sub.remove();
  }, [unlock]);

  return (
    <Animated.View entering={FadeIn.duration(150)} exiting={FadeOut.duration(200)} style={{ position: 'absolute', inset: 0, backgroundColor: c.bg, zIndex: 1000, elevation: 1000 }}>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28, gap: 14 }}>
        <LogoMark width={150} />
        <H1 center style={{ marginTop: 12 }}>
          {t.lock.title}
        </H1>
        <Txt muted center>
          {t.lock.body}
        </Txt>
        <View style={{ alignSelf: 'stretch', marginTop: 20, gap: 8 }}>
          <Button title={t.lock.unlock} icon="fingerprint" loading={busy} onPress={unlock} />
          <Pressable accessibilityRole="button" onPress={() => signOut()} style={{ alignSelf: 'center', padding: 12, flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Icon name="logout" color={c.muted} size={18} />
            <Txt weight="700" muted>
              {t.profile.logout}
            </Txt>
          </Pressable>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
