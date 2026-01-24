import db from '@/lib/database'
import type { Article } from '@/types'

export async function getArticle(id: number, language: 'it' | 'en'): Promise<Article | null> {
    try {
        const idNumber = Number(id)
        if (Number.isNaN(idNumber) || idNumber <= 0) {
            return null
        }

        if (db == null) {
            throw new Error('Database connection is not established.')
        }

        const stmt = db.prepare(`
      SELECT *
      FROM articles
      WHERE id = ? and language = ?
    `)

        const article = stmt.get(idNumber, language)

        if (!article) {
            return null
        }

        return article as Article
    } catch (error) {
        console.error('DB error:', error)
        return null
    }
}
