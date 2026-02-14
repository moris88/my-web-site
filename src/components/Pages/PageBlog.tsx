'use client'

import { AnimatePresence, motion } from 'framer-motion'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GrArticle } from 'react-icons/gr'
import type { Dictionary } from '@/app/dictionaries'
import {
	Button,
	Input,
	Label,
	SectionHero,
	Select,
	Skeleton,
} from '@/components'
import CardArticle from '@/components/UI/Cards/Article'
import type { Article } from '@/types'

interface PageBlogProps {
	dict: Dictionary
	language: 'it' | 'en'
}

function PageBlog({ dict, language }: Readonly<PageBlogProps>) {
	const [articles, setArticles] = React.useState<Article[]>()
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	// 🔍 FILTRI
	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState<string | null>(null)
	const [date, setDate] = React.useState('')

	// 👁️‍🗨️ Toggle filtri
	const [showFilters, setShowFilters] = React.useState(false)

	// 🔄 Funzione fetch con filtri
	const fetchArticlesWithFilters = React.useCallback(() => {
		startTransition(async () => {
			const params = new URLSearchParams({ language })

			if (title) params.set('title', title)
			if (author) params.set('author', author)
			if (date) params.set('date', date)

			await fetch(`/api/blog?${params.toString()}`)
				.then((res) => res.json())
				.then((res) => setArticles(res.data))
				.catch((error) => {
					console.error('Error fetching articles with filters:', error)
					setArticles([])
				})
		})
	}, [language, title, author, date])

	// 🔄 Funzione fetch senza filtri
	const fetchArticles = React.useCallback(() => {
		startTransition(async () => {
			const params = new URLSearchParams({ language })

			await fetch(`/api/blog?${params.toString()}`)
				.then((res) => res.json())
				.then((res) => setArticles(res.data))
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

	return (
		<SectionHero
			title={dict.blog.title}
			subtitle={dict.blog.subtitle}
			icon={<GrArticle className="h-8 w-8 text-primary" />}
		>
			{/* 🔘 Bottone toggle */}
			{!showFilters && (
				<div className="mb-4 flex justify-center">
					<Button onClick={() => setShowFilters((prev) => !prev)}>
						{dict.blog.filters.buttons.show}
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

						<div className="flex items-center gap-2">
							<Button
								className="flex w-full gap-2"
								onClick={fetchArticlesWithFilters}
							>
								{dict.blog.filters.buttons.apply}
							</Button>
							<Button variant="outline" onClick={handleReset}>
								{dict.blog.filters.buttons.reset}
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* LISTA ARTICOLI */}
			<div className="grid grid-cols-1 items-stretch gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
				{!articles && <p className="col-span-full">{''}</p>}
				{articles?.length === 0 && (
					<p className="col-span-full text-center font-bold">
						{dict.blog.empty}
					</p>
				)}
				{}
				{isPending &&
					[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<Skeleton key={i} className="h-96" />
					))}
				{!isPending &&
					articles
						?.toSorted((a: Article, b: Article) =>
							moment(b.published_at).diff(moment(a.published_at)),
						)
						.map((article) => (
							<CardArticle
								key={`article-${article.id}`}
								article={article}
								dict={dict}
								onClick={() => router.push(`/blog/${article.id}`)}
							/>
						))}
			</div>
		</SectionHero>
	)
}

export default PageBlog
