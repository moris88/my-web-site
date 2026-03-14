'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, FileText } from 'lucide-react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import {
	Button,
	Input,
	Label,
	SectionHero,
	Select,
	Skeleton,
} from '@/components'
import { CardArticle, FeaturedArticle } from '@/components/UI/Cards'
import type { Article } from '@/types'

interface PageBlogProps {
	dict: Dictionary
	language: 'it' | 'en'
}

function PageBlog({ dict, language }: Readonly<PageBlogProps>) {
	const [articles, setArticles] = React.useState<Article[]>()
	const [isPending, startTransition] = React.useTransition()
	const [error, setError] = React.useState<string | null>(null)
	const router = useRouter()

	// 🔍 FILTRI
	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState<string | null>(null)
	const [date, setDate] = React.useState('')

	// 👁️‍🗨️ Toggle filtri
	const [showFilters, setShowFilters] = React.useState(false)

	// 🖱️ Gestione Scroll Pulsante
	const [isScrolled, setIsScrolled] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			// Soglia più bassa per evitare che sparisca sopra
			setIsScrolled(window.scrollY > 200)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// 🔄 Funzione fetch con filtri
	const fetchArticlesWithFilters = React.useCallback(() => {
		startTransition(async () => {
			const params = new URLSearchParams({ language })

			if (title) params.set('title', title)
			if (author) params.set('author', author)
			if (date) params.set('date', date)

			await fetch(`/api/blog?${params.toString()}`)
				.then((res) => {
					if (!res.ok) {
						throw new Error(`${res.status} ${res.statusText}`)
					}
					return res.json()
				})
				.then((res) => setArticles(res.data))
				.catch((err) => {
					console.error('Error fetching articles with filters:', err)
					setError(err.message || 'Unknown error fetching!')
					setArticles([])
				})
		})
	}, [language, title, author, date])

	// 🔄 Funzione fetch senza filtri
	const fetchArticles = React.useCallback(() => {
		startTransition(async () => {
			const params = new URLSearchParams({ language })

			await fetch(`/api/blog?${params.toString()}`)
				.then((res) => {
					if (!res.ok) {
						throw new Error(`${res.status} ${res.statusText}`)
					}
					return res.json()
				})
				.then((res) => setArticles(res.data))
				.catch((err) => {
					console.error('Error fetching articles:', err)
					setError(err.message || 'Unknown error fetching!')
					setArticles([])
				})
		})
	}, [language])

	// ⏱️ Fetch iniziale
	React.useEffect(() => {
		fetchArticles()
	}, [fetchArticles])

	// ♻️ Reset filtri
	const handleReset = () => {
		setTitle('')
		setAuthor(null)
		setDate('')
		fetchArticles()
	}

	// 📊 Articoli ordinati
	const sortedArticles = React.useMemo(() => {
		return (articles ?? []).toSorted((a: Article, b: Article) =>
			moment(b.published_at).diff(moment(a.published_at)),
		)
	}, [articles])

	// 🎯 Articolo in evidenza (il più recente)
	const featuredArticle = sortedArticles[0]
	const remainingArticles = sortedArticles.slice(1)

	// 🔍 Controllo se i filtri sono attivi
	const isFiltering = title !== '' || author !== null || date !== ''

	if (error) {
		throw new Error(error)
	}

	return (
		<SectionHero
			title={dict.blog.title}
			subtitle={dict.blog.subtitle}
			icon={<FileText className="h-8 w-8 text-primary" />}
		>
			<div className="flex flex-col gap-12">
				{/* 🌟 FEATURED ARTICLE */}
				{!isPending && featuredArticle && !isFiltering && (
					<div className="relative">
						<FeaturedArticle
							article={featuredArticle}
							dict={dict}
							onClick={() => router.push(`/blog/${featuredArticle.id}`)}
						/>
						{/* 🖱️ Scroll Down Button (Solo Desktop, visibile solo quando in cima) */}
						{!isScrolled && (
							<div className="absolute -bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:flex">
								<motion.button
									layoutId="scroll-button"
									onClick={() =>
										document
											.getElementById('articles-section')
											?.scrollIntoView({ behavior: 'smooth' })
									}
									animate={{ y: [0, 10, 0] }}
									transition={{
										y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
									}}
									className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl transition-colors hover:bg-slate-50 dark:bg-slate-800 dark:ring-white/10 dark:hover:bg-slate-700"
								>
									<ChevronDown className="h-7 w-7 text-primary" />
								</motion.button>
							</div>
						)}
					</div>
				)}

				{/* 🖱️ Scroll Up Button (Fixed, appare quando si scende o se non c'è FeaturedArticle) */}
				<AnimatePresence>
					{isScrolled && (
						<div className="fixed right-10 bottom-18 z-50 hidden md:flex">
							<motion.button
								layoutId="scroll-button"
								initial={{ opacity: 0, scale: 0, rotate: 0 }}
								animate={{ opacity: 1, scale: 1, rotate: 180 }}
								exit={{ opacity: 0, scale: 0, rotate: 0 }}
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-black/5 transition-colors hover:bg-slate-50 dark:bg-slate-800 dark:ring-white/10 dark:hover:bg-slate-700"
							>
								<ChevronDown className="h-7 w-7 text-primary" />
							</motion.button>
						</div>
					)}
				</AnimatePresence>

				{/* 🔍 SEZIONE FILTRI */}
				<div id="articles-section" className="flex scroll-mt-24 flex-col gap-6">
					{!showFilters && (
						<div className="flex justify-center">
							<Button
								variant="outline"
								className="rounded-full px-8"
								onClick={() => setShowFilters((prev) => !prev)}
							>
								{dict.blog.filters.buttons.show}
							</Button>
						</div>
					)}

					<AnimatePresence>
						{showFilters && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-slate-50 p-6 md:flex-row dark:bg-slate-900/50"
							>
								<Label
									className="w-full flex-1"
									label={dict.blog.filters.title.label}
								>
									<Input
										placeholder={dict.blog.filters.title.placeholder}
										type="text"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</Label>

								<Label
									className="w-full flex-1"
									label={dict.blog.filters.date.label}
								>
									<Input
										placeholder={dict.blog.filters.date.placeholder}
										type="date"
										value={date}
										onChange={(e) =>
											setDate(moment(e.target.value).format('YYYY-MM-DD'))
										}
									/>
								</Label>

								<Label
									className="w-full flex-1"
									label={dict.blog.filters.author.label}
								>
									<Select
										options={[
											{ value: 'Maurizio Tolomeo', label: 'Maurizio Tolomeo' },
										]}
										placeholder={dict.blog.filters.author.placeholder}
										value={author ?? ''}
										onChange={(value) => setAuthor(value as string | null)}
									/>
								</Label>

								<div className="flex w-full items-center gap-2 md:w-auto">
									<Button
										className="flex-1 gap-2 rounded-xl md:flex-none"
										onClick={fetchArticlesWithFilters}
									>
										{dict.blog.filters.buttons.apply}
									</Button>
									<Button
										variant="outline"
										className="rounded-xl"
										onClick={handleReset}
									>
										{dict.blog.filters.buttons.reset}
									</Button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* GRID ARTICOLI */}
				<div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
					{!articles && <p className="col-span-full">{''}</p>}
					{articles?.length === 0 && (
						<p className="col-span-full py-20 text-center font-bold text-slate-400 text-xl">
							{dict.blog.empty}
						</p>
					)}

					{isPending &&
						[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
							<Skeleton key={i} className="h-100 rounded-3xl" />
						))}

					{!isPending &&
						(isFiltering ? sortedArticles : remainingArticles).map(
							(article) => (
								<CardArticle
									key={`article-${article.id}`}
									article={article}
									dict={dict}
									onClick={() => router.push(`/blog/${article.id}`)}
								/>
							),
						)}
				</div>
			</div>
		</SectionHero>
	)
}

export default PageBlog
