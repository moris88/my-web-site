import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageProjects } from '@/components'
import { getProjects } from '@/lib'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.projects.title} | Maurizio Tolomeo`,
		description: dict.projects.description,
		alternates: {
			canonical: '/projects',
		},
		openGraph: {
			title: `${dict.projects.title} | Maurizio Tolomeo`,
			description: dict.projects.description,
			url: '/projects',
			type: 'website',
		},
	}
}

export default async function ProjectsPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const projects = await getProjects(language)
	return <PageProjects dict={dict} projects={projects} />
}
