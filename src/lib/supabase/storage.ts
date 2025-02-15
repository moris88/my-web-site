'use server'

import { createClient } from './supabase'

export async function uploadFile(file: File, name: string) {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  const supabase = await createClient()
  const { data, error } = await supabase.storage
    .from('blog')
    .upload(`${name}.webp`, buffer, {
      upsert: true,
      contentType: file.type,
    })
  if (error) {
    return error
  } else {
    return data
  }
}
