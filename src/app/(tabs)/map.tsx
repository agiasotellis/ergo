import { router } from 'expo-router';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE, type Region } from 'react-native-maps';
import Animated, { FadeIn, FadeInDown, SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { Icon } from '@/components/Icon';
import { MapUnavailable, mapsEnabled } from '@/components/MapUnavailable';
import { Button, IconButton, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { nearbyJobs } from '@/lib/api';
import { categoryColors } from '@/lib/categories';
import { euro, km } from '@/lib/format';
import { GREECE, useLocation } from '@/lib/location';
import { darkMapStyle, lightMapStyle } from '@/lib/mapStyle';
import type { NearbyJob } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

const RADII = [1, 3, 5, 10, 25];

function deltaFor(radiusKm: number) {
  // Fit the search circle with some margin; 1° latitude ≈ 111 km.
  return (radiusKm * 2.6) / 111;
}

/** Price pin. `tracksViewChanges` is turned off after the first paint for smooth panning. */
const PricePin = memo(function PricePin({ job, selected, onPress }: { job: NearbyJob; selected: boolean; onPress: () => void }) {
  const { c, isDark } = useTheme();
  const { lang } = useI18n();
  // Re-render the native marker bitmap briefly whenever the selection changes.
  const [settledFor, setSettledFor] = useState<boolean | null>(null);
  const track = settledFor !== selected;
  const col = categoryColors(job.category, isDark);

  useEffect(() => {
    const id = setTimeout(() => setSettledFor(selected), 400);
    return () => clearTimeout(id);
  }, [selected]);

  return (
    <Marker
      coordinate={{ latitude: job.lat, longitude: job.lng }}
      onPress={onPress}
      tracksViewChanges={track}
      anchor={{ x: 0.5, y: 1 }}
      zIndex={selected ? 10 : 1}
      accessibilityLabel={`${job.title}, ${euro(job.budget, lang)}`}
    >
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            height: selected ? 40 : 36,
            paddingLeft: 5,
            paddingRight: 12,
            borderRadius: 20,
            backgroundColor: selected ? c.inv : c.card,
            borderWidth: 1,
            borderColor: selected ? c.inv : c.line,
          }}
        >
          <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: col.bg, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: col.ink }} />
          </View>
          <Txt size={14} weight="800" color={selected ? c.invInk : c.ink}>
            {euro(job.budget, lang)}
          </Txt>
        </View>
        <View style={{ width: 10, height: 10, marginTop: -5, backgroundColor: selected ? c.inv : c.card, transform: [{ rotate: '45deg' }] }} />
      </View>
    </Marker>
  );
});

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  if (!mapsEnabled) return <MapUnavailable style={{ paddingTop: insets.top, paddingBottom: 120 }} />;
  return <GoogleMapScreen />;
}

function GoogleMapScreen() {
  const { c, isDark } = useTheme();
  const { t, lang } = useI18n();
  const loc = useLocation();
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);
  const [radius, setRadius] = useState(5);
  // null = follow the device location; set when the user searches another area.
  const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null);
  const center = searchCenter ?? { lat: loc.lat, lng: loc.lng };
  const [jobs, setJobs] = useState<NearbyJob[]>([]);
  const [selected, setSelected] = useState<NearbyJob | null>(null);
  const [moved, setMoved] = useState<Region | null>(null);

  const load = useCallback(async () => {
    try {
      const list = await nearbyJobs(center.lat, center.lng, radius);
      setJobs(list);
      setSelected((s) => (s && list.find((j) => j.id === s.id)) || null);
    } catch {
      setJobs([]);
    }
  }, [center.lat, center.lng, radius]);

  useEffect(() => {
    load();
  }, [load]);

  const fit = useCallback(
    (lat: number, lng: number, r: number) => {
      mapRef.current?.animateToRegion({ latitude: lat, longitude: lng, latitudeDelta: deltaFor(r), longitudeDelta: deltaFor(r) }, 450);
    },
    []
  );

  const pickRadius = (r: number) => {
    setRadius(r);
    fit(center.lat, center.lng, r);
  };

  const recenter = async () => {
    setMoved(null);
    setSearchCenter(null);
    await loc.refresh();
    fit(loc.lat, loc.lng, radius);
  };

  const searchHere = () => {
    if (!moved) return;
    setSearchCenter({ lat: moved.latitude, lng: moved.longitude });
    setMoved(null);
  };

  const zoom = async (dir: 1 | -1) => {
    const cam = await mapRef.current?.getCamera();
    if (cam?.zoom != null) mapRef.current?.animateCamera({ zoom: Math.min(20, Math.max(5, cam.zoom + dir)) }, { duration: 250 });
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{ latitude: loc.lat, longitude: loc.lng, latitudeDelta: deltaFor(radius), longitudeDelta: deltaFor(radius) }}
        customMapStyle={isDark ? darkMapStyle : lightMapStyle}
        // Full gesture support: pinch to zoom, two-finger rotate and tilt, pan.
        zoomEnabled
        zoomTapEnabled
        scrollEnabled
        rotateEnabled
        pitchEnabled
        scrollDuringRotateOrZoomEnabled
        minZoomLevel={5.5}
        maxZoomLevel={19}
        showsUserLocation={loc.granted}
        showsMyLocationButton={false}
        showsCompass
        toolbarEnabled={false}
        moveOnMarkerPress={false}
        mapPadding={{ top: insets.top + 120, right: 0, bottom: selected ? 260 : 120, left: 0 }}
        onMapReady={() => mapRef.current?.setMapBoundaries(GREECE.northEast, GREECE.southWest)}
        onPress={(e) => {
          if (e.nativeEvent.action !== 'marker-press') setSelected(null);
        }}
        onRegionChangeComplete={(r, details) => {
          if (details?.isGesture) setMoved(r);
        }}
      >
        <Circle
          center={{ latitude: center.lat, longitude: center.lng }}
          radius={radius * 1000}
          strokeColor={c.primary}
          strokeWidth={1.5}
          fillColor={c.mapRing}
        />
        {jobs.map((j) => (
          <PricePin key={j.id} job={j} selected={selected?.id === j.id} onPress={() => setSelected(j)} />
        ))}
      </MapView>

      {/* Top controls */}
      <Animated.View entering={FadeInDown.duration(400)} style={{ position: 'absolute', top: insets.top + 12, left: 16, right: 16, gap: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ flex: 1, height: 52, borderRadius: 18, backgroundColor: c.card, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16 }}>
            <Icon name="pin" color={c.primaryText} size={18} strokeWidth={2.2} />
            <Txt size={15} weight="700" numberOfLines={1} style={{ flex: 1 }}>
              {loc.area ?? 'Ελλάδα'}
            </Txt>
            <View style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, backgroundColor: c.inv }}>
              <Txt size={12} weight="700" color={c.invInk}>
                {t.map.nearby(jobs.length)}
              </Txt>
            </View>
          </View>
        </View>
        <View accessibilityRole="radiogroup" accessibilityLabel={t.map.radius} style={{ flexDirection: 'row', backgroundColor: c.card, borderRadius: 18, padding: 4, gap: 2, alignSelf: 'flex-start' }}>
          {RADII.map((r) => {
            const on = r === radius;
            return (
              <Pressable
                key={r}
                accessibilityRole="radio"
                accessibilityState={{ checked: on }}
                onPress={() => pickRadius(r)}
                style={{ height: 40, minWidth: 56, paddingHorizontal: 10, borderRadius: 14, backgroundColor: on ? c.primary : 'transparent', alignItems: 'center', justifyContent: 'center' }}
              >
                <Txt size={13} weight="700" color={on ? '#FFFFFF' : c.ink}>
                  {lang === 'el' ? `${r} χλμ.` : `${r} km`}
                </Txt>
              </Pressable>
            );
          })}
        </View>
        {moved && (
          <Animated.View entering={FadeIn} style={{ alignSelf: 'center' }}>
            <Button title={t.map.searchHere} size="md" variant="inverse" icon="refresh" onPress={searchHere} />
          </Animated.View>
        )}
      </Animated.View>

      {/* Zoom + locate */}
      <View style={{ position: 'absolute', right: 16, bottom: (selected ? 290 : 120) + insets.bottom, gap: 10 }}>
        <IconButton name="plus" label={t.map.zoomIn} onPress={() => zoom(1)} />
        <IconButton name="minus" label={t.map.zoomOut} onPress={() => zoom(-1)} />
        <IconButton name="locate" label={t.map.myLocation} color={c.primaryText} onPress={recenter} />
      </View>

      {/* Selected task card */}
      {selected && (
        <Animated.View
          key={selected.id}
          entering={SlideInDown.springify().damping(20)}
          style={{ position: 'absolute', left: 16, right: 16, bottom: 100 + Math.max(insets.bottom, 12), backgroundColor: c.card, borderRadius: 28, padding: 16, gap: 14 }}
        >
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <CategoryTile cat={selected.category} size={60} />
            <View style={{ flex: 1, gap: 3 }}>
              <Txt size={12} weight="700" color={categoryColors(selected.category, isDark).ink} style={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {t.categories[selected.category]}
              </Txt>
              <Txt size={17} weight="700" numberOfLines={2}>
                {selected.title}
              </Txt>
              <Txt size={13} muted numberOfLines={1}>
                {[selected.poster_name, `${km(selected.distance_km, lang)} ${t.common.away}`].filter(Boolean).join(' · ')}
              </Txt>
            </View>
            <Txt size={22} weight="800">
              {euro(selected.budget, lang)}
            </Txt>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button title={t.map.details} variant="secondary" size="md" style={{ flex: 1 }} onPress={() => router.push(`/task/${selected.id}`)} />
            <Button title={t.map.offer} size="md" style={{ flex: 1.4 }} onPress={() => router.push(`/task/${selected.id}?offer=1`)} />
          </View>
        </Animated.View>
      )}
    </View>
  );
}
