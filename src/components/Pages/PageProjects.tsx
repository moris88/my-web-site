'use client'

import { useRouter } from 'next/navigation'

import { FaLaptopCode } from 'react-icons/fa6'

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
		<SectionHero
			icon={<FaLaptopCode className="h-8 w-8 text-primary" />}
			title={dict.projects.title}
			subtitle={dict.projects.subtitle}
		>
			<section className="min-h-screen w-full dark:bg-[#1b1a19]">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
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
		</SectionHero>
	)
}

export default PageProjects
