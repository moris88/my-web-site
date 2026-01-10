'use client'

import { Spinner } from '@heroui/spinner'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GrArticle } from 'react-icons/gr'
import type { Dictionary } from '@/app/dictionaries'
import { CardBlog, SectionHero } from '@/components'
import type { Article } from '@/types'
import { generateUniqueId } from '@/utils'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'

interface PageBlogProps {
	dict: Dictionary
	language: 'it' | 'en'
}

function PageBlog({ dict, language }: Readonly<PageBlogProps>) {
	const [articles, setArticles] = React.useState<Article[]>([])
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	// 🔍 FILTRI
	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState('')
	const [date, setDate] = React.useState('')

	// 🔄 Funzione fetch con filtri
	const fetchArticlesWithFilters = React.useCallback(() => {
		startTransition(() => {
			const params = new URLSearchParams({ language })

			if (title) params.set('title', title)
			if (author) params.set('author', author)
			if (date) params.set('date', date)

			fetch(`/api/blog?${params.toString()}`)
				.then((res) => res.json())
				.then((res) => setArticles(res.data))
		})
	}, [language, title, author, date])

	// 🔄 Funzione fetch senza filtri
	const fetchArticles = React.useCallback(() => {
		startTransition(() => {
			const params = new URLSearchParams({ language })

			fetch(`/api/blog?${params.toString()}`)
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
		setAuthor('')
		setDate('')
		fetchArticles()
	}

	if (isPending) {
		return <Spinner size="lg" variant="gradient" />
	}

	return (
		<SectionHero
			title={dict.blog.title}
			subtitle={dict.blog.subtitle}
			icon={<GrArticle className="h-8 w-8 text-primary" />}
		>
			{/* 🔍 UI FILTRI */}
			<div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-4">
				<Input
					type="text"
					label={dict.blog.filters.title}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				{/* <Input
					type="text"
					label={dict.blog.filters.author}
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/> */}

				<Input
					label={dict.blog.filters.date}
					type="date"
					value={date}
					onChange={(e) => setDate(moment(e.target.value).format('YYYY-MM-DD'))}
				/>
			</div>

			{/* 🔘 BOTTONI */}
			<div className="flex gap-4 px-2">
				<Button
					className="flex gap-2"
					color="primary"
					onPress={fetchArticlesWithFilters}
				>
					{dict.blog.filters.buttons.apply}
				</Button>

				<Button
					className="flex gap-2"
					color="primary"
					variant="light"
					onPress={handleReset}
				>
					{dict.blog.filters.buttons.reset}
				</Button>
			</div>

			{/* LISTA ARTICOLI */}
			<div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
				{articles.length === 0 && (
					<p className="col-span-full text-center font-bold">
						{dict.blog.empty}
					</p>
				)}
				{articles
					.toSorted((a: Article, b: Article) =>
						moment(b.published_at).diff(moment(a.published_at)),
					)
					.map((article) => (
						<CardBlog
							key={generateUniqueId()}
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
