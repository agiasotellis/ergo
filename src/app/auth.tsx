import { Redirect, router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, LinearTransition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { Icon } from '@/components/Icon';
import { LogoInline } from '@/components/Logo';
import { Button, Field, H1, Segmented, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { AuthError, useAuth } from '@/lib/auth';
import { useTheme } from '@/theme/ThemeProvider';

function GoogleG() {
  return (
    <Svg width={20} height={20} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </Svg>
  );
}

export default function Auth() {
  const { c } = useTheme();
  const { t } = useI18n();
  const { session, recovering, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState<'google' | 'email' | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  if (session && !recovering) return <Redirect href="/(tabs)" />;

  const fail = (e: unknown) => {
    if (e instanceof AuthError) {
      if (e.code === 'cancelled') return;
      const msg =
        e.code === 'google-not-configured' ? t.auth.googleNotConfigured : e.code === 'google-no-play' ? t.auth.googleNoPlay : e.code === 'invalid' ? t.auth.invalid : e.message;
      Alert.alert('ergo', msg);
      return;
    }
    Alert.alert('ergo', t.common.error);
  };

  const google = async () => {
    setBusy('google');
    try {
      await signInWithGoogle();
      router.replace('/(tabs)');
    } catch (e) {
      fail(e);
    } finally {
      setBusy(null);
    }
  };

  const submit = async () => {
    setNotice(null);
    if (mode === 'signup' && !agree) return Alert.alert('ergo', t.auth.needTerms);
    setBusy('email');
    try {
      if (mode === 'login') {
        await signInWithEmail(email, password);
        router.replace('/(tabs)');
      } else {
        const { needsConfirmation } = await signUpWithEmail(name, email, password);
        if (needsConfirmation) {
          setNotice(t.auth.checkEmail);
          setMode('login');
        } else router.replace('/(tabs)');
      }
    } catch (e) {
      fail(e);
    } finally {
      setBusy(null);
    }
  };

  const forgot = () => router.push({ pathname: '/reset-password', params: { email: email.trim() } });

  const login = mode === 'login';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }} keyboardShouldPersistTaps="handled">
          <View style={{ alignItems: 'center', paddingVertical: 6 }}>
            <LogoInline color={c.ink} />
          </View>

          <Animated.View key={mode} entering={FadeInDown.duration(350)} style={{ gap: 6, marginTop: 6 }}>
            <H1>{login ? t.auth.loginTitle : t.auth.signupTitle}</H1>
            <Txt muted>{login ? t.auth.loginSub : t.auth.signupSub}</Txt>
          </Animated.View>

          <Segmented
            label={`${t.auth.login} / ${t.auth.signup}`}
            value={mode}
            onChange={setMode}
            options={[
              { value: 'login', label: t.auth.login },
              { value: 'signup', label: t.auth.signup },
            ]}
          />

          <Button title={t.auth.google} variant="outline" left={<GoogleG />} loading={busy === 'google'} disabled={!!busy} onPress={google} />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: c.line }} />
            <Txt size={13} weight="600" muted>
              {t.auth.or}
            </Txt>
            <View style={{ flex: 1, height: 1, backgroundColor: c.line }} />
          </View>

          {notice && (
            <Animated.View entering={FadeIn} style={{ backgroundColor: c.okSoft, borderRadius: 16, padding: 14 }}>
              <Txt color={c.ok} weight="600">
                {notice}
              </Txt>
            </Animated.View>
          )}

          <Animated.View layout={LinearTransition} style={{ gap: 12 }}>
            {!login && (
              <Animated.View entering={FadeInDown}>
                <Field label={t.auth.name} icon="user" value={name} onChangeText={setName} autoComplete="name" textContentType="name" placeholder="Μαρία Αντωνίου" />
              </Animated.View>
            )}
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
            />
            <Field
              label={t.auth.password}
              icon="lock"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPass}
              autoComplete={login ? 'current-password' : 'new-password'}
              placeholder={t.auth.passwordHint}
              right={
                <Pressable accessibilityRole="button" accessibilityLabel={showPass ? t.auth.hidePassword : t.auth.showPassword} onPress={() => setShowPass((s) => !s)} hitSlop={10}>
                  <Icon name={showPass ? 'eyeOff' : 'eye'} color={showPass ? c.primaryText : c.muted} size={20} />
                </Pressable>
              }
            />
            {login ? (
              <Pressable accessibilityRole="button" onPress={forgot} hitSlop={8} style={{ alignSelf: 'flex-end', paddingVertical: 10, paddingHorizontal: 4 }}>
                <Txt size={14} weight="700" color={c.primaryText}>
                  {t.auth.forgot}
                </Txt>
              </Pressable>
            ) : (
              <Pressable
                accessibilityRole="checkbox"
                accessibilityState={{ checked: agree }}
                onPress={() => setAgree((a) => !a)}
                style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start', paddingVertical: 4 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: agree ? c.primary : c.muted,
                    backgroundColor: agree ? c.primary : 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {agree && <Icon name="check" color="#FFFFFF" size={14} strokeWidth={3.6} />}
                </View>
                <Txt size={13} muted style={{ flex: 1 }}>
                  {t.auth.terms}
                </Txt>
              </Pressable>
            )}
          </Animated.View>

          <Button
            title={login ? t.auth.login : t.auth.signupCta}
            iconRight="send"
            loading={busy === 'email'}
            disabled={!!busy || !email || password.length < (login ? 1 : 8) || (!login && !name.trim())}
            onPress={submit}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Txt muted>{login ? t.auth.noAccount : t.auth.haveAccount}</Txt>
            <Pressable accessibilityRole="button" onPress={() => setMode(login ? 'signup' : 'login')} style={{ padding: 8 }}>
              <Txt weight="800" color={c.primaryText}>
                {login ? t.auth.signup : t.auth.login}
              </Txt>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
