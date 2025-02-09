import { PageBlogs, ErrorPage } from '@/components'
import { getDictionary } from '../../dictionaries'
import { getLanguage, getArticles } from '@/lib'

export default async function BlogsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const languageId = await getLanguage(language).then((res) => {
    return res.data[0].id
  })
  const response = await getArticles(+languageId)
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return <PageBlogs articles={response.data} dict={dict} />
}
