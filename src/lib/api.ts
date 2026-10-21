import * as ImagePicker from 'expo-image-picker';

import { supabase } from './supabase';
import type { Application, CategoryKey, Conversation, Job, Message, NearbyJob, Profile, ProfileStats, Review } from './types';

const PERSON = 'id, full_name, avatar_url';

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
  const res = await supabase.from('jobs').select('*').eq('id', id).single();
  return must<Job>(res);
}

export async function myJobs(userId: string) {
  const res = await supabase.from('jobs').select('*').eq('poster_id', userId).order('created_at', { ascending: false });
  return must<Job[]>(res) ?? [];
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
  const res = await supabase.from('jobs').insert({ ...job, poster_id: posterId }).select('*').single();
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
  const ext = (asset.mimeType?.split('/')[1] ?? 'jpg').replace('jpeg', 'jpg');
  const path = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const body = await (await fetch(asset.uri)).arrayBuffer();
  const up = await supabase.storage.from(bucket).upload(path, body, { contentType: asset.mimeType ?? 'image/jpeg' });
  if (up.error) throw new Error(up.error.message);
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

// ---------- profiles ----------
export async function getProfile(id: string) {
  const res = await supabase.from('profiles').select('*').eq('id', id).single();
  return must<Profile>(res);
}

export async function getStats(id: string) {
  const res = await supabase.from('profile_stats').select('*').eq('id', id).maybeSingle();
  return (must<ProfileStats | null>(res) ?? null) as ProfileStats | null;
}

export async function updateProfile(id: string, patch: Partial<Pick<Profile, 'full_name' | 'avatar_url' | 'bio' | 'locale'>>) {
  must(await supabase.from('profiles').update(patch).eq('id', id));
}

export async function deleteMyAccount() {
  must(await supabase.rpc('delete_my_account'));
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

// ---------- conversations & messages ----------
export async function startConversation(jobId: string, otherUserId: string) {
  const res = await supabase.rpc('start_conversation', { p_job_id: jobId, p_other: otherUserId });
  return must<string>(res);
}

export async function myConversations() {
  const res = await supabase
    .from('conversations')
    .select(
      `*, job:jobs(id, title, category, status), poster:profiles!conversations_poster_id_fkey(${PERSON}), worker:profiles!conversations_worker_id_fkey(${PERSON})`
    )
    .order('last_message_at', { ascending: false });
  return must<Conversation[]>(res) ?? [];
}

export async function getConversation(id: string) {
  const res = await supabase
    .from('conversations')
    .select(
      `*, job:jobs(id, title, category, status), poster:profiles!conversations_poster_id_fkey(${PERSON}), worker:profiles!conversations_worker_id_fkey(${PERSON})`
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
    .order('created_at', { ascending: true })
    .limit(500);
  return must<Message[]>(res) ?? [];
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
