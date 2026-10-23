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
	ScrollToTop,
	SectionHero,
	Select,
} from '@/components'
import { CardArticle, FeaturedArticle } from '@/components/UI/Cards'
import { useScrollTop } from '@/hooks'
import type { Article } from '@/types'

interface PageBlogProps {
	dict: Dictionary
	articles: Article[]
}

interface Filters {
	title: string
	author: string | null
	date: string
}

const EMPTY_FILTERS: Filters = { title: '', author: null, date: '' }

function filterArticles(articles: Article[], filters: Filters): Article[] {
	const title = filters.title.toLowerCase()
	const author = filters.author?.toLowerCase()
	return articles.filter(
		(article) =>
			(!title || article.title.toLowerCase().includes(title)) &&
			(!author || (article.author ?? '').toLowerCase().includes(author)) &&
			(!filters.date ||
				moment(article.published_at).format('YYYY-MM-DD') === filters.date),
	)
}

function PageBlog({ dict, articles: allArticles }: Readonly<PageBlogProps>) {
	const [appliedFilters, setAppliedFilters] =
		React.useState<Filters>(EMPTY_FILTERS)
	const router = useRouter()

	// 🔍 FILTRI
	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState<string | null>(null)
	const [date, setDate] = React.useState('')

	// 👁️‍🗨️ Toggle filtri
	const [showFilters, setShowFilters] = React.useState(false)

	// 🖱️ Gestione Scroll Pulsante (Soglia più bassa per evitare che sparisca sopra)
	const { showScrollTop: isScrolled } = useScrollTop(200)

	// 🔍 Applica filtri
	const handleApply = () => {
		setAppliedFilters({ title, author, date })
	}

	// ♻️ Reset filtri
	const handleReset = () => {
		setTitle('')
		setAuthor(null)
		setDate('')
		setAppliedFilters(EMPTY_FILTERS)
	}

	// 📊 Articoli filtrati (già ordinati per data di pubblicazione)
	const articles = React.useMemo(
		() => filterArticles(allArticles, appliedFilters),
		[allArticles, appliedFilters],
	)

	// 🎯 Articolo in evidenza (il più recente)
	const featuredArticle = articles[0]
	const remainingArticles = articles.slice(1)

	// 🔍 Controllo se i filtri sono attivi
	const isFiltering =
		appliedFilters.title !== '' ||
		appliedFilters.author !== null ||
		appliedFilters.date !== ''

	return (
		<SectionHero
			title={dict.blog.title}
			subtitle={dict.blog.subtitle}
			icon={<FileText className="h-8 w-8 text-primary" />}
		>
			<div className="flex flex-col gap-12">
				{/* 🌟 FEATURED ARTICLE */}
				{featuredArticle && !isFiltering && (
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
				<ScrollToTop />

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
										onClick={handleApply}
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
					{articles.length === 0 && (
						<p className="col-span-full py-20 text-center font-bold text-slate-400 text-xl">
							{dict.blog.empty}
						</p>
					)}

					{(isFiltering ? articles : remainingArticles).map((article) => (
						<CardArticle
							key={`article-${article.id}`}
							article={article}
							dict={dict}
							onClick={() => router.push(`/blog/${article.id}`)}
						/>
					))}
				</div>
			</div>
		</SectionHero>
	)
}

export default PageBlog
