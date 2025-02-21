import { getDictionary } from '@/app/dictionaries'
import { SectionHero, ErrorPage, FormArticles } from '@/components'
import { getArticle, getLanguages, getUser } from '@/lib'
import { redirect } from 'next/navigation'

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dict = await getDictionary()
  const response = await getArticle(id)
  const languages = await getLanguages()
  if (response?.error) {
    return <ErrorPage err={new Error(response.error.message)} />
  }
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <SectionHero title={dict.edit_blog.form.section.edit}>
      <FormArticles
        article={response?.data?.[0]}
        dict={dict}
        languages={languages?.data}
      />
    </SectionHero>
  )
}
