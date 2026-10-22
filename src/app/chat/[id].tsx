import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, KeyboardAvoidingView, Modal, Platform, Pressable, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeInUp, ZoomIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { ActionSheet, ReportSheet, confirmBlock } from '@/components/Sheets';
import { Avatar, Badge, Button, IconButton, Loading, MAX_FONT_SCALE, Txt, font } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import {
  chatPhotoUrls,
  getConversation,
  markRead,
  messages as fetchMessages,
  myBlockedIds,
  pickPhoto,
  sendMessage,
  sendPhotoMessage,
  unblockUser,
  type PickedPhoto,
} from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import type { Conversation, Message, ReportTarget } from '@/lib/types';
import { openProfile } from '@/lib/nav';
import { useTheme } from '@/theme/ThemeProvider';
import { DUR, EASE_OUT } from '@/theme/motion';

const PHOTO = 220;

export default function Chat() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [conv, setConv] = useState<Conversation | null>(null);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [blockedByMe, setBlockedByMe] = useState(false);
  const [menu, setMenu] = useState(false);
  const [attach, setAttach] = useState(false);
  const [report, setReport] = useState<ReportTarget | null>(null);
  const [viewer, setViewer] = useState<string | null>(null);
  const listRef = useRef<FlatList<Message>>(null);

  const load = useCallback(async () => {
    if (!id || !userId) return;
    const [cv, m, blocked] = await Promise.all([getConversation(id), fetchMessages(id), myBlockedIds().catch(() => [] as string[])]);
    setConv(cv);
    setMsgs(m);
    const other = cv.poster_id === userId ? cv.worker_id : cv.poster_id;
    setBlockedByMe(blocked.includes(other));
    markRead(id, userId);
  }, [id, userId]);

  useEffect(() => {
    load().catch(() => {});
    if (!id) return;
    const ch = supabase
      .channel(`chat:${id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${id}` }, (payload) => {
        const m = payload.new as Message;
        setMsgs((list) => (list.some((x) => x.id === m.id) ? list : [...list, m]));
        if (userId && m.sender_id !== userId) markRead(id, userId);
      })
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [id, userId, load]);

  // Signed links for photos we haven't resolved yet.
  useEffect(() => {
    const missing = msgs.map((m) => m.image_path).filter((p): p is string => !!p && !urls[p]);
    if (!missing.length) return;
    chatPhotoUrls([...new Set(missing)])
      .then((found) => setUrls((u) => ({ ...u, ...found })))
      .catch(() => {});
  }, [msgs, urls]);

  const blockedError = () => Alert.alert('ergo', t.safety.cantMessage);

  const send = async () => {
    const body = draft.trim();
    if (!body || !id || !userId) return;
    setSending(true);
    setDraft('');
    try {
      const m = await sendMessage(id, userId, body);
      setMsgs((list) => (list.some((x) => x.id === m.id) ? list : [...list, m]));
    } catch {
      setDraft(body);
      blockedError();
    } finally {
      setSending(false);
    }
  };

  const sendPhoto = async (source: 'camera' | 'library') => {
    if (!id || !userId) return;
    let photo: PickedPhoto | null;
    try {
      photo = await pickPhoto(source);
    } catch (e) {
      Alert.alert('ergo', e instanceof Error && e.message === 'camera-permission' ? t.chat.cameraDenied : t.common.error);
      return;
    }
    if (!photo) return;
    // Show it right away with a spinner while it uploads.
    const tempId = `local-${Date.now()}`;
    const temp: Message = { id: tempId, conversation_id: id, sender_id: userId, body: '📷', read_at: null, created_at: new Date().toISOString(), local_uri: photo.uri };
    setMsgs((list) => [...list, temp]);
    try {
      const m = await sendPhotoMessage(id, userId, photo);
      setUrls((u) => ({ ...u, [m.image_path!]: photo.uri }));
      setMsgs((list) => {
        const without = list.filter((x) => x.id !== tempId);
        return without.some((x) => x.id === m.id) ? without : [...without, m];
      });
    } catch {
      setMsgs((list) => list.filter((x) => x.id !== tempId));
      Alert.alert('ergo', t.chat.photoFailed);
    }
  };

  if (!conv || !userId) return <Loading />;
  const otherId = conv.poster_id === userId ? conv.worker_id : conv.poster_id;
  const other = conv.poster_id === userId ? conv.worker : conv.poster;
  const time = (iso: string) => new Date(iso).toLocaleTimeString(lang === 'el' ? 'el-GR' : 'en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ backgroundColor: c.card, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, padding: 16, paddingTop: 8, gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <IconButton name="back" label={t.common.back} bg={c.soft} onPress={() => router.back()} />
          <Pressable accessibilityRole="button" onPress={() => openProfile(otherId, userId)} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Avatar name={other?.full_name} url={other?.avatar_url} />
            <Txt size={16} weight="700" style={{ flex: 1 }} numberOfLines={1}>
              {other?.full_name || '—'}
            </Txt>
          </Pressable>
          <IconButton name="more" label={t.safety.more} bg={c.soft} onPress={() => setMenu(true)} />
        </View>
        {conv.job && (
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push(`/task/${conv.job_id}`)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: c.soft, borderRadius: 18, padding: 10 }}
          >
            <CategoryTile cat={conv.job.category} size={40} />
            <Txt weight="700" style={{ flex: 1 }} numberOfLines={1}>
              {conv.job.title}
            </Txt>
            <Badge label={t.task.status[conv.job.status]} bg={c.card} fg={c.muted} />
          </Pressable>
        )}
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}>
        <FlatList
          ref={listRef}
          data={msgs}
          keyExtractor={(m) => m.id}
          contentContainerStyle={{ padding: 16, gap: 8 }}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => {
            const me = item.sender_id === userId;
            const photo = item.local_uri ?? (item.image_path ? urls[item.image_path] : undefined);
            const isPhoto = !!item.image_path || !!item.local_uri;
            const uploading = !!item.local_uri && item.id.startsWith('local-');
            return (
              <Animated.View entering={FadeInUp.duration(250)} style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '78%' }}>
                <Pressable
                  onPress={photo && !uploading ? () => setViewer(photo) : undefined}
                  onLongPress={me || uploading ? undefined : () => setReport({ type: 'message', id: item.id, userId: item.sender_id })}
                  delayLongPress={350}
                  accessibilityRole={isPhoto ? 'imagebutton' : undefined}
                  accessibilityLabel={isPhoto ? t.chat.photo : undefined}
                  style={{
                    padding: isPhoto ? 4 : 0,
                    paddingHorizontal: isPhoto ? 4 : 14,
                    paddingVertical: isPhoto ? 4 : 10,
                    borderRadius: 20,
                    borderBottomRightRadius: me ? 6 : 20,
                    borderBottomLeftRadius: me ? 20 : 6,
                    backgroundColor: me ? c.primary : c.card,
                  }}
                >
                  {isPhoto ? (
                    <View style={{ width: PHOTO, height: PHOTO, borderRadius: 16, overflow: 'hidden', backgroundColor: c.soft, alignItems: 'center', justifyContent: 'center' }}>
                      {photo ? (
                        <Image source={{ uri: photo }} style={{ width: PHOTO, height: PHOTO }} contentFit="cover" transition={200} />
                      ) : (
                        <Icon name="image" color={c.muted} size={32} />
                      )}
                      {uploading && (
                        <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)', alignItems: 'center', justifyContent: 'center' }}>
                          <ActivityIndicator color="#FFFFFF" />
                        </View>
                      )}
                    </View>
                  ) : (
                    <Txt color={me ? '#FFFFFF' : c.ink}>{item.body}</Txt>
                  )}
                  <Txt
                    size={11}
                    color={me ? 'rgba(255,255,255,0.8)' : c.muted}
                    style={{ alignSelf: 'flex-end', marginTop: 2, marginRight: isPhoto ? 8 : 0, marginBottom: isPhoto ? 2 : 0 }}
                  >
                    {time(item.created_at)}
                  </Txt>
                </Pressable>
              </Animated.View>
            );
          }}
        />

        {blockedByMe ? (
          <Animated.View entering={FadeIn} style={{ padding: 16, gap: 10, backgroundColor: c.card, borderTopLeftRadius: 28, borderTopRightRadius: 28 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Icon name="block" color={c.danger} size={20} />
              <Txt weight="700" style={{ flex: 1 }}>
                {t.safety.youBlocked}
              </Txt>
            </View>
            <Button
              title={t.safety.unblock}
              variant="secondary"
              size="md"
              onPress={async () => {
                try {
                  await unblockUser(userId, otherId);
                  setBlockedByMe(false);
                } catch {
                  Alert.alert('ergo', t.common.error);
                }
              }}
            />
          </Animated.View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, padding: 12, backgroundColor: c.card, borderTopLeftRadius: 28, borderTopRightRadius: 28 }}>
            <IconButton name="camera" label={t.chat.addPhoto} bg={c.soft} color={c.primaryText} onPress={() => setAttach(true)} />
            <TextInput
              accessibilityLabel={t.messages.placeholder}
              value={draft}
              onChangeText={setDraft}
              placeholder={t.messages.placeholder}
              placeholderTextColor={c.muted}
              multiline
              maxLength={4000}
              maxFontSizeMultiplier={MAX_FONT_SCALE}
              style={{ flex: 1, minHeight: 46, maxHeight: 120, borderRadius: 23, backgroundColor: c.soft, paddingHorizontal: 16, paddingVertical: 12, fontSize: 15, fontFamily: font['400'], color: c.ink }}
            />
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t.messages.send}
              onPress={send}
              disabled={sending || !draft.trim()}
              style={({ pressed }) => ({
                width: 46,
                height: 46,
                borderRadius: 23,
                backgroundColor: c.primary,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: !draft.trim() ? 0.5 : 1,
                transform: [{ scale: pressed ? 0.97 : 1 }],
              })}
            >
              <Icon name="send" color="#FFFFFF" size={20} strokeWidth={2.4} />
            </Pressable>
          </View>
        )}
      </KeyboardAvoidingView>

      <ActionSheet
        visible={attach}
        onClose={() => setAttach(false)}
        actions={[
          { icon: 'camera', label: t.chat.camera, onPress: () => sendPhoto('camera') },
          { icon: 'image', label: t.chat.gallery, onPress: () => sendPhoto('library') },
        ]}
      />
      <ActionSheet
        visible={menu}
        onClose={() => setMenu(false)}
        actions={[
          { icon: 'flag', label: t.safety.reportUser, onPress: () => setReport({ type: 'user', id: otherId, userId: otherId }) },
          blockedByMe
            ? {
                icon: 'block',
                label: t.safety.unblock,
                onPress: () =>
                  unblockUser(userId, otherId)
                    .then(() => setBlockedByMe(false))
                    .catch(() => Alert.alert('ergo', t.common.error)),
              }
            : {
                icon: 'block',
                label: t.safety.block,
                danger: true,
                onPress: () => confirmBlock({ me: userId, other: otherId, name: other?.full_name ?? '', t, onDone: () => setBlockedByMe(true) }),
              },
        ]}
      />
      <ReportSheet target={report} onClose={() => setReport(null)} onBlocked={() => setBlockedByMe(true)} />

      {/* Full-screen photo */}
      <Modal visible={!!viewer} transparent animationType="fade" statusBarTranslucent onRequestClose={() => setViewer(null)}>
        <Pressable accessibilityRole="button" accessibilityLabel={t.chat.close} onPress={() => setViewer(null)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.92)', justifyContent: 'center' }}>
          {viewer && (
            <Animated.View entering={ZoomIn.duration(DUR.base).easing(EASE_OUT)} style={{ width: '100%', aspectRatio: 3 / 4, maxHeight: '85%' }}>
              <Image source={{ uri: viewer }} style={{ flex: 1 }} contentFit="contain" />
            </Animated.View>
          )}
          <SafeAreaView style={{ position: 'absolute', top: 0, right: 16 }}>
            <View style={{ paddingTop: 8 }}>
              <IconButton name="close" label={t.chat.close} bg="rgba(255,255,255,0.15)" color="#FFFFFF" onPress={() => setViewer(null)} />
            </View>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
