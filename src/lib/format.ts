import type { Lang } from '@/i18n/strings';

export function euro(n: number | null | undefined, lang: Lang): string {
  if (n == null) return '—';
  const v = Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', lang === 'el' ? ',' : '.');
  return lang === 'el' ? `${v} €` : `€${v}`;
}

export function km(d: number | null | undefined, lang: Lang): string {
  if (d == null) return '';
  const v = d < 10 ? d.toFixed(1) : String(Math.round(d));
  return lang === 'el' ? `${v.replace('.', ',')} χλμ.` : `${v} km`;
}

export function rating(r: number | null | undefined, lang: Lang): string {
  if (r == null || Number.isNaN(Number(r))) return '–';
  const v = Number(r).toFixed(1);
  return lang === 'el' ? v.replace('.', ',') : v;
}

export function when(iso: string | null | undefined, lang: Lang, flexible: string): string {
  if (!iso) return flexible;
  const d = new Date(iso);
  const locale = lang === 'el' ? 'el-GR' : 'en-GB';
  return d.toLocaleString(locale, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

/**
 * "πριν από 5 λεπτά" / "5 min ago". Written by hand: Hermes (the app's JS engine on Android)
 * has no Intl.RelativeTimeFormat, and calling it crashes the screen.
 */
export function ago(iso: string, lang: Lang): string {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  const el = lang === 'el';
  const n = (v: number) => Math.max(1, Math.round(v));
  if (s < 60) return el ? 'τώρα' : 'just now';
  if (s < 3600) {
    const m = n(s / 60);
    return el ? `πριν από ${m} ${m === 1 ? 'λεπτό' : 'λεπτά'}` : `${m} min ago`;
  }
  if (s < 86400) {
    const h = n(s / 3600);
    return el ? `πριν από ${h} ${h === 1 ? 'ώρα' : 'ώρες'}` : `${h} ${h === 1 ? 'hour' : 'hours'} ago`;
  }
  const d = n(s / 86400);
  if (d === 1) return el ? 'χθες' : 'yesterday';
  if (d < 7) return el ? `πριν από ${d} ημέρες` : `${d} days ago`;
  const date = new Date(iso);
  const sameYear = date.getFullYear() === new Date().getFullYear();
  return date.toLocaleDateString(el ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'short', ...(sameYear ? {} : { year: 'numeric' }) });
}

export function initials(name: string | null | undefined): string {
  const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
}

/** Average over all of someone's reviews (as helper and as task owner), weighted by count. */
export function overallRating(s: { worker_rating: number | string | null; worker_reviews: number | string; poster_rating: number | string | null; poster_reviews: number | string } | null | undefined) {
  if (!s) return { rating: null as number | null, count: 0 };
  const wn = Number(s.worker_reviews) || 0, pn = Number(s.poster_reviews) || 0;
  const count = wn + pn;
  if (!count) return { rating: null as number | null, count: 0 };
  const sum = (wn ? Number(s.worker_rating) * wn : 0) + (pn ? Number(s.poster_rating) * pn : 0);
  return { rating: sum / count, count };
}
