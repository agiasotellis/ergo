export type CategoryKey = 'home' | 'garden' | 'cleaning' | 'moving' | 'errands' | 'tech' | 'pets' | 'events' | 'lessons';
export type JobStatus = 'open' | 'assigned' | 'completed' | 'cancelled';

export type Profile = {
  id: string;
  full_name: string;
  avatar_url: string | null;
  bio: string | null;
  /** Only writable; not readable through the API. */
  locale?: string | null;
  created_at: string;
};

export type ProfileStats = {
  id: string;
  worker_rating: number | null;
  worker_reviews: number;
  poster_rating: number | null;
  poster_reviews: number;
};

export type Job = {
  id: string;
  poster_id: string;
  title: string;
  description: string;
  category: CategoryKey;
  budget: number | null;
  lat: number;
  lng: number;
  address: string | null;
  photos: string[];
  scheduled_at: string | null;
  status: JobStatus;
  assigned_to: string | null;
  created_at: string;
};

export type NearbyJob = Omit<Job, 'assigned_to'> & {
  distance_km: number;
  poster_name: string | null;
  poster_avatar: string | null;
};

export type Application = {
  id: string;
  job_id: string;
  applicant_id: string;
  message: string | null;
  amount: number | null;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  applicant?: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null;
};

export type Conversation = {
  id: string;
  job_id: string;
  poster_id: string;
  worker_id: string;
  last_message: string | null;
  last_message_at: string;
  job?: Pick<Job, 'id' | 'title' | 'category' | 'status'> | null;
  poster?: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null;
  worker?: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null;
};

export type Message = {
  id: string;
  conversation_id: string;
  sender_id: string;
  body: string;
  /** Private storage path in the chat-photos bucket, when the message is a photo. */
  image_path?: string | null;
  read_at: string | null;
  created_at: string;
  /** Local-only: preview shown while a photo uploads. */
  local_uri?: string;
};

export type Review = {
  id: string;
  job_id: string;
  reviewer_id: string;
  reviewee_id: string;
  reviewee_role: 'poster' | 'worker';
  rating: number;
  comment: string | null;
  created_at: string;
  reviewer?: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null;
  job?: Pick<Job, 'id' | 'title'> | null;
};

export type NotificationType = 'offer' | 'accepted' | 'completed' | 'cancelled' | 'review';

export type AppNotification = {
  id: string;
  user_id: string;
  type: NotificationType;
  job_id: string | null;
  actor_id: string | null;
  data: { title?: string; amount?: number; rating?: number };
  read_at: string | null;
  created_at: string;
  actor?: Pick<Profile, 'id' | 'full_name' | 'avatar_url'> | null;
};

export type ReportReason = 'spam' | 'scam' | 'inappropriate' | 'harassment' | 'other';
export type ReportTarget = { type: 'job' | 'user' | 'message'; id: string; userId: string | null };
