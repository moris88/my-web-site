'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import { Button, SectionHero, ShareSocial, Spinner } from '@/components'
import type { Article } from '@/types'
import { formatDate } from '@/utils'

interface PageArticleProps {
	dict: Dictionary
	language: 'it' | 'en'
	id: string
}

function PageArticle({ dict, language, id }: Readonly<PageArticleProps>) {
	const [article, setArticle] = React.useState<Article | null>()
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	// Stato per il tasto Scroll to Top
	const [showScrollTop, setShowScrollTop] = React.useState<boolean>(false)

	React.useEffect(() => {
		const handleScrollWindow = () => {
			setShowScrollTop(window.scrollY > 400)
		}
		window.addEventListener('scroll', handleScrollWindow)
		return () => window.removeEventListener('scroll', handleScrollWindow)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	React.useEffect(() => {
		startTransition(() => {
			fetch(`/api/blog/${id}?language=${language}`)
				.then((res) => res.json())
				.then((res) => {
					console.log('Fetched article:', res)
					if (!res || res.error) {
						setArticle(null)
						return
					}
					setArticle(res)
				})
				.catch((err) => {
					console.error('Error fetching article:', err)
					setArticle(null)
				})
		})
	}, [language, id])

	if (isPending) {
		return <Spinner />
	}

	if (article === null) {
		router.push(`/not-found`)
	}

	return (
		<>
			{article && (
				<SectionHero
					image={{ src: article.image ?? '', alt: article.alt ?? '' }}
					html={article.content}
					title={article.title}
				>
					{/* BOTTONE SCROLL TO TOP */}
					<AnimatePresence>
						{showScrollTop && (
							<div className="fixed right-6 bottom-20 z-50 flex">
								<motion.button
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={scrollToTop}
									className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-black/5 transition-colors hover:bg-slate-50 md:h-14 md:w-14 dark:bg-slate-800 dark:ring-white/10 dark:hover:bg-slate-700"
								>
									<ChevronDown className="h-6 w-6 rotate-180 text-primary md:h-7 md:w-7" />
								</motion.button>
							</div>
						)}
					</AnimatePresence>

					<div className="flex flex-col gap-2">
						<div className="flex flex-col gap-2 text-black md:flex-row dark:text-white">
							{article.created_at && (
								<small>{`${dict.blog.article.createdAt} ${formatDate(article.created_at)}`}</small>
							)}
							{article.updated_at && (
								<small>{`${dict.blog.article.editedAt} ${formatDate(article.updated_at)}`}</small>
							)}
							{article.published_at && (
								<small>{`${dict.blog.article.postedAt} ${formatDate(article.published_at)}`}</small>
							)}
						</div>
						{article.link && (
							<Link href={article.link} className="text-black dark:text-white">
								{dict.blog.article.link}
							</Link>
						)}
						{article.author && (
							<small className="text-black dark:text-white">{`${dict.blog.article.author} ${article.author}`}</small>
						)}
					</div>
					<ShareSocial article={article} title={dict.blog.article.shareTitle} />
					<div className="flex justify-end gap-2">
						<Button
							className="flex gap-2"
							variant="ghost"
							onClick={() => router.back()}
						>
							<ArrowLeft className="h-5 w-5" />
							{dict.blog.article.buttons.back}
						</Button>
					</div>
				</SectionHero>
			)}
		</>
	)
}

export default PageArticle
