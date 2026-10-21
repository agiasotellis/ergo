import Constants from 'expo-constants';
import { View, type StyleProp, type ViewStyle } from 'react-native';

import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/theme/ThemeProvider';
import { Icon } from './Icon';
import { Txt } from './ui';

/** True when the build includes a Google Maps API key (see app.config.ts `extra.mapsEnabled`). */
export const mapsEnabled = !!(Constants.expoConfig?.extra as { mapsEnabled?: boolean } | undefined)?.mapsEnabled;

/** Shown instead of a MapView when the build has no Google Maps key. */
export function MapUnavailable({ style, compact }: { style?: StyleProp<ViewStyle>; compact?: boolean }) {
  const { c } = useTheme();
  const { t } = useI18n();
  return (
    <View style={[{ flex: 1, backgroundColor: c.soft, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 10 }, style]}>
      <Icon name="map" color={c.muted} size={compact ? 26 : 40} />
      {!compact && (
        <Txt muted center style={{ maxWidth: 280 }}>
          {t.map.unavailable}
        </Txt>
      )}
    </View>
  );
}
