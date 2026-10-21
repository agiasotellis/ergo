import type { CategoryKey } from './types';

/** Stroke icon paths (24×24) and tile colours [light bg, light ink, dark bg, dark ink]. */
export const CATEGORIES: { key: CategoryKey; icon: string; colors: [string, string, string, string] }[] = [
  { key: 'home', icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a2 2 0 0 0 3 3l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.8-.4-.4-2.8z', colors: ['#FFE9DC', '#B4461A', '#3A2418', '#FFB089'] },
  { key: 'cleaning', icon: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6', colors: ['#DDF3F6', '#0E7383', '#12333A', '#7FDCEA'] },
  { key: 'moving', icon: 'M3 6h11v10H3zM14 9h4l3 4v3h-7zM6.5 19h.01M17.5 19h.01', colors: ['#E3EEFF', '#1D4ED8', '#16294F', '#93C5FD'] },
  { key: 'pets', icon: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z', colors: ['#FDE7F0', '#B0306A', '#3A1A2A', '#FF9CC6'] },
  { key: 'garden', icon: 'M5 20c0-9 6-15 15-15 0 9-6 15-15 15zM5 20l8-8', colors: ['#E2F4DF', '#2F7A2A', '#1C3320', '#94DB8C'] },
  { key: 'errands', icon: 'M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2', colors: ['#F1E8FF', '#6B35C9', '#2C1F47', '#C9A7FF'] },
  { key: 'tech', icon: 'M4 5h16v11H4zM2 20h20', colors: ['#E6F0FF', '#1F5FBF', '#172A47', '#8DB8FF'] },
  { key: 'events', icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z', colors: ['#FFEFD6', '#9A5A00', '#3A2A10', '#FFC266'] },
  { key: 'lessons', icon: 'M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z', colors: ['#FFF3CC', '#8A6100', '#3A3010', '#F5D06B'] },
];

export function category(key: string) {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}

export function categoryColors(key: string, isDark: boolean) {
  const c = category(key).colors;
  return isDark ? { bg: c[2], ink: c[3] } : { bg: c[0], ink: c[1] };
}
