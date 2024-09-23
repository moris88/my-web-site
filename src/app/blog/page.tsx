import { PageBlog } from '@/components/PagesDetails'
import { getBlog } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function Blog() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const blog = await getBlog(language)
  return <PageBlog blog={blog} dict={dict} />
}
