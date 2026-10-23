import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-'))

function writeArticle(language: string, id: string, frontmatter: string) {
	const dir = path.join(tmpDir, 'content', 'blog', language)
	fs.mkdirSync(dir, { recursive: true })
	fs.writeFileSync(
		path.join(dir, `${id}.md`),
		`---\n${frontmatter}\n---\n\n## Heading\n\nBody text\n`,
	)
}

let getArticle: typeof import('@/lib/articles').getArticle
let getArticles: typeof import('@/lib/articles').getArticles

beforeAll(async () => {
	writeArticle(
		'it',
		'old',
		"title: Vecchio\nsummary: Sommario\nauthor: Maurizio Tolomeo\npublished_at: '2024-01-01T10:00:00'\npublished: true",
	)
	writeArticle(
		'it',
		'new',
		"title: Nuovo\nsummary: Sommario\npublished_at: '2025-01-01T10:00:00'\npublished: true",
	)
	writeArticle(
		'it',
		'draft',
		"title: Bozza\nsummary: Sommario\npublished_at: '2025-06-01T10:00:00'\npublished: false",
	)
	writeArticle(
		'en',
		'english',
		'title: English\nsummary: Summary\npublished_at: 2024-02-01\npublished: true',
	)

	vi.spyOn(process, 'cwd').mockReturnValue(tmpDir)
	vi.resetModules()
	;({ getArticle, getArticles } = await import('@/lib/articles'))
})

afterAll(() => {
	vi.restoreAllMocks()
	fs.rmSync(tmpDir, { recursive: true, force: true })
})

describe('getArticles', () => {
	it('returns only published articles sorted by date desc', () => {
		expect(getArticles('it').map((a) => a.id)).toEqual(['new', 'old'])
	})

	it('returns articles for the requested language only', () => {
		expect(getArticles('en').map((a) => a.id)).toEqual(['english'])
	})

	it('normalizes unquoted YAML dates to strings', () => {
		const [article] = getArticles('en')
		expect(typeof article.published_at).toBe('string')
		expect(article.created_at).toBe(article.published_at)
	})
})

describe('getArticle', () => {
	it('returns the article with frontmatter and markdown content', () => {
		const article = getArticle('old', 'it')
		expect(article).toMatchObject({
			id: 'old',
			title: 'Vecchio',
			summary: 'Sommario',
			author: 'Maurizio Tolomeo',
			published: true,
		})
		expect(article?.content).toBe('## Heading\n\nBody text')
	})

	it('returns null for a missing article', () => {
		expect(getArticle('missing', 'it')).toBeNull()
	})

	it('returns null for an article in another language', () => {
		expect(getArticle('old', 'en')).toBeNull()
	})

	it('returns null for unpublished articles', () => {
		expect(getArticle('draft', 'it')).toBeNull()
	})

	it('rejects ids that could escape the blog folder', () => {
		expect(getArticle('../../package', 'it')).toBeNull()
	})
})
