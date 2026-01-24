import { NextResponse } from 'next/server'
import db from '@/lib/database'
import { getArticle } from '@/lib/articles'

export async function GET(
	request: Request,
	context: { params: Promise<{ id: string }> },
) {
	try {
		// 1. Recupero ID dalla Promise
		const { id } = await context.params

		// 2. Recupero query param ?language=it
		const { searchParams } = new URL(request.url)
		const language = searchParams.get('language')
		console.log('ID:', id)
		console.log('Lingua richiesta:', language)

		// 3. Validazione ID
		const idNumber = Number(id)
		if (Number.isNaN(idNumber) || idNumber <= 0) {
			return NextResponse.json({ error: 'ID not valid' }, { status: 400 })
		}

		// 4. Validazione lingua
		if (language && !['it', 'en'].includes(language)) {
			return NextResponse.json(
				{ error: 'Invalid language parameter' },
				{ status: 400 },
			)
		}

		if (db == null) {
			throw new Error('Database connection is not established.')
		}

		// 5. Query al DB
		const article = await getArticle(idNumber, (language === 'it' || language === 'en') ? language : 'en')

		if (!article) {
			return NextResponse.json({ error: 'Articles not found' }, { status: 404 })
		}

		return NextResponse.json(article)
	} catch (error) {
		console.error('DB error:', error)
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}
