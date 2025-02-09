import { createClient } from './supabase'
import { Article, ResponseSupabase } from '@/types'

export async function getArticles(languageId: number) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .order('created_at', { ascending: true })
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}

export async function getArticle(id: string, languageId: number) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .eq('id', id)
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}

export async function createArticle(data: Article) {
  const supabase = await createClient()
  return await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .insert(data)
}
