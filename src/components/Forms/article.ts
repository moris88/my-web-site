'use client'

import { Article } from '@/types'

const { error } = console

export async function createArticle(
  data: Article,
  fileInput?: HTMLInputElement | null
) {
  return await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(async (res) => {
      if (res.status !== 201) {
        return { error: 'Error created article!' }
      } else {
        const articleId = res?.data?.[0]?.id
        if (fileInput?.files && fileInput?.files.length > 0 && articleId) {
          return await uploadFile(fileInput?.files?.[0], articleId).then(
            (res) => {
              if (res?.error) {
                return { error: res.error }
              }
              return { error: null }
            }
          )
        } else {
          return { error: null }
        }
      }
    })
}

export async function updateArticle(
  data: Partial<Article>,
  fileInput?: HTMLInputElement | null
) {
  if (!data.id) {
    return Promise.resolve({
      error: 'Article ID is required!'
    })
  }
  return await fetch('/api/articles', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(async (res) => {
      if (res.status !== 200) {
        return { error: 'Error updated article!' }
      } else {
        const articleId = res?.data?.[0]?.id
        if (fileInput?.files && fileInput?.files.length > 0 && articleId) {
          return await uploadFile(fileInput?.files?.[0], articleId).then(
            (res) => {
              if (res?.error) {
                return { error: res.error }
              }
              return { error: null }
            }
          )
        } else {
          return { error: null }
        }
      }
    })
}

async function uploadFile(file: File, articleId: string) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('article_id', articleId)
  return await fetch('/api/uploadFile', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then(async (res) => {
      if (res?.error) {
        return { error: res.message }
      }
      await updateArticle({
        id: articleId,
        image: `https://psgaxddqtxofwhtzfxiw.supabase.co/storage/v1/object/public/blog/${articleId}.webp`,
      })
      return { error: null }
    })
    .catch((err) => {
      error(err)
      return { error: 'Error upload file!' }
    })
}
