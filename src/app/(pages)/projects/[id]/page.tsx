import type { Metadata } from 'next'
import { ErrorPage, PageProject } from '@/components'
import { getProjects } from '@/lib'
import { getDictionary } from '../../../dictionaries'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const { id } = await params
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const projects = await getProjects(language)
	const project = projects.find((project) => project.id === +id)

	if (!project) {
		return {
			title: 'Project not found',
		}
	}

	return {
		title: `${project.title} | Maurizio Tolomeo`,
		description: project.description.substring(0, 150),
		alternates: {
			canonical: `/projects/${id}`,
		},
		openGraph: {
			title: project.title,
			description: project.description.substring(0, 150),
			url: `/projects/${id}`,
			images: [
				{
					url: project.image.src,
					width: 1200,
					height: 630,
					alt: project.image.alt,
				},
			],
			locale: language,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: project.title,
			description: project.description.substring(0, 150),
			images: [project.image.src],
		},
	}
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const projects = await getProjects(language)
	const project = projects.find((project) => project.id === +id)
	if (!project) {
		return <ErrorPage err={new Error('Project not found')} />
	}
	return <PageProject dict={dict} project={project} />
}
