'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import type { Dictionary } from '@/app/dictionaries'
import { Button, Input, Label, SectionHero, Select } from '@/components'
import CardProject from '@/components/UI/Cards/Project'
import type { Project } from '@/types'

interface PageProjectsProps {
	dict: Dictionary
	projects: Project[]
}

function PageProjects({ dict, projects }: PageProjectsProps) {
	const router = useRouter()
	const [projectsState, setProjectsState] = React.useState<Project[]>(projects)

	// 🔍 FILTRI
	const [title, setTitle] = React.useState('')
	const [tag, setTag] = React.useState<Set<string>>(new Set())

	// 👁️‍🗨️ Toggle filtri
	const [showFilters, setShowFilters] = React.useState(false)

	const handleClickRow = (project: Project) => {
		router.push(`/projects/${project.id}`)
	}

	const allTags = Array.from(
		new Set(projects.flatMap((project) => project.tags)),
	).sort((a, b) => a.localeCompare(b))

	// 🔄 Funzione fetch con filtri
	const fetchProjectsWithFilters = () => {
		let filteredProjects: Project[] = projects

		if (title) {
			filteredProjects = filteredProjects.filter((project) =>
				project.title.toLowerCase().includes(title.toLowerCase()),
			)
		}

		console.log({ projects, tag, title })

		const tags = Array.from(tag)
		if (tags.length > 0) {
			filteredProjects = filteredProjects.filter((project) =>
				tags.every((t) => project.tags.includes(t)),
			)
		}

		console.log({ filteredProjects })

		setProjectsState(filteredProjects)
	}

	const handleReset = () => {
		setTitle('')
		setTag(new Set([]))
		setProjectsState(projects)
	}

	return (
		<SectionHero
			icon={<FaLaptopCode className="h-8 w-8 text-primary" />}
			title={dict.projects.title}
			subtitle={dict.projects.subtitle}
		>
			{/* 🔘 Bottone toggle */}
			{!showFilters && (
				<div className="mb-4 flex justify-center">
					<Button
						color="primary"
						onClick={() => setShowFilters((prev) => !prev)}
					>
						{dict.projects.filters.buttons.show}
					</Button>
				</div>
			)}

			{/* 🔍 UI FILTRI con animazione */}
			<AnimatePresence>
				{showFilters && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.25, ease: 'easeOut' }}
						className="flex flex-col items-center justify-center gap-4 md:flex-row"
					>
						<Label
							className="w-full flex-1"
							label={dict.projects.filters.title.label}
						>
							<Input
								type="text"
								placeholder={dict.projects.filters.title.placeholder}
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Label>

						<Label
							className="w-full flex-1"
							label={dict.projects.filters.tags.label}
						>
							<Select
								multiple
								placeholder={dict.projects.filters.tags.placeholder}
								options={allTags.map((tag) => ({ value: tag, label: tag }))}
								value={Array.from(tag)}
								onChange={(value) => setTag(new Set(value as string[]))}
							/>
						</Label>

						<div className="flex items-center gap-2">
							<Button
								className="flex w-full gap-2"
								onClick={fetchProjectsWithFilters}
							>
								{dict.projects.filters.buttons.apply}
							</Button>
							<Button variant="outline" onClick={handleReset}>
								{dict.projects.filters.buttons.reset}
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<section className="min-h-screen w-full dark:bg-[#1b1a19]">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
					<div className="grid grid-cols-1 items-stretch gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
						{projectsState.map((project) => (
							<CardProject
								key={`project-${project.id}`}
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
