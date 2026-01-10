// biome-ignore-all lint/suspicious/noExplicitAny: false positive
import { NextResponse } from 'next/server'
import db from '@/lib/database'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)

		// Pagination
		const page = Number(searchParams.get('page') ?? 1)
		const perPage = Number(searchParams.get('per_page') ?? 10)
		const safePage = page > 0 ? page : 1
		const safePerPage = perPage > 0 ? perPage : 10
		const language = searchParams.get('language')

		if (safePerPage > 100) {
			return NextResponse.json(
				{ error: 'per_page cannot be greater than 100' },
				{ status: 400 },
			)
		}

		if (language && !['it', 'en'].includes(language)) {
			return NextResponse.json(
				{ error: 'Invalid language parameter' },
				{ status: 400 },
			)
		}

		const offset = (safePage - 1) * safePerPage

		// 🔍 Filtri
		const title = searchParams.get('title')
		const author = searchParams.get('author')
		const date = searchParams.get('date')

		// Costruzione dinamica della WHERE
		const whereClauses = [`published = 'true'`]
		const params: any[] = []

		if (title) {
			whereClauses.push(`title LIKE ?`)
			params.push(`%${title}%`)
		}

		if (author) {
			whereClauses.push(`author LIKE ?`)
			params.push(`%${author}%`)
		}

		if (date) {
			whereClauses.push(`published_at >= ? AND published_at <= ?`)
			params.push(date + 'T00:00:00', date + 'T23:59:59')
		}

		if (language) {
			whereClauses.push(`language = ?`)
			params.push(language)
		}

		console.log('WHERE clauses:', whereClauses, 'Params:', params)

		const whereSQL = whereClauses.length
			? `WHERE ${whereClauses.join(' AND ')}`
			: ''

		// Query articoli
		const stmt = db.prepare(`
      SELECT *
      FROM articles
      ${whereSQL}
      ORDER BY id DESC
      LIMIT ? OFFSET ?
    `)

		const articles = stmt.all(...params, safePerPage, offset)

		// Count totale
		const countStmt = db.prepare<any[], { total: number }>(`
      SELECT COUNT(*) AS total
      FROM articles
      ${whereSQL}
    `)

		const total = countStmt.get(...params)?.total ?? 0

		return NextResponse.json({
			page: safePage,
			perPage: safePerPage,
			total,
			totalPages: Math.ceil(total / safePerPage),
			data: articles,
		})
	} catch (err) {
		console.error('Error DB:', err)
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}
