import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { getPref, setPref } from '@/lib/storage';
import { strings, type Lang, type Strings } from './strings';

type I18nCtx = { lang: Lang; t: Strings; setLang: (l: Lang) => void; ready: boolean };

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('el');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getPref<Lang>('lang', 'el').then((l) => {
      setLangState(l === 'en' ? 'en' : 'el');
      setReady(true);
    });
  }, []);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      t: strings[lang],
      ready,
      setLang: (l) => {
        setLangState(l);
        setPref('lang', l);
      },
    }),
    [lang, ready]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n must be used inside I18nProvider');
  return v;
}
