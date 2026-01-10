import Database from 'better-sqlite3'

const db = new Database('./src/data/database.db', {
	readonly: true,
	fileMustExist: true,
})
export default db
