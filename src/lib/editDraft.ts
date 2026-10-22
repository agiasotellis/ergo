import type { Job } from './types';

/**
 * Hands the task being viewed to the edit screen, so the form fills instantly
 * instead of waiting for (or depending on) a reload.
 */
let draft: Job | null = null;

export function setEditDraft(job: Job) {
  draft = job;
}

export function peekEditDraft(id: string | undefined): Job | null {
  return id && draft?.id === id ? draft : null;
}
