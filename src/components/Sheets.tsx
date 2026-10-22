import { useEffect, useState, type ReactNode } from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, View } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useI18n } from '@/i18n/I18nProvider';
import { blockUser, isRateLimited, sendReport } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import type { ReportReason, ReportTarget } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import type { IconName } from './icons';
import { Button, Field, Txt } from './ui';
import { DUR, EASE_OUT } from '@/theme/motion';

/** Bottom sheet frame shared by the menus below. */
export function Sheet({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: ReactNode }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Pressable accessibilityRole="button" accessibilityLabel={t.common.cancel} onPress={onClose} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <Animated.View
          entering={SlideInDown.duration(DUR.base).easing(EASE_OUT)}
          style={{ backgroundColor: c.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingTop: 12, paddingHorizontal: 20, paddingBottom: Math.max(insets.bottom, 12) + 12, gap: 12 }}
        >
          <View style={{ width: 40, height: 5, borderRadius: 3, backgroundColor: c.line, alignSelf: 'center' }} />
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export type SheetAction = { icon: IconName; label: string; danger?: boolean; onPress: () => void };

/** "⋯" menu: a short list of actions. */
export function ActionSheet({ visible, onClose, actions }: { visible: boolean; onClose: () => void; actions: SheetAction[] }) {
  const { c } = useTheme();
  return (
    <Sheet visible={visible} onClose={onClose}>
      <View style={{ paddingVertical: 4 }}>
        {actions.map((a) => (
          <Pressable
            key={a.label}
            accessibilityRole="button"
            onPress={() => {
              onClose();
              // Let the sheet close before opening the next thing (alert or sheet).
              setTimeout(a.onPress, 250);
            }}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 14, minHeight: 56, opacity: pressed ? 0.6 : 1 })}
          >
            <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: a.danger ? c.dangerSoft : c.soft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={a.icon} color={a.danger ? c.danger : c.ink} size={20} />
            </View>
            <Txt size={16} weight="700" color={a.danger ? c.danger : c.ink} style={{ flex: 1 }}>
              {a.label}
            </Txt>
          </Pressable>
        ))}
      </View>
    </Sheet>
  );
}

const REASONS: ReportReason[] = ['spam', 'scam', 'inappropriate', 'harassment', 'other'];

/** Report form: reason, optional details, optional block. */
export function ReportSheet({ target, onClose, onBlocked }: { target: ReportTarget | null; onClose: () => void; onBlocked?: (userId: string) => void }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const { userId } = useAuth();
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [details, setDetails] = useState('');
  const [alsoBlock, setAlsoBlock] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!target) return;
    setReason(null);
    setDetails('');
    setAlsoBlock(false);
  }, [target]);

  const submit = async () => {
    if (!target || !reason || !userId) return;
    setBusy(true);
    try {
      await sendReport(userId, target, reason, details);
      if (alsoBlock && target.userId) {
        await blockUser(userId, target.userId);
        onBlocked?.(target.userId);
      }
      onClose();
      Alert.alert('ergo', t.safety.thanks);
    } catch (e) {
      Alert.alert('ergo', isRateLimited(e) ? t.common.rateLimited : t.common.error);
    } finally {
      setBusy(false);
    }
  };

  const title = target?.type === 'job' ? t.safety.reportTask : target?.type === 'message' ? t.safety.reportMessage : t.safety.reportUser;
  const canBlock = !!target?.userId && target.userId !== userId;

  return (
    <Sheet visible={!!target} onClose={onClose}>
      <View style={{ gap: 4 }}>
        <Txt size={13} weight="700" muted>
          {title}
        </Txt>
        <Txt size={22} weight="900">
          {t.safety.reportTitle}
        </Txt>
        <Txt size={13} muted>
          {t.safety.reportSub}
        </Txt>
      </View>
      <View accessibilityRole="radiogroup" style={{ gap: 6 }}>
        {REASONS.map((r) => {
          const on = reason === r;
          return (
            <Pressable
              key={r}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              onPress={() => setReason(r)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 48, paddingHorizontal: 14, borderRadius: 14, backgroundColor: on ? c.primarySoft : c.soft }}
            >
              <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: on ? c.primary : c.muted, alignItems: 'center', justifyContent: 'center' }}>
                {on && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: c.primary }} />}
              </View>
              <Txt weight={on ? '700' : '500'} style={{ flex: 1 }}>
                {t.safety.reasons[r]}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {reason && <Field label={t.safety.details} value={details} onChangeText={setDetails} multiline maxLength={1000} />}
      {canBlock && (
        <Pressable
          accessibilityRole="checkbox"
          accessibilityState={{ checked: alsoBlock }}
          onPress={() => setAlsoBlock((b) => !b)}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 6 }}
        >
          <View style={{ width: 24, height: 24, borderRadius: 8, borderWidth: 2, borderColor: alsoBlock ? c.danger : c.muted, backgroundColor: alsoBlock ? c.danger : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            {alsoBlock && <Icon name="check" color="#FFFFFF" size={14} strokeWidth={3.4} />}
          </View>
          <Txt weight="600">{t.safety.alsoBlock}</Txt>
        </Pressable>
      )}
      <Button title={t.safety.send} icon="flag" loading={busy} disabled={!reason} onPress={submit} />
    </Sheet>
  );
}

/** Asks for confirmation, then blocks. */
export function confirmBlock(opts: { me: string; other: string; name: string; t: ReturnType<typeof useI18n>['t']; onDone: () => void }) {
  const { t } = opts;
  Alert.alert(t.safety.block, t.safety.blockConfirm(opts.name || '—'), [
    { text: t.common.cancel, style: 'cancel' },
    {
      text: t.safety.block,
      style: 'destructive',
      onPress: async () => {
        try {
          await blockUser(opts.me, opts.other);
          opts.onDone();
          Alert.alert('ergo', t.safety.blocked);
        } catch {
          Alert.alert('ergo', t.common.error);
        }
      },
    },
  ]);
}
