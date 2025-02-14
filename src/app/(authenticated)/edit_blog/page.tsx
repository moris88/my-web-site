'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, PageEditBlogs, ErrorPage } from '@/components'
import { getUser, getArticles, getLanguages } from '@/lib'
import { redirect } from 'next/navigation'

export default async function EditBlogPage() {
  const dict = await getDictionary()
  const languages = await getLanguages()
  const response = await getArticles()
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <SectionHero title={dict.edit_blog.table.title}>
      <PageEditBlogs
        dict={dict}
        articles={response.data}
        languages={languages?.data}
      />
    </SectionHero>
  )
}
