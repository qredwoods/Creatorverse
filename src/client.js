import { createClient } from '@supabase/supabase-js';

const URL = 'https://ikgifeifitajfzlsmorn.supabase.co';
const API_KEY = 'sb_publishable_d0sxNnoy61RgxjtKAlf0xQ_Bro8SOY0';
//Create a variable called supabase. Assign it a function call to createClient(). Pass URL and API_KEY variables to the createClient() function.
const supabase = createClient(URL, API_KEY);
//Export the supabase variable by adding the export keyword before const supabase.
export const supabase = createClient(URL, API_KEY);
