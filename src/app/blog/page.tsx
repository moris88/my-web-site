import { PageBlog } from '@/components/PagesDetails'
import { getBlog } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function Blog() {
  const blog = await getBlog()
  const dict = await getDictionary()
  return <PageBlog blog={blog} dict={dict} />
}
