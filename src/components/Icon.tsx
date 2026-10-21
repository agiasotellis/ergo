import Svg, { Path } from 'react-native-svg';

import { ICONS, type IconName } from './icons';

type Props = { name?: IconName; d?: string; size?: number; color: string; strokeWidth?: number; fill?: string };

export function Icon({ name, d, size = 22, color, strokeWidth = 2, fill = 'none' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <Path
        d={d ?? (name ? ICONS[name] : '')}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
    </Svg>
  );
}
