import React from 'react'
import { PageBlog } from '@/components'
import { getDictionary } from '@/app/dictionaries'
import { getBlog } from '@/lib'

export default async function BlogsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const blog = await getBlog(language)
  return <PageBlog articles={blog.articles} dict={dict} />
}
