import { PageBlogs, ErrorPage } from '@/components'
import { getDictionary } from '@/app/dictionaries'
import { getLanguage, getArticlesWithLanguage } from '@/lib'

export default async function BlogsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const languageId = await getLanguage(language).then((res) => {
    return res.data[0].id
  })
  const response = await getArticlesWithLanguage(+languageId)
  if (response?.error) {
    return <ErrorPage err={new Error(response.error.message)} />
  }
  return <PageBlogs articles={response.data} dict={dict} />
}
