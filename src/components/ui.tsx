import { Image } from 'expo-image';
import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { initials } from '@/lib/format';
import { useTheme } from '@/theme/ThemeProvider';
import { radius } from '@/theme/tokens';
import { Icon } from './Icon';
import type { IconName } from './icons';

// ---------- text ----------
export type Weight = '400' | '500' | '600' | '700' | '800' | '900';

/**
 * Inter is bundled so text measures and renders identically on every Android phone
 * (OEM system fonts on Samsung/Xiaomi/OnePlus otherwise mis-measure Greek text, which
 * offsets centred labels and breaks words). Android needs one family per weight.
 */
export const font: Record<Weight, string> = {
  '400': 'Inter_400Regular',
  '500': 'Inter_500Medium',
  '600': 'Inter_600SemiBold',
  '700': 'Inter_700Bold',
  '800': 'Inter_800ExtraBold',
  '900': 'Inter_900Black',
};

/** Large accessibility font sizes still grow text, but not enough to break layouts. */
export const MAX_FONT_SCALE = 1.3;

type TxtProps = TextProps & {
  size?: number;
  weight?: Weight;
  color?: string;
  muted?: boolean;
  center?: boolean;
};

export function Txt({ size = 15, weight = '400', color, muted, center, style, ...rest }: TxtProps) {
  const { c } = useTheme();
  return (
    <Text
      maxFontSizeMultiplier={MAX_FONT_SCALE}
      {...rest}
      style={[
        { fontSize: size, fontFamily: font[weight], color: color ?? (muted ? c.muted : c.ink), lineHeight: Math.round(size * 1.4), includeFontPadding: false },
        center && { textAlign: 'center' },
        style,
      ]}
    />
  );
}

/** Screen title: Inter Black. */
export function H1({ children, style, center }: { children: ReactNode; style?: StyleProp<TextStyle>; center?: boolean }) {
  return (
    <Txt size={28} weight="900" center={center} style={[{ letterSpacing: -0.6, lineHeight: 35 }, style]}>
      {children}
    </Txt>
  );
}

/** Section / card title. */
export function H2({ children, style, center }: { children: ReactNode; style?: StyleProp<TextStyle>; center?: boolean }) {
  return (
    <Txt size={19} weight="800" center={center} style={[{ letterSpacing: -0.3, lineHeight: 25 }, style]}>
      {children}
    </Txt>
  );
}

// ---------- buttons ----------
type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {
  title: string;
  variant?: 'primary' | 'secondary' | 'inverse' | 'ghost' | 'outline' | 'danger' | 'onPrimary';
  icon?: IconName;
  iconRight?: IconName;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: 'md' | 'lg';
  left?: ReactNode;
  /** Overrides the label/icon colour of the variant. */
  textColor?: string;
};

export function Button({ title, variant = 'primary', icon, iconRight, loading, disabled, style, size = 'lg', left, textColor, ...rest }: ButtonProps) {
  const { c } = useTheme();
  const palette = {
    primary: { bg: c.primary, fg: '#FFFFFF', border: c.primary },
    secondary: { bg: c.soft, fg: c.ink, border: c.soft },
    inverse: { bg: c.inv, fg: c.invInk, border: c.inv },
    ghost: { bg: 'transparent', fg: c.primaryText, border: 'transparent' },
    /** Text button on a coloured (primary) background. */
    onPrimary: { bg: 'transparent', fg: '#FFFFFF', border: 'transparent' },
    outline: { bg: c.card, fg: c.ink, border: c.line },
    danger: { bg: c.dangerSoft, fg: c.danger, border: c.dangerSoft },
  }[variant];
  const fg = textColor ?? palette.fg;
  const h = size === 'lg' ? 56 : 46;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled || !!loading, busy: !!loading }}
      disabled={disabled || loading}
      style={({ pressed }) => [
        {
          height: h,
          borderRadius: h / 2,
          paddingHorizontal: 20,
          backgroundColor: palette.bg,
          borderWidth: 1.5,
          borderColor: palette.border,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          opacity: disabled ? 0.5 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={fg} />
      ) : (
        <>
          {left}
          {icon && <Icon name={icon} color={fg} size={20} />}
          <Txt size={16} weight="700" color={fg} numberOfLines={1} center style={{ flexShrink: 1 }}>
            {title}
          </Txt>
          {iconRight && <Icon name={iconRight} color={fg} size={18} strokeWidth={2.4} />}
        </>
      )}
    </Pressable>
  );
}

export function IconButton({
  name,
  label,
  onPress,
  bg,
  color,
  size = 46,
}: {
  name: IconName;
  label: string;
  onPress?: () => void;
  bg?: string;
  color?: string;
  size?: number;
}) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      hitSlop={6}
      style={({ pressed }) => ({
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bg ?? c.card,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: pressed ? 0.94 : 1 }],
      })}
    >
      <Icon name={name} color={color ?? c.ink} size={20} strokeWidth={2.2} />
    </Pressable>
  );
}

// ---------- surfaces ----------
export function Card({ children, style, onPress }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  const { c } = useTheme();
  const base: ViewStyle = { backgroundColor: c.card, borderRadius: radius.lg, padding: 16 };
  if (!onPress) return <View style={[base, style]}>{children}</View>;
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [base, { transform: [{ scale: pressed ? 0.98 : 1 }] }, style]}>
      {children}
    </Pressable>
  );
}

export function Chip({ label, selected, onPress }: { label: string; selected?: boolean; onPress?: () => void }) {
  const { c } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      onPress={onPress}
      style={({ pressed }) => ({
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: selected ? c.inv : c.card,
        justifyContent: 'center',
        transform: [{ scale: pressed ? 0.95 : 1 }],
      })}
    >
      <Txt size={14} weight="600" color={selected ? c.invInk : c.ink} numberOfLines={1}>
        {label}
      </Txt>
    </Pressable>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  const { c } = useTheme();
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel={label} style={{ flexDirection: 'row', backgroundColor: c.soft, borderRadius: 16, padding: 4, gap: 4 }}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <Pressable
            key={o.value}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            onPress={() => onChange(o.value)}
            style={{ flex: 1, height: 40, borderRadius: 12, backgroundColor: on ? c.inv : 'transparent', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 }}
          >
            <Txt size={14} weight="700" color={on ? c.invInk : c.ink} numberOfLines={1}>
              {o.label}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

// ---------- inputs ----------
type FieldProps = TextInputProps & { label: string; icon?: IconName; right?: ReactNode };

export function Field({ label, icon, right, style, multiline, ...rest }: FieldProps) {
  const { c } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View style={{ gap: 6 }}>
      <Txt size={13} weight="700">
        {label}
      </Txt>
      <View
        style={{
          flexDirection: 'row',
          alignItems: multiline ? 'flex-start' : 'center',
          gap: 10,
          minHeight: 52,
          paddingHorizontal: 14,
          paddingVertical: multiline ? 12 : 0,
          borderRadius: 16,
          borderWidth: 1.5,
          borderColor: focused ? c.primary : c.line,
          backgroundColor: c.card,
        }}
      >
        {icon && <Icon name={icon} color={c.muted} size={18} />}
        <TextInput
          accessibilityLabel={label}
          placeholderTextColor={c.muted}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          multiline={multiline}
          maxFontSizeMultiplier={MAX_FONT_SCALE}
          style={[{ flex: 1, fontSize: 15, fontFamily: font['400'], color: c.ink, paddingVertical: 0, minHeight: multiline ? 72 : 48, textAlignVertical: multiline ? 'top' : 'center' }, style]}
          {...rest}
        />
        {right}
      </View>
    </View>
  );
}

// ---------- people ----------
export function Avatar({ name, url, size = 44, bg, fg }: { name?: string | null; url?: string | null; size?: number; bg?: string; fg?: string }) {
  const { c } = useTheme();
  const r = size * 0.34;
  if (url) return <Image source={{ uri: url }} style={{ width: size, height: size, borderRadius: r, backgroundColor: c.soft }} contentFit="cover" />;
  return (
    <View style={{ width: size, height: size, borderRadius: r, backgroundColor: bg ?? c.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
      <Txt size={size * 0.36} weight="700" color={fg ?? c.primaryText}>
        {initials(name)}
      </Txt>
    </View>
  );
}

export function Stars({ value, size = 14 }: { value: number; size?: number }) {
  const { c } = useTheme();
  return (
    <Txt size={size} accessibilityLabel={`${value}/5`} style={{ letterSpacing: 1 }}>
      <Txt size={size} color="#F5A524">{'★'.repeat(Math.round(value))}</Txt>
      <Txt size={size} color={c.line}>{'★'.repeat(5 - Math.round(value))}</Txt>
    </Txt>
  );
}

// ---------- states ----------
export function Loading() {
  const { c } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <ActivityIndicator color={c.primary} size="large" />
    </View>
  );
}

export function Empty({ title, body, action }: { title: string; body?: string; action?: ReactNode }) {
  return (
    <View style={{ alignItems: 'center', padding: 28, gap: 10 }}>
      <Txt size={17} weight="800" center>
        {title}
      </Txt>
      {body && (
        <Txt muted center>
          {body}
        </Txt>
      )}
      {action}
    </View>
  );
}

export function Badge({ label, bg, fg, style }: { label: string; bg: string; fg: string; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[{ alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, backgroundColor: bg }, style]}>
      <Txt size={12} weight="700" color={fg} numberOfLines={1}>
        {label}
      </Txt>
    </View>
  );
}
