import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useI18n } from '@/i18n/I18nProvider';
import { euro, km, when } from '@/lib/format';
import type { NearbyJob } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';
import { CategoryTile } from './CategoryTile';
import { Icon } from './Icon';
import { Card, Txt } from './ui';

export function TaskCard({ job, index = 0, onPress }: { job: NearbyJob; index?: number; onPress: () => void }) {
  const { c } = useTheme();
  const { t, lang } = useI18n();
  return (
    <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 50).springify().damping(18)}>
      <Card onPress={onPress} style={{ flexDirection: 'row', gap: 14, padding: 14 }}>
        <CategoryTile cat={job.category} />
        <View style={{ flex: 1, gap: 4 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
            <Txt size={15} weight="700" style={{ flex: 1 }} numberOfLines={2}>
              {job.title}
            </Txt>
            <Txt size={17} weight="800">
              {euro(job.budget, lang)}
            </Txt>
          </View>
          <Txt size={13} muted numberOfLines={1}>
            {job.poster_name || t.categories[job.category]}
          </Txt>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 4 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Icon name="pin" size={13} color={c.muted} strokeWidth={2.4} />
              <Txt size={12} weight="600" muted>
                {km(job.distance_km, lang)}
              </Txt>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, flexShrink: 1 }}>
              <Icon name="clock" size={13} color={c.muted} strokeWidth={2.4} />
              <Txt size={12} weight="600" muted numberOfLines={1}>
                {when(job.scheduled_at, lang, t.task.flexible)}
              </Txt>
            </View>
          </View>
        </View>
      </Card>
    </Animated.View>
  );
}
