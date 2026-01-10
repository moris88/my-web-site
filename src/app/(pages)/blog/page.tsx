import { getDictionary } from '@/app/dictionaries'
import { PageBlog } from '@/components'

export default async function BlogsPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	return <PageBlog dict={dict} language={language} />
}
