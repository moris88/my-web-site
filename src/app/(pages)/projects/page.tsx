import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageProjects } from '@/components'
import { getProjects } from '@/lib'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.projects.title} | Maurizio Tolomeo`,
		description: dict.language === 'Italiano' ? 'Esplora i miei progetti personali, dalle applicazioni web alle librerie open source, e scopri come ho messo in pratica le mie competenze di sviluppo software.' : 'Explore my personal projects, from web applications to open-source libraries, and discover how I put my software development skills into practice.',
		alternates: {
			canonical: '/projects',
		},
		openGraph: {
			title: `${dict.projects.title} | Maurizio Tolomeo`,
			description: dict.language === 'Italiano' ? 'Esplora i miei progetti personali, dalle applicazioni web alle librerie open source, e scopri come ho messo in pratica le mie competenze di sviluppo software.' : 'Explore my personal projects, from web applications to open-source libraries, and discover how I put my software development skills into practice.',
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
