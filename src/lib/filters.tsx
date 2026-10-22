import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { getPref, setPref } from './storage';
import type { NearbyJob } from './types';

export type SortKey = 'near' | 'new' | 'priceAsc' | 'priceDesc' | 'soon';
export type WhenFilter = 'any' | 'today' | 'tomorrow' | 'week' | 'flexible';
export type Filters = { sort: SortKey; radius: number; min: number | null; max: number | null; when: WhenFilter };

export const RADIUS_OPTIONS = [1, 3, 5, 10, 25, 50];
export const DEFAULT_FILTERS: Filters = { sort: 'near', radius: 10, min: null, max: null, when: 'any' };

/** Number of filters that differ from the defaults (shown as a badge). */
export function activeFilterCount(f: Filters) {
  return (
    Number(f.sort !== DEFAULT_FILTERS.sort) +
    Number(f.radius !== DEFAULT_FILTERS.radius) +
    Number(f.min != null || f.max != null) +
    Number(f.when !== DEFAULT_FILTERS.when)
  );
}

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

function matchesWhen(iso: string | null, when: WhenFilter, now: Date) {
  if (when === 'any') return true;
  if (when === 'flexible') return !iso;
  if (!iso) return false;
  const day = startOfDay(new Date(iso)).getTime();
  const today = startOfDay(now).getTime();
  const DAY = 24 * 3600 * 1000;
  if (when === 'today') return day === today;
  if (when === 'tomorrow') return day === today + DAY;
  return day >= today && day < today + 7 * DAY; // week: the next 7 days
}

/** Filters and sorts the nearby list on the phone (the server already limits it by distance and category). */
export function applyFilters(jobs: NearbyJob[], f: Filters, now = new Date()): NearbyJob[] {
  const out = jobs.filter((j) => {
    const price = Number(j.budget ?? 0);
    if (f.min != null && price < f.min) return false;
    if (f.max != null && price > f.max) return false;
    if (j.distance_km > f.radius) return false;
    return matchesWhen(j.scheduled_at, f.when, now);
  });
  const by: Record<SortKey, (a: NearbyJob, b: NearbyJob) => number> = {
    near: (a, b) => a.distance_km - b.distance_km,
    new: (a, b) => b.created_at.localeCompare(a.created_at),
    priceAsc: (a, b) => Number(a.budget ?? 0) - Number(b.budget ?? 0),
    priceDesc: (a, b) => Number(b.budget ?? 0) - Number(a.budget ?? 0),
    // Dated tasks first (earliest first), flexible ones last.
    soon: (a, b) => (a.scheduled_at ?? '9999').localeCompare(b.scheduled_at ?? '9999'),
  };
  return out.sort(by[f.sort]);
}

type Ctx = { filters: Filters; setFilters: (f: Filters) => void; setRadius: (r: number) => void; reset: () => void; active: number };
const FiltersCtx = createContext<Ctx | null>(null);

/** Shared by Home and Map so both always show the same tasks; remembered between launches. */
export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setState] = useState<Filters>(DEFAULT_FILTERS);

  useEffect(() => {
    getPref<Filters>('filters', DEFAULT_FILTERS).then((f) => setState({ ...DEFAULT_FILTERS, ...f }));
  }, []);

  const setFilters = useCallback((f: Filters) => {
    setState(f);
    setPref('filters', f);
  }, []);
  const setRadius = useCallback((r: number) => setFilters({ ...filters, radius: r }), [filters, setFilters]);
  const reset = useCallback(() => setFilters(DEFAULT_FILTERS), [setFilters]);

  const value = useMemo(() => ({ filters, setFilters, setRadius, reset, active: activeFilterCount(filters) }), [filters, setFilters, setRadius, reset]);
  return <FiltersCtx.Provider value={value}>{children}</FiltersCtx.Provider>;
}

export function useFilters() {
  const v = useContext(FiltersCtx);
  if (!v) throw new Error('useFilters outside FiltersProvider');
  return v;
}
