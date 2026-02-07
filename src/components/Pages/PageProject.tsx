'use client'

import { useRouter } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi2'
import type { Dictionary } from '@/app/dictionaries'
import { Button, Chip, SectionHero } from '@/components'
import type { Project } from '@/types'
import Link from 'next/link'

interface PageProjectProps {
	dict: Dictionary
	project: Project
}

function PageProject({ dict, project }: PageProjectProps) {
	const router = useRouter()

	return (
		<>
			{project && (
				<SectionHero title={project.title}>
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="w-full md:w-1/2">
							{project.image?.src ? (
								<img
									alt={project.image.alt}
									className="h-full w-full rounded-lg border border-gray-300"
									src={project.image.src}
								/>
							) : (
								<div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
									<p className="text-4xl text-gray-500">{'No-Image'}</p>
								</div>
							)}
						</div>
						<div className="flex w-full flex-col gap-4 md:w-1/2">
							<div className="flex items-center gap-2">
								<Button
									className="flex gap-2"
									variant="ghost"
									onClick={() => router.back()}
								>
									<HiArrowLeft className="h-5 w-5" />
									{dict.projects.project.buttons.back}
								</Button>
							</div>
							<div className="mt-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<Chip key={`tag-${tag}`} size="sm">
										{tag}
									</Chip>
								))}
							</div>
							<p className="text-black dark:text-white">{project.description}</p>
							<span className="flex flex-col items-center gap-4 lg:flex-row">
								{project.url && (
									<Link
										href={project.url}
										className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-primary/90"
									>
										{dict.projects.project.link}
									</Link>
								)}
								{project.github && (
									<Link
										href={project.github}
										className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-primary/90"
									>
										{dict.projects.project.github}
									</Link>
								)}
							</span>
						</div>
					</div>
				</SectionHero>
			)}
		</>
	)
}

export default PageProject
