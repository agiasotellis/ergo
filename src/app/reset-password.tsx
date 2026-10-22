import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/Icon';
import { Button, Field, H1, IconButton, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { AuthError, useAuth } from '@/lib/auth';
import { useTheme } from '@/theme/ThemeProvider';

type Step = 'email' | 'code' | 'password';
const RESEND_SECONDS = 60;

/** Forgot password: email → code from the email → new password. */

/** Space kept between the field being typed in and the keyboard. */
const BOTTOM_OFFSET = 24;
export default function ResetPassword() {
  const { c } = useTheme();
  const { t } = useI18n();
  const params = useLocalSearchParams<{ email?: string }>();
  const { resetPassword, verifyResetCode, setNewPassword } = useAuth();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState(params.email ?? '');
  const [code, setCode] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wait, setWait] = useState(0);

  useEffect(() => {
    if (wait <= 0) return;
    const id = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(id);
  }, [wait]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      const code = e instanceof AuthError ? e.code : 'other';
      setError(code === 'code' ? t.reset.badCode : code === 'rate' ? t.reset.tooMany : t.common.error);
    } finally {
      setBusy(false);
    }
  };

  const send = () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError(t.auth.needEmail);
    return run(async () => {
      await resetPassword(email);
      setWait(RESEND_SECONDS);
      setStep('code');
    });
  };

  const verify = () =>
    run(async () => {
      await verifyResetCode(email, code);
      setStep('password');
    });

  const save = () => {
    if (pass.length < 8) return setError(t.reset.tooShort);
    if (pass !== pass2) return setError(t.reset.mismatch);
    run(async () => {
      await setNewPassword(pass);
      Alert.alert('ergo', t.reset.done);
      router.replace('/');
    });
  };

  const title = step === 'email' ? t.reset.title : step === 'code' ? t.reset.codeTitle : t.reset.newTitle;
  const sub = step === 'email' ? t.reset.emailSub : step === 'code' ? t.reset.codeSub(email.trim()) : t.reset.newSub;
  const eye = (
    <Pressable accessibilityRole="button" accessibilityLabel={show ? t.auth.hidePassword : t.auth.showPassword} onPress={() => setShow((s) => !s)} hitSlop={10}>
      <Icon name={show ? 'eyeOff' : 'eye'} color={show ? c.primaryText : c.muted} size={20} />
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
          <IconButton name="back" label={t.common.back} onPress={() => (step === 'code' ? setStep('email') : router.back())} />
        </View>
        <KeyboardAwareScrollView contentContainerStyle={{ padding: 20, gap: 16 }} keyboardShouldPersistTaps="handled" bottomOffset={BOTTOM_OFFSET}>
          <Animated.View key={step} entering={FadeInRight.duration(300)} style={{ gap: 16 }}>
            <View style={{ width: 64, height: 64, borderRadius: 22, backgroundColor: c.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={step === 'code' ? 'mail' : 'lock'} color={c.primaryText} size={28} />
            </View>
            <View style={{ gap: 6 }}>
              <H1>{title}</H1>
              <Txt muted>{sub}</Txt>
            </View>

            {step === 'email' && (
              <Field
                label={t.auth.email}
                icon="mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="maria@email.gr"
                autoFocus
              />
            )}

            {step === 'code' && (
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
            )}

            {step === 'password' && (
              <>
                <Field
                  label={t.reset.newPassword}
                  icon="lock"
                  value={pass}
                  onChangeText={setPass}
                  secureTextEntry={!show}
                  autoComplete="new-password"
                  textContentType="newPassword"
                  right={eye}
                  autoFocus
                />
                <Field label={t.reset.confirm} icon="lock" value={pass2} onChangeText={setPass2} secureTextEntry={!show} autoComplete="new-password" />
              </>
            )}

            {error && (
              <View style={{ backgroundColor: c.dangerSoft, borderRadius: 14, padding: 12 }}>
                <Txt size={14} weight="600" color={c.danger}>
                  {error}
                </Txt>
              </View>
            )}

            {step === 'email' && <Button title={t.reset.send} iconRight="send" loading={busy} disabled={!email.trim()} onPress={send} />}
            {step === 'code' && (
              <>
                <Button title={t.reset.verify} loading={busy} disabled={code.length < 6} onPress={verify} />
                <Button
                  title={wait > 0 ? t.reset.resendIn(wait) : t.reset.resend}
                  variant="ghost"
                  disabled={wait > 0 || busy}
                  onPress={() =>
                    run(async () => {
                      await resetPassword(email);
                      setWait(RESEND_SECONDS);
                    })
                  }
                />
              </>
            )}
            {step === 'password' && <Button title={t.reset.save} loading={busy} disabled={!pass || !pass2} onPress={save} />}
          </Animated.View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}
