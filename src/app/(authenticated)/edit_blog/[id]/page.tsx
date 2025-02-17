'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, ErrorPage, FormArticles } from '@/components'
import { getArticle, getLanguages, getUser } from '@/lib'
import { redirect } from 'next/navigation'

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
  const user = await getUser()
  if (!user) {
    redirect('/login')
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
