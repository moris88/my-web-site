'use client'

import { Button, Link, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import type { Dictionary } from '@/app/dictionaries'
import { SectionHero, ShareSocial } from '@/components'
import type { Article } from '@/types'
import { formatDate } from '@/utils'

interface PageArticleProps {
	dict: Dictionary
	language: 'it' | 'en'
	id: string
}

function PageArticle({ dict, language, id }: Readonly<PageArticleProps>) {
	console.log('PageArticle', dict, language, id)
	const [article, setArticle] = React.useState<Article | null>()
	const [isPending, startTransition] = React.useTransition()
	const router = useRouter()

	React.useEffect(() => {
		startTransition(() => {
			fetch(`/api/blog/${id}?language=${language}`)
				.then((res) => res.json())
				.then((res) => {
					console.log('Fetched article:', res)
					setArticle(res)
				})
		})
	}, [language, id])

	if (isPending) {
		return <Spinner size="lg" variant="gradient" />
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
					<div className="flex flex-col gap-2">
						<div className="flex flex-col gap-2 md:flex-row">
							{article.created_at && (<small>{`${dict.blog.article.createdAt} ${formatDate(article.created_at)}`}</small>)}
							{article.updated_at && (<small>{`${dict.blog.article.editedAt} ${formatDate(article.updated_at)}`}</small>)}
							{article.published_at && (<small>{`${dict.blog.article.postedAt} ${formatDate(article.published_at)}`}</small>)}
						</div>
						{article.link && (
							<Link isExternal showAnchorIcon href={article.link}>
								{dict.blog.article.link}
							</Link>
						)}
						{article.author && (
							<small>{`${dict.blog.article.author} ${article.author}`}</small>
						)}
					</div>
					<ShareSocial article={article} title={dict.blog.article.shareTitle} />
					<div className="flex justify-end gap-2">
						<Button
							className="flex gap-2"
							color="primary"
							variant="ghost"
							onPress={() => router.back()}
						>
							<HiArrowLeft className="h-5 w-5" />
							{dict.blog.article.buttons.back}
						</Button>
					</div>
				</SectionHero>
			)}
		</>
	)
}

export default PageArticle
