import type { Metadata } from 'next'
import { PageArticle } from '@/components'
import { getArticle } from '@/lib/articles'
import { getDictionary } from '../../../dictionaries'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }> // Deve essere una Promise
}): Promise<Metadata> {
	const { id } = await params // Unwrapping asincrono obbligatorio
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const article = await getArticle(Number(id), language)

	if (!article) {
		return {
			title: 'Article not found',
		}
	}

	const description =
		article.summary || article.content.replace(/<[^>]*>/g, '').substring(0, 150)

	return {
		title: article.title,
		description: description,
		alternates: {
			canonical: `/blog/${id}`,
		},
		openGraph: {
			title: article.title,
			description: description,
			url: `/blog/${id}`,
			images: [
				{
					url: article.image ?? '',
					width: 1200,
					height: 630,
					alt: article.alt ?? '',
				},
			],
			locale: language,
			type: 'article',
			publishedTime: article.published_at,
			authors: [article.author ?? ''],
		},
		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: description,
			images: [article.image ?? ''],
		},
	}
}

export default async function BlogPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>
}>) {
	const { id } = await params
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	return <PageArticle language={language} id={id} dict={dict} />
}
