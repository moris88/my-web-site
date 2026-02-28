import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageBlog } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.blog.title} | Maurizio Tolomeo`,
		description: dict.blog.description,
		alternates: {
			canonical: '/blog',
		},
		openGraph: {
			title: `${dict.blog.title} | Maurizio Tolomeo`,
			description: dict.blog.description,
			url: '/blog',
			type: 'website',
		},
	}
}

export default async function BlogsPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	return <PageBlog dict={dict} language={language} />
}
