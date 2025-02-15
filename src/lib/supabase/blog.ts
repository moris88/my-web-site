import moment from 'moment'
import { createClient } from './supabase'
import { Article, ResponseSupabase } from '@/types'

export async function getArticlesWithLanguage(languageId: number) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .order('created_at', { ascending: true })
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}

export async function getArticles() {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .order('created_at', { ascending: true })) as ResponseSupabase<Article>
}

export async function getArticleWithLanguage(id: string, languageId: number) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .eq('id', id)
    .eq('languageID', languageId)) as ResponseSupabase<Article>
}

export async function getArticle(id: string) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .select('*')
    .eq('id', id)) as ResponseSupabase<Article>
}

export async function createArticle(data: Article) {
  if (!data.languageID) {
    throw new Error('Language ID is required')
  }
  if (!data.title) {
    throw new Error('Title is required')
  }
  if (!data.content) {
    throw new Error('Content is required')
  }
  const supabase = await createClient()
  const user = await supabase.auth.getUser()
  data.user_id = user?.data?.user?.id
  return await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .insert([data])
    .select('id')
}

export async function updateArticle(data: Partial<Article> & { id: string }) {
  if (!data.id) {
    throw new Error('Article ID is required')
  }
  data.updated_at = moment().utc().format('YYYY-MM-DD HH:mm:ssZ')
  const supabase = await createClient()
  return await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .update(data)
    .eq('id', data.id)
    .select('*')
}

export async function deleteArticle(id: string) {
  if (!id) {
    throw new Error('Article ID is required')
  }
  const supabase = await createClient()
  return await supabase
    .from(process.env.DEVELOPMENT ? 'blog_test' : 'blog')
    .delete()
    .eq('id', id)
}
