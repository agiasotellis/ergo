import * as Notifications from 'expo-notifications';
import { AndroidImportance } from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';

import type { Lang } from '@/i18n/strings';
import { supabase } from './supabase';

/**
 * Push notifications via Firebase Cloud Messaging.
 * The phone's FCM token is stored in public.push_tokens; the database sends pushes through
 * the send-push Edge Function when a notification row or chat message is created.
 */

// Show notifications while the app is open, too.
Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: true, shouldSetBadge: false }),
});

let currentToken: string | null = null;

async function createChannels(lang: Lang) {
  if (Platform.OS !== 'android') return;
  const el = lang === 'el';
  await Notifications.setNotificationChannelAsync('default', {
    name: el ? 'Εργασίες & προσφορές' : 'Tasks & offers',
    importance: AndroidImportance.HIGH,
    lightColor: '#2563EB',
    vibrationPattern: [0, 200, 120, 200],
  });
  await Notifications.setNotificationChannelAsync('messages', {
    name: el ? 'Μηνύματα' : 'Messages',
    importance: AndroidImportance.HIGH,
    lightColor: '#2563EB',
    vibrationPattern: [0, 150, 80, 150],
  });
}

async function saveToken(token: string) {
  currentToken = token;
  await supabase.rpc('register_push_token', { p_token: token, p_platform: Platform.OS === 'ios' ? 'ios' : 'android' });
}

/** Asks for permission (Android 13+) and registers this phone. Safe to call repeatedly. */
export async function registerForPush(lang: Lang): Promise<boolean> {
  try {
    await createChannels(lang);
    let { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') status = (await Notifications.requestPermissionsAsync()).status;
    if (status !== 'granted') return false;
    const { data } = await Notifications.getDevicePushTokenAsync();
    if (typeof data === 'string' && data) await saveToken(data);
    return true;
  } catch {
    // No Google Play services / Firebase not configured in this build: the app works without push.
    return false;
  }
}

/** Forget this phone before signing out, so the next person doesn't get the previous user's pushes. */
export async function unregisterPush() {
  if (!currentToken) return;
  try {
    await supabase.from('push_tokens').delete().eq('token', currentToken);
  } catch {
    // ignore
  }
  currentToken = null;
}

function openFromNotification(data: Record<string, unknown> | undefined) {
  if (!data) return;
  if (data.type === 'message' && typeof data.conversationId === 'string') router.push(`/chat/${data.conversationId}`);
  else if (typeof data.jobId === 'string' && data.jobId) router.push(`/task/${data.jobId}`);
  else router.push('/notifications');
}

/** Registers when signed in, keeps the token fresh, and opens the right screen on tap. */
export function usePushNotifications(userId: string | null, lang: Lang) {
  const handledColdStart = useRef(false);

  useEffect(() => {
    if (!userId) return;
    registerForPush(lang);
    supabase.from('profiles').update({ locale: lang }).eq('id', userId).then(() => {});
    const tokenSub = Notifications.addPushTokenListener(({ data }) => {
      if (typeof data === 'string' && data) saveToken(data).catch(() => {});
    });
    return () => tokenSub.remove();
  }, [userId, lang]);

  useEffect(() => {
    if (!userId) return;
    const sub = Notifications.addNotificationResponseReceivedListener((r) => openFromNotification(r.notification.request.content.data));
    // App opened by tapping a notification while it was closed.
    if (!handledColdStart.current) {
      handledColdStart.current = true;
      Notifications.getLastNotificationResponseAsync()
        .then((r) => r && openFromNotification(r.notification.request.content.data))
        .catch(() => {});
    }
    return () => sub.remove();
  }, [userId]);
}
