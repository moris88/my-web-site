import { PageBlog, ErrorPage } from '@/components'
import { getDictionary } from '../../../dictionaries'
import { getArticleWithLanguage, getLanguage, getArticle, getComment } from '@/lib'

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
  const article = lang
    ? await getArticle(id)
    : await getArticleWithLanguage(id, +languageId)
  if (article?.error) {
    return <ErrorPage message={article.error.message} />
  }
  const comments = await getComment(article.data[0].id)
  return <PageBlog article={article.data[0]} dict={dict} comments={comments.data} />
}
