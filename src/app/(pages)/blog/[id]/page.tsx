import React from 'react'
import { PageArticle, ErrorPage } from '@/components'
import { getDictionary } from '../../../dictionaries'
import { getBlog } from '@/lib'

export default async function BlogPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const blog = await getBlog(language)
  const article = blog.articles.find((a) => a.id === id)
  if (!article) {
    return <ErrorPage err={new Error('Article not found!')} />
  }
  return <PageArticle article={article} dict={dict} />
}
