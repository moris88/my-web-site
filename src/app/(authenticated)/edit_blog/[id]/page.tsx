'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, PageEditBlogs, ErrorPage } from '@/components'
import { getArticle, getLanguage } from '@/lib'

export default async function EditArticlePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const languageId = await getLanguage(language).then((res) => {
    return res.data[0].id
  })
  const response = await getArticle(id, +languageId)
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return (
    <SectionHero title={'Edit Blog'}>
      <pre>{JSON.stringify(response.data[0], null, 3)}</pre>
    </SectionHero>
  )
}
