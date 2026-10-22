import * as Location from 'expo-location';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

/** Syntagma, Athens: used until (or unless) we get the device location. */
/** Default map centre until the device location is known. */
export const ATHENS = { lat: 37.9755, lng: 23.7348 };


type Loc = { lat: number; lng: number; area: string | null; granted: boolean; loading: boolean; refresh: () => Promise<void> };

const Ctx = createContext<Loc | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [pos, setPos] = useState(ATHENS);
  const [area, setArea] = useState<string | null>(null);
  const [granted, setGranted] = useState(false);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const perm = await Location.requestForegroundPermissionsAsync();
      if (perm.status !== 'granted') {
        setGranted(false);
        return;
      }
      setGranted(true);
      const last = await Location.getLastKnownPositionAsync();
      if (last) setPos({ lat: last.coords.latitude, lng: last.coords.longitude });
      const cur = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      const p = { lat: cur.coords.latitude, lng: cur.coords.longitude };
      setPos(p);
      try {
        const [g] = await Location.reverseGeocodeAsync({ latitude: p.lat, longitude: p.lng });
        if (g) setArea([g.district || g.subregion, g.city].filter(Boolean).join(', ') || g.city || g.region || null);
      } catch {
        // Reverse geocoding is best-effort.
      }
    } catch {
      // Keep the fallback position.
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(() => ({ ...pos, area, granted, loading, refresh }), [pos, area, granted, loading, refresh]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocation() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLocation must be used inside LocationProvider');
  return v;
}
