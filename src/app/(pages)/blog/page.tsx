import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageBlog } from '@/components'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.blog.title} | Maurizio Tolomeo`,
		description:
			dict.language === 'Italiano'
				? 'Scopri gli ultimi articoli e approfondimenti sul mondo della tecnologia, programmazione e sviluppo software.'
				: 'Discover the latest articles and insights on technology, programming, and software development.',
		alternates: {
			canonical: '/blog',
		},
		openGraph: {
			title: `${dict.blog.title} | Maurizio Tolomeo`,
			description:
				dict.language === 'Italiano'
					? 'Scopri gli ultimi articoli e approfondimenti sul mondo della tecnologia, programmazione e sviluppo software.'
					: 'Discover the latest articles and insights on technology, programming, and software development.',
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
