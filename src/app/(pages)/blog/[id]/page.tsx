import { PageBlog, ErrorPage } from '@/components'
import { getDictionary } from '../../../dictionaries'
import { getArticleWithLanguage, getLanguage, getArticle } from '@/lib'

export default async function BlogPage({
  params: { id },
  searchParams: { lang },
}: {
  params: { id: string },
  searchParams: { lang: string }
}) {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const languageId = await getLanguage(language).then((res) => {
    return res.data[0].id
  })
  console.log(languageId)
  const response = lang
    ? await getArticle(id)
    : await getArticleWithLanguage(id, +languageId)
  console.log(response)
  if (response?.error) {
    return <ErrorPage message={response.error.message} />
  }
  return <PageBlog article={response.data[0]} dict={dict} />
}
