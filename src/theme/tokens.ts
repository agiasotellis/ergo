/** ergo brand tokens. Keep in sync with the brand kit (theme/tokens.json). */
export const brand = {
  coral: '#FF6A3D',
  orange: '#FFA726',
  blue: '#3B82F6',
  navy: '#0F1F3D',
  white: '#FFFFFF',
} as const;

export type Palette = {
  bg: string;
  card: string;
  soft: string;
  ink: string;
  muted: string;
  body: string;
  line: string;
  inv: string;
  invInk: string;
  /** Buttons/links carrying white text (#2563EB passes 4.5:1). */
  primary: string;
  primarySoft: string;
  primaryText: string;
  danger: string;
  dangerSoft: string;
  ok: string;
  okSoft: string;
  warn: string;
  warnSoft: string;
  shadow: string;
  mapRing: string;
};

export const light: Palette = {
  bg: '#F5F7FB',
  card: '#FFFFFF',
  soft: '#EEF2F8',
  ink: '#0F1F3D',
  muted: '#55627A',
  body: '#33415C',
  line: '#E2E7F0',
  inv: '#0F1F3D',
  invInk: '#FFFFFF',
  primary: '#2563EB',
  primarySoft: '#E3EEFF',
  primaryText: '#1D4ED8',
  danger: '#C42B2F',
  dangerSoft: '#FDE8E8',
  ok: '#2F7A2A',
  okSoft: '#E2F4DF',
  warn: '#8A6100',
  warnSoft: '#FFF3CC',
  shadow: 'rgba(15,31,61,0.10)',
  mapRing: 'rgba(37,99,235,0.10)',
};

export const dark: Palette = {
  bg: '#0A1428',
  card: '#14213D',
  soft: '#1C2B4A',
  ink: '#F2F5FA',
  muted: '#A7B2C7',
  body: '#C9D3E6',
  line: '#263757',
  inv: '#F2F5FA',
  invInk: '#0F1F3D',
  primary: '#2563EB',
  primarySoft: '#16294F',
  primaryText: '#93C5FD',
  danger: '#FF8A8A',
  dangerSoft: '#3A1A1C',
  ok: '#94DB8C',
  okSoft: '#1C3320',
  warn: '#F5D06B',
  warnSoft: '#3A3010',
  shadow: 'rgba(0,0,0,0.45)',
  mapRing: 'rgba(59,130,246,0.16)',
};

export const radius = { sm: 12, md: 16, lg: 22, xl: 28, pill: 999 } as const;
export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28 } as const;
