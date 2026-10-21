import { View } from 'react-native';

import { category, categoryColors } from '@/lib/categories';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';

export function CategoryTile({ cat, size = 56 }: { cat: string; size?: number }) {
  const { isDark } = useTheme();
  const col = categoryColors(cat, isDark);
  return (
    <View style={{ width: size, height: size, borderRadius: size * 0.32, backgroundColor: col.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Icon d={category(cat).icon} color={col.ink} size={size * 0.46} />
    </View>
  );
}
