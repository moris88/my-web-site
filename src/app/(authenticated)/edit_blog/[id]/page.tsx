'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, ErrorPage } from '@/components'
import FormArticles from '@/components/Forms/FormArticles'
import { getArticle, getLanguage, getLanguages } from '@/lib'

export default async function EditArticlePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const dict = await getDictionary()
  const response = await getArticle(id)
  const languages = await getLanguages()
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return (
    <SectionHero title={dict.edit_blog.form.section.edit}>
      <FormArticles
        dict={dict}
        article={response?.data?.[0]}
        languages={languages?.data}
      />
    </SectionHero>
  )
}
