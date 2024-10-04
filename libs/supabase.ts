import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wiwwzozqlowojgwbllns.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpd3d6b3pxbG93b2pnd2JsbG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNTI0NTIsImV4cCI6MjA0MDgyODQ1Mn0.fv1Kw3Xo3-_0B3mBDjVNWdFFf-BcKrb-gQFSIDqhn5A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
