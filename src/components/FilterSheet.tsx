import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { useI18n } from '@/i18n/I18nProvider';
import { DEFAULT_FILTERS, RADIUS_OPTIONS, applyFilters, type Filters, type SortKey, type WhenFilter } from '@/lib/filters';
import type { NearbyJob } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import { Sheet } from './Sheets';
import { Button, MAX_FONT_SCALE, Txt, font } from './ui';

const SORTS: SortKey[] = ['near', 'new', 'priceAsc', 'priceDesc', 'soon'];
const WHENS: WhenFilter[] = ['any', 'today', 'tomorrow', 'week', 'flexible'];
const PRESETS = [
  { key: 'low', min: null, max: 20 },
  { key: 'mid', min: 20, max: 50 },
  { key: 'high', min: 50, max: 100 },
  { key: 'top', min: 100, max: null },
] as const;

function Choice({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      onPress={() => {
        if (!on) Haptics.selectionAsync().catch(() => {});
        onPress();
      }}
      style={({ pressed }) => ({
        minHeight: 42,
        paddingHorizontal: 14,
        borderRadius: 14,
        justifyContent: 'center',
        backgroundColor: on ? c.inv : c.soft,
        transform: [{ scale: pressed ? 0.96 : 1 }],
      })}
    >
      <Txt size={14} weight="700" color={on ? c.invInk : c.ink} numberOfLines={1}>
        {label}
      </Txt>
    </Pressable>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: 10 }}>
      <Txt size={14} weight="800">
        {title}
      </Txt>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{children}</View>
    </View>
  );
}

/** Bottom sheet that edits a copy of the filters and shows how many tasks match before applying. */
export function FilterSheet({
  visible,
  value,
  jobs,
  onClose,
  onApply,
}: {
  visible: boolean;
  value: Filters;
  jobs: NearbyJob[];
  onClose: () => void;
  onApply: (f: Filters) => void;
}) {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  const [draft, setDraft] = useState<Filters>(value);

  useEffect(() => {
    if (visible) setDraft(value);
  }, [visible, value]);

  const count = useMemo(() => applyFilters(jobs, draft).length, [jobs, draft]);
  const set = (patch: Partial<Filters>) => setDraft((d) => ({ ...d, ...patch }));
  const km = (r: number) => (lang === 'el' ? `${r} χλμ.` : `${r} km`);
  const num = (v: string) => {
    const n = parseInt(v.replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(n) ? n : null;
  };

  const priceInput = (label: string, v: number | null, onChange: (n: number | null) => void) => (
    <View style={{ flex: 1, minWidth: 120, height: 50, borderRadius: 14, backgroundColor: c.soft, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, gap: 6 }}>
      <Txt size={13} weight="700" muted>
        {label}
      </Txt>
      <TextInput
        accessibilityLabel={`${t.filters.price} ${label}`}
        value={v == null ? '' : String(v)}
        onChangeText={(x) => onChange(num(x))}
        keyboardType="number-pad"
        placeholder={t.filters.any}
        placeholderTextColor={c.muted}
        maxLength={6}
        maxFontSizeMultiplier={MAX_FONT_SCALE}
        style={{ flex: 1, fontSize: 16, fontFamily: font['700'], color: c.ink, paddingVertical: 0, textAlign: 'right' }}
      />
      <Txt size={16} weight="700">
        €
      </Txt>
    </View>
  );

  return (
    <Sheet visible={visible} onClose={onClose}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Txt size={22} weight="900" style={{ flex: 1 }}>
          {t.filters.title}
        </Txt>
        <Pressable accessibilityRole="button" onPress={() => setDraft(DEFAULT_FILTERS)} hitSlop={8} style={{ paddingVertical: 8, paddingHorizontal: 4 }}>
          <Txt weight="700" color={c.primaryText}>
            {t.filters.reset}
          </Txt>
        </Pressable>
      </View>

      <ScrollView style={{ maxHeight: 520 }} contentContainerStyle={{ gap: 20, paddingBottom: 4 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Section title={t.filters.sort}>
          {SORTS.map((s) => (
            <Choice key={s} label={t.filters.sorts[s]} on={draft.sort === s} onPress={() => set({ sort: s })} />
          ))}
        </Section>

        <Section title={t.filters.distance}>
          {RADIUS_OPTIONS.map((r) => (
            <Choice key={r} label={km(r)} on={draft.radius === r} onPress={() => set({ radius: r })} />
          ))}
        </Section>

        <View style={{ gap: 10 }}>
          <Txt size={14} weight="800">
            {t.filters.price}
          </Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Choice label={t.filters.any} on={draft.min == null && draft.max == null} onPress={() => set({ min: null, max: null })} />
            {PRESETS.map((p) => (
              <Choice key={p.key} label={t.filters.presets[p.key]} on={draft.min === p.min && draft.max === p.max} onPress={() => set({ min: p.min, max: p.max })} />
            ))}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {priceInput(t.filters.min, draft.min, (n) => set({ min: n }))}
            {priceInput(t.filters.max, draft.max, (n) => set({ max: n }))}
          </View>
        </View>

        <Section title={t.filters.when}>
          {WHENS.map((w) => (
            <Choice key={w} label={t.filters.whens[w]} on={draft.when === w} onPress={() => set({ when: w })} />
          ))}
        </Section>
      </ScrollView>

      <Animated.View key={count} entering={FadeIn.duration(150)}>
        <Button
          title={t.filters.show(count)}
          onPress={() => {
            onApply(draft);
            onClose();
          }}
        />
      </Animated.View>
    </Sheet>
  );
}

/** Square "filters" button with a badge showing how many filters are on. */
export function FilterButton({ count, onPress, size = 52 }: { count: number; onPress: () => void; size?: number }) {
  const { c } = useTheme();
  const { t } = useI18n();
  const on = count > 0;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t.filters.open(count)}
      onPress={onPress}
      style={({ pressed }) => ({
        width: size,
        height: size,
        borderRadius: 18,
        backgroundColor: on ? c.inv : c.card,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: pressed ? 0.94 : 1 }],
      })}
    >
      <Icon name="sliders" color={on ? c.invInk : c.ink} size={20} strokeWidth={2.2} />
      {on && (
        <View
          pointerEvents="none"
          style={{ position: 'absolute', top: -4, right: -4, minWidth: 20, height: 20, paddingHorizontal: 4, borderRadius: 10, borderWidth: 2, borderColor: c.bg, backgroundColor: '#FF6A3D', alignItems: 'center', justifyContent: 'center' }}
        >
          <Txt size={10} weight="800" color="#0F1F3D" center style={{ lineHeight: 12 }} maxFontSizeMultiplier={1}>
            {String(count)}
          </Txt>
        </View>
      )}
    </Pressable>
  );
}
