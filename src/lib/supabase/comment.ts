'use server'

import { createClient } from './supabase'
import { Comment, ResponseSupabase } from '@/types'

export async function getComment(id: string) {
  const supabase = await createClient()
  return (await supabase
    .from(process.env.DEVELOPMENT ? 'comments_test' : 'comments')
    .select('*')
    .eq('article_id', id)) as ResponseSupabase<Comment>
}

export async function createComment(data: Comment) {
  if (data.username === '' || !data.username) {
    data.username = 'Anonymous'
  }
  if (data.content === '') {
    throw new Error('Content is required')
  }
  if (data.article_id === '') {
    throw new Error('Article ID is required')
  }
  const supabase = await createClient()
  return await supabase
    .from(process.env.DEVELOPMENT ? 'comments_test' : 'comments')
    .insert([data])
    .select('id')
}
