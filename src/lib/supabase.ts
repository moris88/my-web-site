'use server'

import { Article, Language, LanguageSupabase, ResponseSupabase } from '@/types'
import { createClient } from '@supabase/supabase-js'

const {
  DB_APIKEY: SUPABASE_KEY,
  DEVELOPMENT,
  DB_HOST: SUPABASE_URL,
} = process.env

console.log('SUPABASE_URL', SUPABASE_URL)
console.log('SUPABASE_KEY', SUPABASE_KEY)

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Missing Supabase URL or APIKey')
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function getLanguage(language: Language) {
  return await supabase.from('language').select('id,type').eq('type', language) as ResponseSupabase<LanguageSupabase>
}

export async function getArticles(languageId: number) {
  return (await supabase
    .from(DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .order('created_at', { ascending: true })
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}

export async function getArticle(id: string, languageId: number) {
  return (await supabase
    .from(DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .eq('id', id)
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}
