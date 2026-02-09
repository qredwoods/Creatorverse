import { createClient } from '@supabase/supabase-js';

const URL = 'https://ikgifeifitajfzlsmorn.supabase.co';
const API_KEY = 'sb_publishable_d0sxNnoy61RgxjtKAlf0xQ_Bro8SOY0';

export const supabase = createClient(URL, API_KEY);

