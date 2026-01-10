import fs from 'node:fs'
import type BetterSqlite3 from 'better-sqlite3'
import Database from 'better-sqlite3'

const dbPath = 'public/database.db'

console.log('DB exists?', fs.existsSync(dbPath))
console.log('DB path:', dbPath)

let db: BetterSqlite3.Database | null = null

try {
	db = new Database(dbPath, {
		readonly: true,
		fileMustExist: true,
	})
} catch (error) {
	console.error('Error connecting to the database:', error)
}
if (db == null) {
	console.log('Failed to connect to the database.')
} else {
	console.log('Database connection established.')
}
export default db
