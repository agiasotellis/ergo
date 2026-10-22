import { Easing } from 'react-native-reanimated';

/**
 * One motion style for the whole app: smooth ease-out, no bounce or overshoot.
 * Use these instead of springs so animations feel calm and consistent.
 */
export const EASE_OUT = Easing.bezier(0.22, 1, 0.36, 1);
export const DUR = { fast: 180, base: 260, slow: 380 } as const;
/** Timing config for withTiming(). */
export const smooth = (duration: number = DUR.base) => ({ duration, easing: EASE_OUT });
