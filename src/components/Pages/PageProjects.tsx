'use client'

import { useRouter } from 'next/navigation'

import type { Dictionary } from '@/app/dictionaries'
import { CardProject, SectionHero } from '@/components'
import type { Project } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageProjectsProps {
	dict: Dictionary
	projects: Project[]
}

function PageProjects({ dict, projects }: PageProjectsProps) {
	const router = useRouter()

	const handleClickRow = (project: Project) => {
		router.push(`/projects/${project.id}`)
	}

	return (
		<section className="min-h-screen w-full bg-gray-50 py-20 dark:bg-[#1b1a19]">
			<div className="container mx-auto flex flex-col items-center gap-10 px-4">
				<div className="flex flex-col items-center gap-4 text-center">
					<h2 className="font-bold text-3xl md:text-4xl">
						{dict.projects.title}
					</h2>
					<div className="h-1 w-20 rounded-full bg-primary" />
					<p className="text-gray-600 dark:text-gray-300">
						A collection of my work.
					</p>
				</div>

				<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{projects.map((project) => (
						<CardProject
							key={generateUniqueId()}
							project={project}
							onClick={handleClickRow}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default PageProjects
