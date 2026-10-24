import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, View, type ScrollViewInstance } from 'react-native';
import Animated, { FadeIn, FadeInLeft, FadeInRight, SlideInDown, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { Button, IconButton, Txt } from './ui';
import { DUR, EASE_OUT } from '@/theme/motion';

const CELL = 44;
const MONTHS_AHEAD = 6;
/** Bookable times: 07:00 – 22:30 every 30 minutes. */
const SLOTS = Array.from({ length: 32 }, (_, i) => ({ h: 7 + Math.floor(i / 2), m: (i % 2) * 30 }));
const pad = (n: number) => String(n).padStart(2, '0');
const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

/** Bottom-sheet calendar + time picker in the app's own style (not the system picker). */
export function DateTimeSheet({
  visible,
  value,
  onClose,
  onPick,
}: {
  visible: boolean;
  value: Date | null;
  onClose: () => void;
  onPick: (d: Date) => void;
}) {
  const { c } = useTheme();
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const initial = value ?? new Date(today.getTime() + 24 * 3600 * 1000);
  const [month, setMonth] = useState(() => new Date(initial.getFullYear(), initial.getMonth(), 1));
  const [day, setDay] = useState<Date>(() => new Date(initial.getFullYear(), initial.getMonth(), initial.getDate()));
  const [slot, setSlot] = useState(() => ({ h: value ? value.getHours() : 18, m: value ? (value.getMinutes() >= 30 ? 30 : 0) : 0 }));
  const [dir, setDir] = useState<1 | -1>(1);
  const timeRef = useRef<ScrollViewInstance>(null);

  // Reset to the current value every time the sheet opens.
  useEffect(() => {
    if (!visible) return;
    const v = value ?? new Date(today.getTime() + 24 * 3600 * 1000);
    setMonth(new Date(v.getFullYear(), v.getMonth(), 1));
    setDay(new Date(v.getFullYear(), v.getMonth(), v.getDate()));
    setSlot({ h: value ? value.getHours() : 18, m: value ? (value.getMinutes() >= 30 ? 30 : 0) : 0 });
  }, [visible, value, today]);

  const now = new Date();
  const isToday = sameDay(day, now);
  const slotDisabled = (s: { h: number; m: number }) => isToday && (s.h < now.getHours() || (s.h === now.getHours() && s.m <= now.getMinutes()));

  // If today's chosen time has already passed, move to the next free slot.
  useEffect(() => {
    if (!slotDisabled(slot)) return;
    const next = SLOTS.find((s) => !slotDisabled(s));
    if (next) setSlot(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);

  // Keep the selected time in view.
  useEffect(() => {
    const i = SLOTS.findIndex((s) => s.h === slot.h && s.m === slot.m);
    if (visible && i >= 0) setTimeout(() => timeRef.current?.scrollTo({ x: Math.max(0, i * 82 - 120), animated: true }), 250);
  }, [visible, slot]);

  const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD, 1);
  const canPrev = month > minMonth;
  const canNext = month < maxMonth;
  const shift = (n: 1 | -1) => {
    setDir(n);
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));
  };

  // Monday-first grid, padded with blanks.
  const cells = useMemo(() => {
    const first = (month.getDay() + 6) % 7;
    const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const out: (Date | null)[] = Array.from({ length: first }, () => null);
    for (let d = 1; d <= days; d++) out.push(new Date(month.getFullYear(), month.getMonth(), d));
    while (out.length % 7) out.push(null);
    return out;
  }, [month]);

  const noSlotsToday = isToday && SLOTS.every(slotDisabled);
  const pick = () => {
    const d = new Date(day);
    d.setHours(slot.h, slot.m, 0, 0);
    onPick(d);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <Pressable accessibilityRole="button" accessibilityLabel={t.common.cancel} onPress={onClose} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
      <Animated.View
        entering={SlideInDown.duration(DUR.base).easing(EASE_OUT)}
        style={{ backgroundColor: c.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingTop: 12, paddingHorizontal: 20, paddingBottom: Math.max(insets.bottom, 12) + 16, gap: 14 }}
      >
        <View style={{ width: 40, height: 5, borderRadius: 3, backgroundColor: c.line, alignSelf: 'center' }} />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <IconButton name="back" label={t.post.prevMonth} size={40} bg={c.soft} onPress={canPrev ? () => shift(-1) : undefined} color={canPrev ? c.ink : c.line} />
          <Animated.View key={`h-${month.getTime()}`} entering={FadeIn.duration(200)} style={{ flex: 1 }}>
            <Txt size={18} weight="800" center>{`${t.post.months[month.getMonth()]} ${month.getFullYear()}`}</Txt>
          </Animated.View>
          <IconButton name="chevron" label={t.post.nextMonth} size={40} bg={c.soft} onPress={canNext ? () => shift(1) : undefined} color={canNext ? c.ink : c.line} />
        </View>

        <View>
          <View style={{ flexDirection: 'row' }}>
            {t.post.weekdays.map((w) => (
              <Txt key={w} size={12} weight="700" muted center style={{ flex: 1 }}>
                {w}
              </Txt>
            ))}
          </View>
          {/* One row per week with 7 equal cells (percent widths can round past the row and wrap early). */}
          <Animated.View key={month.getTime()} entering={(dir === 1 ? FadeInRight : FadeInLeft).duration(220)} style={{ marginTop: 6 }}>
            {Array.from({ length: cells.length / 7 }, (_, w) => (
              <View key={w} style={{ flexDirection: 'row' }}>
                {cells.slice(w * 7, w * 7 + 7).map((d, i) => {
                  if (!d) return <View key={`b${i}`} style={{ flex: 1, height: CELL }} />;
                  const past = d < today;
                  const on = sameDay(d, day);
                  const isNow = sameDay(d, today);
                  return (
                    <Pressable
                      key={d.getTime()}
                      accessibilityRole="button"
                      accessibilityState={{ selected: on, disabled: past }}
                      accessibilityLabel={`${d.getDate()} ${t.post.months[d.getMonth()]}`}
                      disabled={past}
                      onPress={() => setDay(d)}
                      style={{ flex: 1, height: CELL, alignItems: 'center', justifyContent: 'center' }}
                    >
                      {on && (
                        <Animated.View
                          entering={ZoomIn.duration(DUR.base).easing(EASE_OUT)}
                          style={{ position: 'absolute', width: CELL - 4, height: CELL - 4, borderRadius: (CELL - 4) / 2, backgroundColor: c.primary }}
                        />
                      )}
                      <Txt size={15} weight={on || isNow ? '800' : '500'} color={on ? '#FFFFFF' : past ? c.line : isNow ? c.primaryText : c.ink}>
                        {d.getDate()}
                      </Txt>
                      {isNow && !on && <View style={{ position: 'absolute', bottom: 6, width: 4, height: 4, borderRadius: 2, backgroundColor: c.primaryText }} />}
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </Animated.View>
        </View>

        <View style={{ gap: 8 }}>
          <Txt size={13} weight="700" muted>
            {t.post.time}
          </Txt>
          <ScrollView ref={timeRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingRight: 8 }}>
            {SLOTS.map((s) => {
              const on = s.h === slot.h && s.m === slot.m;
              const off = slotDisabled(s);
              return (
                <Pressable
                  key={`${s.h}:${s.m}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: on, disabled: off }}
                  disabled={off}
                  onPress={() => setSlot(s)}
                  style={{
                    width: 74,
                    height: 44,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: on ? c.inv : c.soft,
                    opacity: off ? 0.35 : 1,
                  }}
                >
                  <Txt size={15} weight="700" color={on ? c.invInk : c.ink} style={{ fontVariant: ['tabular-nums'] }}>
                    {`${pad(s.h)}:${pad(s.m)}`}
                  </Txt>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <Button
          title={noSlotsToday ? t.post.pickDate : `${t.post.choose} · ${day.getDate()} ${t.post.months[day.getMonth()].slice(0, 3)} ${pad(slot.h)}:${pad(slot.m)}`}
          icon="calendar"
          disabled={noSlotsToday}
          onPress={pick}
        />
      </Animated.View>
    </Modal>
  );
}
