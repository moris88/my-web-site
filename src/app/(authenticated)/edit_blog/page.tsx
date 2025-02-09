'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, PageEditBlogs, ErrorPage } from '@/components'
import { getArticles, getLanguage } from '@/lib'

export default async function EditBlogPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const languageId = await getLanguage(language).then((res) => {
    return res.data[0].id
  })
  const response = await getArticles(+languageId)
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return (
    <SectionHero title={'Edit Blog'}>
      <PageEditBlogs articles={response.data} />
    </SectionHero>
  )
}
