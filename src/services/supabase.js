import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://qeallvfkoindbeqylqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYWxsdmZrb2luZGJlcXlscWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNDc0NjEsImV4cCI6MjAzOTkyMzQ2MX0.jaICVQ_K6bWG6y_WK3-G-JeOIT7411I028sRV_mGjZI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
