'use client'

import { Card, CardBody, CardFooter, CardHeader, Chip } from '@heroui/react'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/app/dictionaries'
import type { Article } from '@/types'
import { formatDate } from '@/utils'

interface CardBlogProps {
	article: Article
	onClick?: () => void
	dict: Dictionary
}

function CardBlog({
	article: {
		title,
		alt,
		summary,
		published_at,
		image,
	},
	onClick,
	dict,
}: CardBlogProps) {
	const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault()
		onClick?.()
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
					{image ? (
						<img
							alt={alt ?? 'Blog Image'}
							className="aspect-video h-48 w-full object-cover object-top"
							src={`${image}`}
						/>
					) : (
						<div className="flex h-48 w-full items-center justify-center bg-gray-200 dark:bg-slate-700">
							<p className="text-gray-500">No Image</p>
						</div>
					)}
				</CardHeader>
				<CardBody className="flex flex-col gap-2 p-4">
					<h3 className="line-clamp-1 font-bold text-xl">{title}</h3>
					<p className="line-clamp-4 flex-1 text-gray-500 text-sm dark:text-gray-400">
						{summary}
					</p>
				</CardBody>
				<CardFooter className="flex flex-wrap gap-2 px-4 pt-0 pb-4">
					<Chip size="sm" color="primary" variant="flat">
						{`${dict.blog.card.postedAt} ${formatDate(published_at)}`}
					</Chip>
				</CardFooter>
			</Card>
		</motion.div>
	)
}

export default CardBlog
