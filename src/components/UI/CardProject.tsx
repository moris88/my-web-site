'use client'

import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'
import { motion } from 'framer-motion'

import type { Project } from '@/types'

interface CardProjectProps {
	project: Project
	onClick?: (_project: Project) => void
}

function CardProject({ project, onClick }: CardProjectProps) {
	const { title, image, tags, description } = project
	const handleOnClick = () => {
		onClick?.(project)
	}

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="h-full w-full cursor-pointer"
			onClick={handleOnClick}
		>
			<Card className="h-full w-full border-none bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800 dark:shadow-slate-900/50">
				<CardHeader className="p-0">
					{image?.src ? (
						<img
							alt={image.alt}
							className="h-48 w-full object-cover object-top"
							src={image.src}
						/>
					) : (
						<div className="flex h-48 w-full items-center justify-center bg-gray-200 dark:bg-slate-700">
							<p className="text-gray-500">No Image</p>
						</div>
					)}
				</CardHeader>
				<CardBody className="flex flex-col gap-2 p-4">
					<h3 className="line-clamp-1 font-bold text-xl">{title}</h3>
					<p className="line-clamp-2 text-gray-500 text-sm dark:text-gray-400">
						{description}
					</p>
				</CardBody>
				<CardFooter className="flex flex-wrap gap-2 px-4 pb-4 pt-0">
					{tags.map((tag) => (
						<Chip key={`tag-${tag}`} size="sm" color="primary" variant="flat">
							{tag}
						</Chip>
					))}
				</CardFooter>
			</Card>
		</motion.div>
	)
}

export default CardProject
