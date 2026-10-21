import type { CategoryKey } from './types';

/** Stroke icon paths (24×24) and tile colours [light bg, light ink, dark bg, dark ink]. */
export const CATEGORIES: { key: CategoryKey; icon: string; colors: [string, string, string, string] }[] = [
  { key: 'home', icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a2 2 0 0 0 3 3l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.8-.4-.4-2.8z', colors: ['#FFE9DC', '#B4461A', '#3A2418', '#FFB089'] },
  { key: 'cleaning', icon: 'M9 3h5v3H9zM14 4h3M8.5 6h6l1.5 4v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10zM10 14h4M20 3.5v.01M21.5 6.5v.01M20 9.5v.01', colors: ['#DDF3F6', '#0E7383', '#12333A', '#7FDCEA'] },
  { key: 'moving', icon: 'M2 6h12v10H2zM14 9h4l3 4v3h-7M6 18.5a1.5 1.5 0 1 0 0-.01M17 18.5a1.5 1.5 0 1 0 0-.01', colors: ['#E3EEFF', '#1D4ED8', '#16294F', '#93C5FD'] },
  { key: 'pets', icon: 'M12 12.5c-3 0-6 3.5-6 6a2.4 2.4 0 0 0 3 2.3c1-.3 2-.6 3-.6s2 .3 3 .6a2.4 2.4 0 0 0 3-2.3c0-2.5-3-6-6-6zM3.6 10a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0M7.6 5.6a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0M13 5.6a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0M17 10a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0', colors: ['#FDE7F0', '#B0306A', '#3A1A2A', '#FF9CC6'] },
  { key: 'garden', icon: 'M12 21v-9M12 12C12 8 9 5.5 4.5 5.5 4.5 10 7.5 12 12 12zM12 10.5c0-3.5 2.5-6 7-6 0 4-2.7 6-7 6zM7 21h10', colors: ['#E2F4DF', '#2F7A2A', '#1C3320', '#94DB8C'] },
  { key: 'errands', icon: 'M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2', colors: ['#F1E8FF', '#6B35C9', '#2C1F47', '#C9A7FF'] },
  { key: 'tech', icon: 'M4 5h16v11H4zM2 20h20', colors: ['#E6F0FF', '#1F5FBF', '#172A47', '#8DB8FF'] },
  { key: 'events', icon: 'M12 3a5.5 5.5 0 0 1 5.5 5.5c0 3.6-3 6.5-5.5 6.5s-5.5-2.9-5.5-6.5A5.5 5.5 0 0 1 12 3zM11 15h2l-1 1.5zM12 16.5c0 1.5 1.5 2 1.5 3s-1 1.5-1.5 1.5', colors: ['#FFEFD6', '#9A5A00', '#3A2A10', '#FFC266'] },
  { key: 'lessons', icon: 'M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z', colors: ['#FFF3CC', '#8A6100', '#3A3010', '#F5D06B'] },
];

export function category(key: string) {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}

export function categoryColors(key: string, isDark: boolean) {
  const c = category(key).colors;
  return isDark ? { bg: c[2], ink: c[3] } : { bg: c[0], ink: c[1] };
}
