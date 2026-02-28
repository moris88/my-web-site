import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageCV } from '@/components'
import { getCV } from '@/lib'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.curriculum.title} | Maurizio Tolomeo`,
		description: dict.curriculum.title,
		alternates: {
			canonical: '/curriculum',
		},
		openGraph: {
			title: `${dict.curriculum.title} | Maurizio Tolomeo`,
			description: dict.curriculum.title,
			url: '/curriculum',
			type: 'website',
		},
	}
}

export default async function SkillsPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const curriculum = await getCV(language)
	return <PageCV curriculum={curriculum} dict={dict} />
}
