'use client'

import { motion } from 'framer-motion'
import type { Dictionary } from '@/app/dictionaries'
import { Card, CardContent, CardFooter, CardImage, Chip } from '@/components'
import type { Article } from '@/types'
import { formatDate } from '@/utils'

interface CardArticleProps {
	article: Article
	onClick?: () => void
	dict: Dictionary
}

function CardArticle({
	article: { title, alt, summary, published_at, image },
	onClick,
	dict,
}: Readonly<CardArticleProps>) {
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
			<Card>
				<CardImage src={image ?? ''} alt={alt ?? ''} />
				<CardContent title={title}>
					<p className="line-clamp-4 text-gray-500 text-sm dark:text-gray-400">
						{summary}
					</p>
				</CardContent>
				<CardFooter className="flex flex-wrap gap-2">
					<Chip size="sm">
						{`${dict.blog.card.postedAt} ${formatDate(published_at)}`}
					</Chip>
				</CardFooter>
			</Card>
		</motion.div>
	)
}

export default CardArticle
