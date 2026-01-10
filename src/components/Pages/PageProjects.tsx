'use client'

import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Select, SelectItem } from '@heroui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
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
						variant="flat"
						onPress={() => setShowFilters((prev) => !prev)}
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
						<div className="w-full flex-1">
							<Input
								type="text"
								label={dict.projects.filters.title}
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>

						<div className="w-full flex-1">
							<Select
								label={dict.projects.filters.tags}
								selectedKeys={tag}
								selectionMode="multiple"
								onSelectionChange={(setTags) => setTag(setTags as Set<string>)}
							>
								{allTags.map((tag) => (
									<SelectItem key={tag}>{tag}</SelectItem>
								))}
							</Select>
						</div>

						<div className="flex items-center gap-2">
							<Button
								className="flex w-full gap-2"
								color="primary"
								onPress={fetchProjectsWithFilters}
							>
								{dict.projects.filters.buttons.apply}
							</Button>
							<Button
								className="flex w-full gap-2"
								color="primary"
								variant="light"
								onPress={handleReset}
							>
								{dict.projects.filters.buttons.reset}
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<section className="min-h-screen w-full dark:bg-[#1b1a19]">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
					<div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
						{projectsState.map((project) => (
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
