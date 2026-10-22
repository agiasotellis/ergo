import type { StyleSpecification } from '@maplibre/maplibre-react-native';
import { useEffect, useState } from 'react';

import type { Lang } from '@/i18n/strings';

/**
 * Free OpenStreetMap vector maps from OpenFreeMap (no API key, no usage limits,
 * commercial use allowed). Attribution to OpenFreeMap / OpenMapTiles / OpenStreetMap
 * is shown by the map's attribution button.
 */
const STYLE_URL = {
  light: 'https://tiles.openfreemap.org/styles/positron',
  dark: 'https://tiles.openfreemap.org/styles/dark',
} as const;

const cache = new Map<string, StyleSpecification>();

/** Labels in the app language, falling back to the Latin name and then the local name. */
function localise(style: StyleSpecification, lang: Lang): StyleSpecification {
  const name = ['coalesce', ['get', `name:${lang}`], ['get', 'name:latin'], ['get', 'name']];
  return {
    ...style,
    layers: style.layers.map((layer) => {
      if (layer.type !== 'symbol' || !layer.layout?.['text-field']) return layer;
      // Keep non-name labels (house numbers, road shields) untouched.
      const tf = JSON.stringify(layer.layout['text-field']);
      if (!tf.includes('name')) return layer;
      return { ...layer, layout: { ...layer.layout, 'text-field': name as never } };
    }),
  };
}

/**
 * Returns the style to give `<Map mapStyle>`: the plain URL while the localised JSON
 * loads (so the map appears immediately), then the localised style.
 */
export function useMapStyle(isDark: boolean, lang: Lang): string | StyleSpecification {
  const url = STYLE_URL[isDark ? 'dark' : 'light'];
  const key = `${url}|${lang}`;
  const [style, setStyle] = useState<StyleSpecification | null>(cache.get(key) ?? null);

  useEffect(() => {
    const hit = cache.get(key);
    if (hit) {
      setStyle(hit);
      return;
    }
    let alive = true;
    setStyle(null);
    fetch(url)
      .then((r) => r.json())
      .then((json: StyleSpecification) => {
        const s = localise(json, lang);
        cache.set(key, s);
        if (alive) setStyle(s);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [key, url, lang]);

  return style ?? url;
}

/** Bounding box [w, s, e, n] around a point with a radius in km. */
export function bboxAround(lat: number, lng: number, radiusKm: number): [number, number, number, number] {
  const dLat = radiusKm / 111.32;
  const dLng = radiusKm / (111.32 * Math.cos((lat * Math.PI) / 180));
  return [lng - dLng, lat - dLat, lng + dLng, lat + dLat];
}

/** GeoJSON polygon approximating a circle on the ground. */
export function circlePolygon(lat: number, lng: number, radiusKm: number, steps = 72): GeoJSON.Feature<GeoJSON.Polygon> {
  const ring: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * 2 * Math.PI;
    const dLat = (radiusKm / 111.32) * Math.sin(a);
    const dLng = (radiusKm / (111.32 * Math.cos((lat * Math.PI) / 180))) * Math.cos(a);
    ring.push([lng + dLng, lat + dLat]);
  }
  return { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [ring] } };
}
