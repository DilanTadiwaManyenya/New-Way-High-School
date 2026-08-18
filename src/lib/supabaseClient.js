import { createClient } from '@supabase/supabase-js'

const rawUrl = import.meta.env.VITE_SUPABASE_URL
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

const supabaseUrl = isValidUrl(rawUrl) ? rawUrl : 'https://placeholder.supabase.co'
const supabaseAnonKey =
  rawKey && typeof rawKey === 'string' && rawKey !== 'your_supabase_anon_key_here'
    ? rawKey
    : 'placeholder'

if (!isValidUrl(rawUrl) || !rawKey || rawKey === 'your_supabase_anon_key_here') {
  console.warn(
    '[SupabaseClient Warning] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing or invalid. Using placeholder client for local preview.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

