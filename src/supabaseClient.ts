import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wxlgximnwytvqzdhfbwn.supabase.co'; 
const supabaseKey = 'sb_publishable_Iv1jSjECoxaqXZ2QbomNRQ_uVV7AiCt'; 

export const supabase = createClient(supabaseUrl, supabaseKey);