import PageBlog from '@/components/PagesDetails/PageBlog'
import { getBlog } from '@/lib/request'

export default async function Blog() {
  const blog = await getBlog()
  return <PageBlog blog={blog} />
}
