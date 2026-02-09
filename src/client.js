// Not intended for private or production use: this is a highly simplified client for educational purposes.
// It assumes permissive access for ease of development.
// In a production setup, you’d enable Row Level Security (RLS) and write policies (often tied to Supabase Auth)
// so the public key can only perform allowed actions, and move admin-only operations to server-side code.
// These values would typically come from environment variables
// (e.g. import.meta.env.VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY) rather than being hardcoded.

import { createClient } from '@supabase/supabase-js';

const URL = 'https://ikgifeifitajfzlsmorn.supabase.co';
const API_KEY = 'sb_publishable_d0sxNnoy61RgxjtKAlf0xQ_Bro8SOY0';

export const supabase = createClient(URL, API_KEY);

