import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://osedvqbxfznlgrftwvxa.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_VqW_nKJFmfjPI9kmoJwFZA_XLc5IgEt";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AppointmentData {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  program: string;
  goal: string;
  experience: string;
  notes?: string;
  created_at?: string;
}
