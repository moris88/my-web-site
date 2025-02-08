import { ErrorPage } from '@/components'
import { PageBlog } from '@/components/PagesDetails'
import { getDictionary } from '../../../dictionaries'
import { getArticle, getLanguage } from '@/lib/supabase'

export default async function BlogPage({
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
  console.log(response)
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return <PageBlog article={response.data[0]} dict={dict} />
}
