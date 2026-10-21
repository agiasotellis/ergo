import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';

import { getPref, setPref } from '@/lib/storage';
import { dark, light, type Palette } from './tokens';

export type ThemePref = 'system' | 'light' | 'dark';

type ThemeCtx = { c: Palette; isDark: boolean; pref: ThemePref; setPref: (p: ThemePref) => void };

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const system = useColorScheme();
  const [pref, setPrefState] = useState<ThemePref>('system');

  useEffect(() => {
    getPref<ThemePref>('theme', 'system').then(setPrefState);
  }, []);

  const value = useMemo<ThemeCtx>(() => {
    const isDark = pref === 'dark' || (pref === 'system' && system === 'dark');
    return {
      c: isDark ? dark : light,
      isDark,
      pref,
      setPref: (p) => {
        setPrefState(p);
        setPref('theme', p);
      },
    };
  }, [pref, system]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useTheme must be used inside ThemeProvider');
  return v;
}
