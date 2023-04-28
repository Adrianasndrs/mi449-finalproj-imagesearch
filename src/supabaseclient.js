
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://inknxseidrqgytxnrkfo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlua254c2VpZHJxZ3l0eG5ya2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNzI5NDMsImV4cCI6MTk5Mjg0ODk0M30.QaJ6R0eJpAliALLVtHUtNCJfNHM3NrQOn_E68R79ETQ'
export const supabase = createClient(supabaseUrl, supabaseKey)