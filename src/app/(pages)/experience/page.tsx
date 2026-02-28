import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageHistory } from '@/components'
import { getHistory } from '@/lib'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.navbar.experience} | Maurizio Tolomeo`,
		description: dict.home.links.experience,
		alternates: {
			canonical: '/experience',
		},
		openGraph: {
			title: `${dict.navbar.experience} | Maurizio Tolomeo`,
			description: dict.home.links.experience,
			url: '/experience',
			type: 'website',
		},
	}
}

export default async function BlogsPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const history = await getHistory()
	return <PageHistory history={history} language={language} />
}
