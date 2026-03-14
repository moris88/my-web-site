'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import type { Dictionary } from '@/app/dictionaries'
import { Button } from '@/components'
import type { Article } from '@/types'
import { formatDate } from '@/utils'

interface FeaturedArticleProps {
	article: Article
	onClick?: () => void
	dict: Dictionary
}

function FeaturedArticle({
	article,
	onClick,
	dict,
}: Readonly<FeaturedArticleProps>) {
	const { title, summary, published_at, image, author, alt } = article

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="group relative my-12 mb-16 cursor-pointer overflow-hidden rounded-4xl bg-white shadow-2xl transition-all duration-500 hover:shadow-primary/20 dark:bg-slate-900/50 dark:backdrop-blur-xl"
			onClick={onClick}
		>
			<div className="flex flex-col md:flex-row md:items-stretch">
				{/* Image Section */}
				<div className="relative h-64 overflow-hidden sm:h-80 md:h-auto md:w-2/5 lg:w-1/2">
					<img
						src={image ?? ''}
						alt={alt ?? title}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-linear-to-r" />
					<div className="absolute bottom-6 left-8 flex items-center gap-2">
						<span className="inline-flex items-center rounded-full bg-primary/90 px-4 py-1.5 font-bold text-[10px] text-white uppercase tracking-widest shadow-lg backdrop-blur-md sm:text-xs">
							<span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-white" />
							{dict.blog.latestPost}
						</span>
					</div>
				</div>

				{/* Content Section */}
				<div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14">
					<div className="mb-4 flex flex-wrap items-center gap-4 text-slate-500 text-xs sm:mb-6 sm:gap-6 sm:text-sm dark:text-slate-400">
						<div className="flex items-center gap-2 transition-colors hover:text-primary">
							<div className="rounded-full bg-slate-100 p-1.5 sm:p-2 dark:bg-slate-800">
								<Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
							</div>
							<span className="font-medium">{formatDate(published_at)}</span>
						</div>
						<div className="flex items-center gap-2 transition-colors hover:text-primary">
							<div className="rounded-full bg-slate-100 p-1.5 sm:p-2 dark:bg-slate-800">
								<User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
							</div>
							<span className="font-medium">
								{author ?? 'Maurizio Tolomeo'}
							</span>
						</div>
					</div>

					<h2 className="mb-4 font-bold text-2xl text-slate-900 leading-tight tracking-tight sm:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
						<span className="bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
							{title}
						</span>
					</h2>

					<p className="mb-6 line-clamp-3 text-base text-slate-600 leading-relaxed sm:mb-10 sm:text-lg lg:text-xl dark:text-slate-300">
						{summary}
					</p>

					<div className="mt-auto">
						<Button
							variant="ghost"
							className="group/btn relative h-12 overflow-hidden rounded-xl px-6 font-bold text-base transition-all hover:pr-10 sm:h-14 sm:rounded-2xl sm:px-8 sm:text-lg"
							onClick={(e) => {
								e.stopPropagation()
								onClick?.()
							}}
						>
							<span className="relative z-10 flex items-center gap-3">
								{dict.blog.readMore}
								<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 sm:h-5 sm:w-5" />
							</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10" />
			<div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10" />
		</motion.div>
	)
}

export default FeaturedArticle
