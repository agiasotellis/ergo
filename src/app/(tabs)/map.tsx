import { Camera, GeoJSONSource, Layer, Map as MapLibreMap, Marker, NativeUserLocation, type CameraRef, type MapRef } from '@maplibre/maplibre-react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CategoryTile } from '@/components/CategoryTile';
import { FilterButton, FilterSheet } from '@/components/FilterSheet';
import { Icon } from '@/components/Icon';
import { Avatar, Button, IconButton, Txt } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { useAuth } from '@/lib/auth';
import { nearbyJobs, startConversation } from '@/lib/api';
import { categoryColors } from '@/lib/categories';
import { euro, km, when } from '@/lib/format';
import { RADIUS_OPTIONS, applyFilters, useFilters } from '@/lib/filters';
import { useLocation } from '@/lib/location';
import { bboxAround, circlePolygon, useMapStyle } from '@/lib/mapStyle';
import type { NearbyJob } from '@/lib/types';
import { openProfile } from '@/lib/nav';
import { useTheme } from '@/theme/ThemeProvider';
import { DUR, EASE_OUT } from '@/theme/motion';

// The whole world is available (zoom 1 ≈ all continents); ergo isn't limited to Greece.
const MIN_ZOOM = 1;
const MAX_PINS = 100;
const MAX_ZOOM = 19;

/** Price pin drawn as a native view on the map. */
const PricePin = memo(function PricePin({ job, selected, onPress }: { job: NearbyJob; selected: boolean; onPress: () => void }) {
  const { c, isDark } = useTheme();
  const { lang } = useI18n();
  const col = categoryColors(job.category, isDark);

  return (
    <Marker id={`job-${job.id}`} lngLat={[job.lng, job.lat]} anchor="bottom" onPress={onPress}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${job.title}, ${euro(job.budget, lang)}`}
        onPress={onPress}
        style={{ alignItems: 'center', zIndex: selected ? 10 : 1 }}
      >
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
            elevation: 3,
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
      </Pressable>
    </Marker>
  );
});

export default function MapScreen() {
  const { c, isDark } = useTheme();
  const { t, lang } = useI18n();
  const loc = useLocation();
  const { userId } = useAuth();
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapRef>(null);
  const cameraRef = useRef<CameraRef>(null);
  const mapStyle = useMapStyle(isDark, lang);
  // Distance and the other filters are shared with Home (see lib/filters).
  const { filters, setFilters, setRadius, active } = useFilters();
  const radius = filters.radius;
  const [filterSheet, setFilterSheet] = useState(false);
  // null = follow the device location; set when the user searches another area.
  const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null);
  const center = searchCenter ?? { lat: loc.lat, lng: loc.lng };
  const [jobs, setJobs] = useState<NearbyJob[]>([]);
  const [selected, setSelected] = useState<NearbyJob | null>(null);
  const [moved, setMoved] = useState<{ lat: number; lng: number } | null>(null);
  // A pin tap also reaches the map's own onPress; remember it so the card isn't closed again.
  const pinTapped = useRef(false);
  const openPin = (j: NearbyJob) => {
    pinTapped.current = true;
    setTimeout(() => {
      pinTapped.current = false;
    }, 400);
    setSelected(j);
    cameraRef.current?.easeTo({ center: [j.lng, j.lat], duration: 350, easing: 'ease', padding: { ...padding, bottom: 330 } });
  };

  useEffect(() => {
    let alive = true;
    nearbyJobs(center.lat, center.lng, radius)
      .then((list) => {
        if (!alive) return;
        setJobs(list);
        setSelected((s) => (s && list.find((j) => j.id === s.id)) || null);
      })
      .catch(() => alive && setJobs([]));
    return () => {
      alive = false;
    };
  }, [center.lat, center.lng, radius]);

  const padding = { top: insets.top + 130, right: 24, bottom: selected ? 280 : 130, left: 24 };

  const fit = (lat: number, lng: number, r: number) => {
    cameraRef.current?.fitBounds(bboxAround(lat, lng, r * 1.1), { padding, duration: 450, easing: 'ease' });
  };

  // Follow the device position once it is known (unless the user is browsing elsewhere).
  useEffect(() => {
    if (!searchCenter) fit(loc.lat, loc.lng, radius);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc.lat, loc.lng]);

  // Pins follow the same price / date / sort filters as the Home list.
  const pins = useMemo(() => applyFilters(jobs, filters), [jobs, filters]);
  // Each pin is a native view; drawing hundreds makes panning stutter, so show the nearest 100.
  const drawn = useMemo(() => (pins.length > MAX_PINS ? [...pins].sort((a, b) => a.distance_km - b.distance_km).slice(0, MAX_PINS) : pins), [pins]);

  // Zoom to the circle whenever the distance changes (chips here or the filters sheet).
  const firstRadius = useRef(true);
  useEffect(() => {
    if (firstRadius.current) {
      firstRadius.current = false;
      return;
    }
    fit(center.lat, center.lng, radius);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radius]);

  const ring = useMemo(() => circlePolygon(center.lat, center.lng, radius), [center.lat, center.lng, radius]);

  const pickRadius = (r: number) => setRadius(r);

  const recenter = async () => {
    setMoved(null);
    setSearchCenter(null);
    await loc.refresh();
    fit(loc.lat, loc.lng, radius);
  };

  const openChat = async (j: NearbyJob) => {
    try {
      const convId = await startConversation(j.id, j.poster_id);
      router.push(`/chat/${convId}`);
    } catch {
      Alert.alert('ergo', t.common.error);
    }
  };

  const searchHere = () => {
    if (!moved) return;
    setSearchCenter(moved);
    setMoved(null);
  };

  const zoom = async (dir: 1 | -1) => {
    const z = await mapRef.current?.getZoom();
    if (z != null) cameraRef.current?.zoomTo(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + dir)), { duration: 250, easing: 'ease' });
  };

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <MapLibreMap
        ref={mapRef}
        style={{ flex: 1 }}
        mapStyle={mapStyle}
        // Full gesture support: pan, pinch to zoom, double-tap zoom, two-finger rotate.
        dragPan
        touchZoom
        doubleTapZoom
        doubleTapHoldZoom
        touchRotate
        touchPitch={false}
        compass
        compassHiddenFacingNorth
        compassPosition={{ top: insets.top + 130, left: 16 }}
        logo={false}
        attribution
        attributionPosition={{ bottom: 104 + Math.max(insets.bottom, 12), left: 20 }}
        onPress={() => {
          if (!pinTapped.current) setSelected(null);
        }}
        onRegionDidChange={(e) => {
          const { center: cc, userInteraction } = e.nativeEvent;
          if (userInteraction) setMoved({ lat: cc[1], lng: cc[0] });
        }}
      >
        <Camera
          ref={cameraRef}
          initialViewState={{ bounds: bboxAround(loc.lat, loc.lng, radius * 1.1), padding }}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
        />
        <GeoJSONSource id="search-ring" data={ring}>
          <Layer id="search-ring-fill" type="fill" paint={{ 'fill-color': c.primary, 'fill-opacity': isDark ? 0.14 : 0.08 }} />
          <Layer id="search-ring-line" type="line" paint={{ 'line-color': c.primary, 'line-width': 1.5, 'line-opacity': 0.8 }} />
        </GeoJSONSource>
        {loc.granted && <NativeUserLocation />}
        {drawn.map((j) => (
          <PricePin key={j.id} job={j} selected={selected?.id === j.id} onPress={() => openPin(j)} />
        ))}
      </MapLibreMap>

      {/* Top controls */}
      <Animated.View entering={FadeInDown.duration(400)} style={{ position: 'absolute', top: insets.top + 12, left: 16, right: 16, gap: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ flex: 1, height: 52, borderRadius: 18, backgroundColor: c.card, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16 }}>
            <Icon name="pin" color={c.primaryText} size={18} strokeWidth={2.2} />
            <Txt size={15} weight="700" numberOfLines={1} style={{ flex: 1 }}>
              {loc.area ?? t.map.unknownArea}
            </Txt>
            <View style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, backgroundColor: c.inv }}>
              <Txt size={12} weight="700" color={c.invInk}>
                {t.map.nearby(pins.length)}
              </Txt>
            </View>
          </View>
          <FilterButton count={active} onPress={() => setFilterSheet(true)} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, alignSelf: 'flex-start', maxWidth: '100%', borderRadius: 18, backgroundColor: c.card }}
          contentContainerStyle={{ padding: 4, gap: 2 }}
          accessibilityRole="radiogroup"
          accessibilityLabel={t.map.radius}
        >
          {RADIUS_OPTIONS.map((r) => {
            const on = r === radius;
            return (
              <Pressable
                key={r}
                accessibilityRole="radio"
                accessibilityState={{ checked: on }}
                onPress={() => pickRadius(r)}
                style={{ height: 40, minWidth: 52, paddingHorizontal: 10, borderRadius: 14, backgroundColor: on ? c.primary : 'transparent', alignItems: 'center', justifyContent: 'center' }}
              >
                <Txt size={13} weight="700" color={on ? '#FFFFFF' : c.ink}>
                  {lang === 'el' ? `${r} χλμ.` : `${r} km`}
                </Txt>
              </Pressable>
            );
          })}
        </ScrollView>
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

      {/* Selected task card: summary, poster, and quick actions */}
      {selected && (
        <Animated.View
          key={selected.id}
          entering={SlideInDown.duration(DUR.base).easing(EASE_OUT)}
          style={{ position: 'absolute', left: 12, right: 12, bottom: 96 + Math.max(insets.bottom, 12), backgroundColor: c.card, borderRadius: 28, padding: 16, gap: 12, elevation: 12, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 16, shadowOffset: { width: 0, height: 6 } }}
        >
          <Pressable accessibilityRole="button" accessibilityLabel={t.map.details} onPress={() => router.push(`/task/${selected.id}`)} style={{ flexDirection: 'row', gap: 12 }}>
            {selected.photos[0] ? (
              <Image source={{ uri: selected.photos[0] }} style={{ width: 64, height: 64, borderRadius: 18, backgroundColor: c.soft }} contentFit="cover" />
            ) : (
              <CategoryTile cat={selected.category} size={64} />
            )}
            <View style={{ flex: 1, gap: 2 }}>
              <Txt size={12} weight="700" color={categoryColors(selected.category, isDark).ink} numberOfLines={1}>
                {t.categories[selected.category]}
              </Txt>
              <Txt size={17} weight="800" numberOfLines={2}>
                {selected.title}
              </Txt>
              <Txt size={13} muted numberOfLines={1}>
                {[`${km(selected.distance_km, lang)} ${t.common.away}`, when(selected.scheduled_at, lang, t.task.flexible)].join(' · ')}
              </Txt>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 6 }}>
              <Txt size={22} weight="900" numberOfLines={1}>
                {euro(selected.budget, lang)}
              </Txt>
              <IconButton name="close" label={t.common.cancel} size={32} bg={c.soft} onPress={() => setSelected(null)} />
            </View>
          </Pressable>
          {!!selected.description && (
            <Txt size={14} color={c.body} numberOfLines={3}>
              {selected.description}
            </Txt>
          )}
          <Pressable accessibilityRole="button" onPress={() => openProfile(selected.poster_id, userId)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Avatar name={selected.poster_name} url={selected.poster_avatar} size={32} />
            <Txt size={14} weight="700" numberOfLines={1} style={{ flex: 1 }}>
              {selected.poster_id === userId ? t.common.you : selected.poster_name || '—'}
            </Txt>
            {selected.poster_id !== userId && <Icon name="chevron" color={c.muted} size={16} />}
          </Pressable>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {selected.poster_id !== userId && (
              <IconButton name="chat" label={t.task.message} bg={c.primarySoft} color={c.primaryText} size={46} onPress={() => openChat(selected)} />
            )}
            <Button title={t.map.details} variant="secondary" size="md" style={{ flex: 1 }} onPress={() => router.push(`/task/${selected.id}`)} />
            {selected.poster_id !== userId && (
              <Button title={t.map.offer} size="md" style={{ flex: 1.2 }} onPress={() => router.push(`/task/${selected.id}?offer=1`)} />
            )}
          </View>
        </Animated.View>
      )}
      <FilterSheet visible={filterSheet} value={filters} jobs={jobs} onClose={() => setFilterSheet(false)} onApply={setFilters} />
    </View>
  );
}
