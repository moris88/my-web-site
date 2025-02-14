'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, PageEditBlogs, ErrorPage } from '@/components'
import { getArticles, getLanguages } from '@/lib'

export default async function EditBlogPage() {
  const dict = await getDictionary()
  const languages = await getLanguages()
  const response = await getArticles()
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
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
