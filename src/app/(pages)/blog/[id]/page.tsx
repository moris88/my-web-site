import { ErrorPage } from '@/components'
import { PageBlog } from '@/components/PagesDetails'
import { getArticle } from '@/lib'
import { getDictionary } from '../../../dictionaries'

export default async function BlogPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const response = await getArticle(id, language)
  if (response?.error) {
    return <ErrorPage error={response.message} />
  }
  return <PageBlog article={response.articles[0]} dict={dict} />
}
