import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { Avatar, Badge, font, IconButton, Loading, MAX_FONT_SCALE, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { getConversation, markRead, messages as fetchMessages, sendMessage } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import type { Conversation, Message } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

export default function Chat() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const { userId } = useAuth();
  const [conv, setConv] = useState<Conversation | null>(null);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef<FlatList<Message>>(null);

  const load = useCallback(async () => {
    if (!id || !userId) return;
    const [cv, m] = await Promise.all([getConversation(id), fetchMessages(id)]);
    setConv(cv);
    setMsgs(m);
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
    } finally {
      setSending(false);
    }
  };

  if (!conv) return <Loading />;
  const other = conv.poster_id === userId ? conv.worker : conv.poster;
  const time = (iso: string) => new Date(iso).toLocaleTimeString(lang === 'el' ? 'el-GR' : 'en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={{ backgroundColor: c.card, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, padding: 16, paddingTop: 8, gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <IconButton name="back" label={t.common.back} bg={c.soft} onPress={() => router.back()} />
          <Avatar name={other?.full_name} url={other?.avatar_url} />
          <Txt size={16} weight="700" style={{ flex: 1 }} numberOfLines={1}>
            {other?.full_name || '—'}
          </Txt>
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
            return (
              <Animated.View
                entering={FadeInUp.duration(250)}
                style={{
                  alignSelf: me ? 'flex-end' : 'flex-start',
                  maxWidth: '78%',
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  borderRadius: 20,
                  borderBottomRightRadius: me ? 6 : 20,
                  borderBottomLeftRadius: me ? 20 : 6,
                  backgroundColor: me ? c.primary : c.card,
                }}
              >
                <Txt color={me ? '#FFFFFF' : c.ink}>{item.body}</Txt>
                <Txt size={11} color={me ? 'rgba(255,255,255,0.8)' : c.muted} style={{ alignSelf: 'flex-end', marginTop: 2 }}>
                  {time(item.created_at)}
                </Txt>
              </Animated.View>
            );
          }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, padding: 12, backgroundColor: c.card, borderTopLeftRadius: 28, borderTopRightRadius: 28 }}>
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
              transform: [{ scale: pressed ? 0.92 : 1 }],
            })}
          >
            <Icon name="send" color="#FFFFFF" size={20} strokeWidth={2.4} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
