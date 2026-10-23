import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Article } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// L'id dell'articolo è il nome del file senza estensione (es. "2" o "mio-articolo")
const VALID_ID = /^[a-z0-9-]+$/i

// gray-matter converte le date YAML non quotate in oggetti Date
function toDateString(value: unknown): string {
	if (value instanceof Date) return value.toISOString()
	return value == null ? '' : String(value)
}

function readArticle(filePath: string, id: string): Article {
	const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
	const publishedAt = toDateString(data.published_at)
	return {
		id,
		title: String(data.title ?? id),
		summary: String(data.summary ?? ''),
		content: content.trim(),
		created_at: toDateString(data.created_at) || publishedAt,
		updated_at: toDateString(data.updated_at) || publishedAt,
		published_at: publishedAt,
		published: data.published === true || data.published === 'true',
		link: data.link,
		image: data.image,
		alt: data.alt,
		author: data.author,
	}
}

export function getArticles(language: 'it' | 'en'): Article[] {
	const dir = path.join(BLOG_DIR, language)
	if (!fs.existsSync(dir)) return []

	return fs
		.readdirSync(dir)
		.filter((file) => file.endsWith('.md'))
		.map((file) => readArticle(path.join(dir, file), file.replace(/\.md$/, '')))
		.filter((article) => article.published)
		.sort(
			(a, b) =>
				new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
		)
}

export function getArticle(id: string, language: 'it' | 'en'): Article | null {
	if (!VALID_ID.test(id)) return null

	const filePath = path.join(BLOG_DIR, language, `${id}.md`)
	if (!fs.existsSync(filePath)) return null

	const article = readArticle(filePath, id)
	return article.published ? article : null
}
