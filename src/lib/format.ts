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

export function ago(iso: string, lang: Lang): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(lang === 'el' ? 'el' : 'en', { numeric: 'auto' });
  if (diff < 60) return rtf.format(0, 'second');
  if (diff < 3600) return rtf.format(-Math.round(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.round(diff / 3600), 'hour');
  if (diff < 86400 * 30) return rtf.format(-Math.round(diff / 86400), 'day');
  return rtf.format(-Math.round(diff / (86400 * 30)), 'month');
}

export function initials(name: string | null | undefined): string {
  const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
}
