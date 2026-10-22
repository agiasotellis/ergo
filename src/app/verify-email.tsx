import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { Button, Field, H1, IconButton, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { AuthError, useAuth } from '@/lib/auth';
import { useTheme } from '@/theme/ThemeProvider';

const RESEND_SECONDS = 60;

/** After sign-up: type the 6-digit code from the confirmation email. */

/** Space kept between the field being typed in and the keyboard. */
const BOTTOM_OFFSET = 24;
export default function VerifyEmail() {
  const { c } = useTheme();
  const { t } = useI18n();
  const { email = '', resend } = useLocalSearchParams<{ email?: string; resend?: string }>();
  const { verifySignupCode, resendSignupCode } = useAuth();
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wait, setWait] = useState(resend === '1' ? 0 : RESEND_SECONDS);
  const sentOnOpen = useRef(false);

  useEffect(() => {
    if (wait <= 0) return;
    const id = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(id);
  }, [wait]);

  const describe = (e: unknown) => {
    const code = e instanceof AuthError ? e.code : 'other';
    return code === 'code' ? t.reset.badCode : code === 'rate' ? t.reset.tooMany : t.common.error;
  };

  const sendAgain = async () => {
    setError(null);
    try {
      await resendSignupCode(email);
      setWait(RESEND_SECONDS);
    } catch (e) {
      setError(describe(e));
    }
  };

  // Coming from a login with an unconfirmed email: send a fresh code once.
  useEffect(() => {
    if (resend === '1' && !sentOnOpen.current) {
      sentOnOpen.current = true;
      sendAgain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resend]);

  const verify = async () => {
    setBusy(true);
    setError(null);
    try {
      await verifySignupCode(email, code);
      router.replace('/(tabs)');
    } catch (e) {
      setError(describe(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
          <IconButton name="back" label={t.common.back} onPress={() => router.back()} />
        </View>
        <KeyboardAwareScrollView contentContainerStyle={{ padding: 20, gap: 16 }} keyboardShouldPersistTaps="handled" bottomOffset={BOTTOM_OFFSET}>
          <Animated.View entering={FadeInDown.duration(350)} style={{ gap: 16 }}>
            <View style={{ width: 64, height: 64, borderRadius: 22, backgroundColor: c.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="mail" color={c.primaryText} size={28} />
            </View>
            <View style={{ gap: 6 }}>
              <H1>{t.verify.title}</H1>
              <Txt muted>{t.verify.sub(email)}</Txt>
            </View>
            <Field
              label={t.reset.code}
              icon="shield"
              value={code}
              onChangeText={(v) => setCode(v.replace(/\D/g, '').slice(0, 8))}
              keyboardType="number-pad"
              autoComplete="one-time-code"
              textContentType="oneTimeCode"
              placeholder="123456"
              maxLength={8}
              autoFocus
              style={{ fontSize: 22, letterSpacing: 6 }}
            />
            {error && (
              <View style={{ backgroundColor: c.dangerSoft, borderRadius: 14, padding: 12 }}>
                <Txt size={14} weight="600" color={c.danger}>
                  {error}
                </Txt>
              </View>
            )}
            <Button title={t.verify.verify} loading={busy} disabled={code.length < 6} onPress={verify} />
            <Button title={wait > 0 ? t.reset.resendIn(wait) : t.reset.resend} variant="ghost" disabled={wait > 0} onPress={sendAgain} />
          </Animated.View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}
