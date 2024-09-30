import { ErrorPage } from '@/components'
import { PageBlogs } from '@/components/PagesDetails'
import { getArticles } from '@/lib'
import { getDictionary } from '../../dictionaries'

export default async function BlogsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const response = await getArticles(language)
  if (response?.error) {
    return <ErrorPage error={response.message as string} />
  }
  return <PageBlogs articles={response.articles} dict={dict} />
}
