import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import type { Session } from '@supabase/supabase-js';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { getProfile } from './api';
import { env } from './env';
import { supabase } from './supabase';
import type { Profile } from './types';

export class AuthError extends Error {
  constructor(public code: 'google-not-configured' | 'google-no-play' | 'cancelled' | 'invalid' | 'code' | 'rate' | 'other', message?: string) {
    super(message ?? code);
  }
}

type AuthCtx = {
  session: Session | null;
  userId: string | null;
  profile: Profile | null;
  initializing: boolean;
  refreshProfile: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<{ needsConfirmation: boolean }>;
  resetPassword: (email: string) => Promise<void>;
  verifyResetCode: (email: string, code: string) => Promise<void>;
  setNewPassword: (password: string) => Promise<void>;
  recovering: boolean;
  signOut: () => Promise<void>;
};

const Ctx = createContext<AuthCtx | null>(null);

let googleConfigured = false;
function configureGoogle() {
  if (googleConfigured || !env.googleWebClientId) return;
  GoogleSignin.configure({ webClientId: env.googleWebClientId, scopes: ['email', 'profile'] });
  googleConfigured = true;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profileState, setProfile] = useState<Profile | null>(null);
  const [initializing, setInitializing] = useState(true);
  /** True between verifying a reset code and saving the new password. */
  const [recovering, setRecovering] = useState(false);

  const userId = session?.user.id ?? null;
  // Never expose a previous user's profile after switching accounts.
  const profile = profileState && profileState.id === userId ? profileState : null;

  useEffect(() => {
    configureGoogle();
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setInitializing(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!userId) return;
    try {
      setProfile(await getProfile(userId));
    } catch {
      setProfile(null);
    }
  }, [userId]);

  useEffect(() => {
    refreshProfile();
  }, [refreshProfile]);

  const signInWithGoogle = useCallback(async () => {
    if (!env.googleWebClientId) throw new AuthError('google-not-configured');
    configureGoogle();
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const res = await GoogleSignin.signIn();
      if (!isSuccessResponse(res)) throw new AuthError('cancelled');
      const idToken = res.data.idToken;
      if (!idToken) throw new AuthError('other', 'No ID token returned by Google');
      const { error } = await supabase.auth.signInWithIdToken({ provider: 'google', token: idToken });
      if (error) throw new AuthError('other', error.message);
    } catch (e) {
      if (e instanceof AuthError) throw e;
      if (isErrorWithCode(e)) {
        if (e.code === statusCodes.SIGN_IN_CANCELLED || e.code === statusCodes.IN_PROGRESS) throw new AuthError('cancelled');
        if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) throw new AuthError('google-no-play');
      }
      throw new AuthError('other', e instanceof Error ? e.message : String(e));
    }
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) throw new AuthError(error.status === 400 ? 'invalid' : 'other', error.message);
  }, []);

  const signUpWithEmail = useCallback(async (name: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { full_name: name.trim() } },
    });
    if (error) throw new AuthError('other', error.message);
    return { needsConfirmation: !data.session };
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim());
    if (error) throw new AuthError('other', error.message);
  }, []);

  /** Verifies the recovery code from the email; on success the user is signed in. */
  const verifyResetCode = useCallback(async (email: string, code: string) => {
    setRecovering(true);
    const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token: code.trim(), type: 'recovery' });
    if (error) {
      setRecovering(false);
      throw new AuthError(error.status === 429 ? 'rate' : 'code', error.message);
    }
  }, []);

  const setNewPassword = useCallback(async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) throw new AuthError('other', error.message);
    setRecovering(false);
  }, []);

  const signOut = useCallback(async () => {
    try {
      if (googleConfigured) await GoogleSignin.signOut();
    } catch {
      // Not signed in with Google.
    }
    await supabase.auth.signOut();
  }, []);

  const value = useMemo<AuthCtx>(
    () => ({ session, userId, profile, initializing, refreshProfile, signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword, verifyResetCode, setNewPassword, recovering, signOut }),
    [session, userId, profile, initializing, refreshProfile, signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword, verifyResetCode, setNewPassword, recovering, signOut]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth must be used inside AuthProvider');
  return v;
}
