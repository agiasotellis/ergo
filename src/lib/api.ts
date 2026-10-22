import * as ImagePicker from 'expo-image-picker';

import { shrinkPhoto } from './photos';
import { supabase } from './supabase';
import type { AppNotification, Application, ReportReason, ReportTarget, CategoryKey, TaskAlert, Conversation, Job, Message, NearbyJob, Profile, ProfileStats, Review } from './types';

const PERSON = 'id, full_name, avatar_url';
/** Profile columns other users may read (push token / locale are private). */
const PROFILE = 'id, full_name, avatar_url, bio, created_at';
/** Job columns readable by clients; coordinates are rounded to ~100 m server-side. */
const JOB = 'id, poster_id, title, description, category, budget, lat:lat_approx, lng:lng_approx, address, photos, scheduled_at, status, assigned_to, created_at';
/** Used only until the security migration (rounded coordinates) is applied to the database. */
const JOB_LEGACY = 'id, poster_id, title, description, category, budget, lat, lng, address, photos, scheduled_at, status, assigned_to, created_at';
const missingColumn = (e: { code?: string } | null) => e?.code === '42703' || e?.code === 'PGRST204';

function must<T>(res: { data: T | null; error: { message: string } | null }): T {
  if (res.error) throw new Error(res.error.message);
  return res.data as T;
}

// ---------- jobs ----------
export async function nearbyJobs(lat: number, lng: number, radiusKm: number, category?: CategoryKey | null) {
  const res = await supabase.rpc('jobs_nearby_v2', {
    p_lat: lat,
    p_lng: lng,
    p_radius_km: radiusKm,
    p_category: category ?? null,
  });
  return must<NearbyJob[]>(res) ?? [];
}

export async function getJob(id: string) {
  let res = await supabase.from('jobs').select(JOB).eq('id', id).single();
  if (missingColumn(res.error)) res = await supabase.from('jobs').select(JOB_LEGACY).eq('id', id).single();
  return must<Job>(res);
}

export async function myJobs(userId: string) {
  let res = await supabase.from('jobs').select(JOB).eq('poster_id', userId).order('created_at', { ascending: false });
  if (missingColumn(res.error)) res = await supabase.from('jobs').select(JOB_LEGACY).eq('poster_id', userId).order('created_at', { ascending: false });
  return must<Job[]>(res) ?? [];
}

/** Someone's open tasks (for their public profile). */
export async function openJobsOf(userId: string) {
  let res = await supabase.from('jobs').select(JOB).eq('poster_id', userId).eq('status', 'open').order('created_at', { ascending: false }).limit(20);
  if (missingColumn(res.error)) res = await supabase.from('jobs').select(JOB_LEGACY).eq('poster_id', userId).eq('status', 'open').order('created_at', { ascending: false }).limit(20);
  return must<Job[]>(res) ?? [];
}

/** How many tasks this person finished as a helper. */
export async function helpedCount(userId: string) {
  const { count, error } = await supabase.from('jobs').select('id', { count: 'exact', head: true }).eq('assigned_to', userId).eq('status', 'completed');
  if (error) throw error;
  return count ?? 0;
}

export type NewJob = {
  title: string;
  description: string;
  category: CategoryKey;
  budget: number | null;
  lat: number;
  lng: number;
  address: string;
  photos: string[];
  scheduled_at: string | null;
};

export async function createJob(posterId: string, job: NewJob) {
  let res = await supabase.from('jobs').insert({ ...job, poster_id: posterId }).select(JOB).single();
  // A failed RETURNING (missing column) aborts the insert, so retrying is safe.
  if (missingColumn(res.error)) res = await supabase.from('jobs').insert({ ...job, poster_id: posterId }).select(JOB_LEGACY).single();
  return must<Job>(res);
}

/** Poster edits an open task (only these columns are writable; see security migration). */
export async function updateJob(id: string, patch: Partial<Pick<Job, 'title' | 'description' | 'category' | 'budget' | 'photos' | 'scheduled_at'>>) {
  let res = await supabase.from('jobs').update(patch).eq('id', id).select(JOB).single();
  if (missingColumn(res.error)) res = await supabase.from('jobs').update(patch).eq('id', id).select(JOB_LEGACY).single();
  return must<Job>(res);
}

export async function completeJob(id: string) {
  must(await supabase.rpc('complete_job', { p_job_id: id }));
}

/** Permanently deletes the poster's task (offers, chats and reviews cascade) and its photos. */
export async function deleteJob(job: Pick<Job, 'id' | 'photos'>) {
  must(await supabase.from('jobs').delete().eq('id', job.id));
  const paths = job.photos.map((u) => u.split('/job-photos/')[1]).filter((p): p is string => !!p);
  if (paths.length) await supabase.storage.from('job-photos').remove(paths).catch(() => {});
}

export async function cancelJob(id: string) {
  must(await supabase.rpc('cancel_job', { p_job_id: id }));
}

// ---------- photos ----------
export async function pickAndUploadPhoto(userId: string, bucket: 'job-photos' | 'avatars' = 'job-photos') {
  const picked = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.7, allowsEditing: true });
  if (picked.canceled || !picked.assets[0]) return null;
  const asset = picked.assets[0];
  const photo = await shrinkPhoto(asset.uri, asset.width, asset.height);
  const path = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  const body = await (await fetch(photo.uri)).arrayBuffer();
  const up = await supabase.storage.from(bucket).upload(path, body, { contentType: photo.mimeType });
  if (up.error) throw new Error(up.error.message);
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

// ---------- profiles ----------
export async function getProfile(id: string) {
  const res = await supabase.from('profiles').select(PROFILE).eq('id', id).single();
  return must<Profile>(res);
}

export async function getStats(id: string) {
  const res = await supabase.from('profile_stats').select('*').eq('id', id).maybeSingle();
  return (must<ProfileStats | null>(res) ?? null) as ProfileStats | null;
}

export async function updateProfile(id: string, patch: Partial<Pick<Profile, 'full_name' | 'avatar_url' | 'bio' | 'locale'>>) {
  must(await supabase.from('profiles').update(patch).eq('id', id));
}

/** Permanently deletes the signed-in user's account and data (server function `delete-account`). */
export async function deleteMyAccount() {
  const { error } = await supabase.functions.invoke('delete-account', { method: 'POST' });
  if (error) throw error;
}

// ---------- applications (offers) ----------
export async function applicationsForJob(jobId: string) {
  const res = await supabase
    .from('applications')
    .select(`*, applicant:profiles!applications_applicant_id_fkey(${PERSON})`)
    .eq('job_id', jobId)
    .order('created_at', { ascending: true });
  return must<Application[]>(res) ?? [];
}

export async function myApplication(jobId: string, userId: string) {
  const res = await supabase.from('applications').select('*').eq('job_id', jobId).eq('applicant_id', userId).maybeSingle();
  return must<Application | null>(res);
}

export async function sendOffer(jobId: string, userId: string, amount: number | null, message: string) {
  must(await supabase.from('applications').insert({ job_id: jobId, applicant_id: userId, amount, message }));
}

export async function acceptOffer(applicationId: string) {
  must(await supabase.rpc('accept_application', { p_application_id: applicationId }));
}

/** The chosen helper steps back: the task reopens and the other offers count again. */
export async function withdrawFromJob(jobId: string) {
  must(await supabase.rpc('withdraw_from_job', { p_job_id: jobId }));
}

// ---------- conversations & messages ----------
export async function startConversation(jobId: string, otherUserId: string) {
  const res = await supabase.rpc('start_conversation', { p_job_id: jobId, p_other: otherUserId });
  return must<string>(res);
}

export async function myConversations() {
  const res = await supabase
    .from('conversations')
    .select(
      `*, job:jobs(id, title, category, status, assigned_to), poster:profiles!conversations_poster_id_fkey(${PERSON}), worker:profiles!conversations_worker_id_fkey(${PERSON})`
    )
    .order('last_message_at', { ascending: false });
  return must<Conversation[]>(res) ?? [];
}

export async function getConversation(id: string) {
  const res = await supabase
    .from('conversations')
    .select(
      `*, job:jobs(id, title, category, status, assigned_to), poster:profiles!conversations_poster_id_fkey(${PERSON}), worker:profiles!conversations_worker_id_fkey(${PERSON})`
    )
    .eq('id', id)
    .single();
  return must<Conversation>(res);
}

export async function messages(conversationId: string) {
  const res = await supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    // Newest 300, shown oldest-first (asking for the oldest 500 hid new messages in long chats).
    .order('created_at', { ascending: false })
    .limit(300);
  return (must<Message[]>(res) ?? []).reverse();
}

export async function sendMessage(conversationId: string, senderId: string, body: string) {
  const res = await supabase.from('messages').insert({ conversation_id: conversationId, sender_id: senderId, body }).select('*').single();
  return must<Message>(res);
}

export async function markRead(conversationId: string, userId: string) {
  await supabase.from('messages').update({ read_at: new Date().toISOString() }).eq('conversation_id', conversationId).neq('sender_id', userId).is('read_at', null);
}

export async function unreadCount(userId: string) {
  const res = await supabase.from('messages').select('id', { count: 'exact', head: true }).neq('sender_id', userId).is('read_at', null);
  return res.count ?? 0;
}

// ---------- reviews ----------
export async function reviewsFor(userId: string, role: 'worker' | 'poster') {
  const res = await supabase
    .from('reviews')
    .select(`*, reviewer:profiles!reviews_reviewer_id_fkey(${PERSON}), job:jobs(id, title)`)
    .eq('reviewee_id', userId)
    .eq('reviewee_role', role)
    .order('created_at', { ascending: false })
    .limit(50);
  return must<Review[]>(res) ?? [];
}

export async function myReviewForJob(jobId: string, userId: string) {
  const res = await supabase.from('reviews').select('id').eq('job_id', jobId).eq('reviewer_id', userId).maybeSingle();
  return must<{ id: string } | null>(res);
}

export async function leaveReview(r: Pick<Review, 'job_id' | 'reviewer_id' | 'reviewee_id' | 'reviewee_role' | 'rating' | 'comment'>) {
  must(await supabase.from('reviews').insert(r));
}

// ---------- notifications ----------
export async function myNotifications(userId: string) {
  const res = await supabase
    .from('notifications')
    .select(`*, actor:profiles!notifications_actor_id_fkey(${PERSON})`)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(60);
  return must<AppNotification[]>(res) ?? [];
}

export async function unreadNotifications(userId: string) {
  const { count, error } = await supabase
    .from('notifications')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .is('read_at', null);
  if (error) throw error;
  return count ?? 0;
}

export async function markNotificationsRead(userId: string) {
  must(await supabase.from('notifications').update({ read_at: new Date().toISOString() }).eq('user_id', userId).is('read_at', null));
}

// ---------- chat photos ----------
export type PickedPhoto = { uri: string; mimeType: string };

/** Opens the camera or gallery. Throws Error('camera-permission') if the camera is refused. */
export async function pickPhoto(source: 'camera' | 'library'): Promise<PickedPhoto | null> {
  const opts: ImagePicker.ImagePickerOptions = { mediaTypes: ['images'], quality: 0.6 };
  let picked: ImagePicker.ImagePickerResult;
  if (source === 'camera') {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) throw new Error('camera-permission');
    picked = await ImagePicker.launchCameraAsync(opts);
  } else picked = await ImagePicker.launchImageLibraryAsync(opts);
  if (picked.canceled || !picked.assets[0]) return null;
  const a = picked.assets[0];
  return shrinkPhoto(a.uri, a.width, a.height);
}

/** Uploads to the private chat-photos bucket (folder = conversation) and posts the message. */
export async function sendPhotoMessage(conversationId: string, senderId: string, photo: PickedPhoto) {
  const ext = (photo.mimeType.split('/')[1] ?? 'jpg').replace('jpeg', 'jpg');
  const path = `${conversationId}/${senderId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const body = await (await fetch(photo.uri)).arrayBuffer();
  const up = await supabase.storage.from('chat-photos').upload(path, body, { contentType: photo.mimeType });
  if (up.error) throw new Error(up.error.message);
  const res = await supabase.from('messages').insert({ conversation_id: conversationId, sender_id: senderId, body: '📷', image_path: path }).select('*').single();
  return must<Message>(res);
}

/** Short-lived links for chat photos (the bucket is private to the two participants). */
export async function chatPhotoUrls(paths: string[]): Promise<Record<string, string>> {
  if (!paths.length) return {};
  const { data, error } = await supabase.storage.from('chat-photos').createSignedUrls(paths, 60 * 60);
  if (error) throw error;
  const out: Record<string, string> = {};
  for (const d of data ?? []) if (d.path && d.signedUrl) out[d.path] = d.signedUrl;
  return out;
}

// ---------- blocking & reports ----------
export async function myBlockedIds(): Promise<string[]> {
  const res = await supabase.from('blocks').select('blocked_id');
  return (must<{ blocked_id: string }[]>(res) ?? []).map((b) => b.blocked_id);
}

export async function blockedProfiles() {
  const res = await supabase.from('blocks').select(`blocked_id, created_at, profile:profiles!blocks_blocked_id_fkey(${PERSON})`).order('created_at', { ascending: false });
  type Row = { blocked_id: string; created_at: string; profile: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null };
  if (res.error) throw new Error(res.error.message);
  return (res.data ?? []) as unknown as Row[];
}

export async function blockUser(me: string, other: string) {
  const { error } = await supabase.from('blocks').insert({ blocker_id: me, blocked_id: other });
  if (error && error.code !== '23505') throw error;
}

export async function unblockUser(me: string, other: string) {
  must(await supabase.from('blocks').delete().eq('blocker_id', me).eq('blocked_id', other));
}

/** Files a report; reporting the same thing twice counts as done. */
export async function sendReport(me: string, target: ReportTarget, reason: ReportReason, details: string) {
  const { error } = await supabase.from('reports').insert({
    reporter_id: me,
    target_type: target.type,
    target_id: target.id,
    reported_user_id: target.userId,
    reason,
    details: details.trim() || null,
  });
  if (error && error.code !== '23505') throw error;
}

/** True when the database refused because of the anti-spam limits. */
export function isRateLimited(e: unknown) {
  return e instanceof Error ? e.message.includes('rate_limited') : typeof e === 'object' && !!e && String((e as { message?: string }).message).includes('rate_limited');
}

// ---------- nearby task alerts ----------
export async function getTaskAlert(userId: string) {
  const res = await supabase.from('task_alerts').select('*').eq('user_id', userId).maybeSingle();
  return must<TaskAlert | null>(res);
}

export async function saveTaskAlert(alert: TaskAlert) {
  must(await supabase.from('task_alerts').upsert({ ...alert, updated_at: new Date().toISOString() }));
}
