import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageSkills } from '@/components'
import { getSkills } from '@/lib'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.skills.title} | Maurizio Tolomeo`,
		description: dict.skills.subtitle,
		alternates: {
			canonical: '/skills',
		},
		openGraph: {
			title: `${dict.skills.title} | Maurizio Tolomeo`,
			description: dict.skills.subtitle,
			url: '/skills',
			type: 'website',
		},
	}
}

export default async function SkillsPage() {
	const skills = await getSkills()
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	return (
		<div className="container">
			<PageSkills dict={dict} language={language} skills={skills} />
		</div>
	)
}
