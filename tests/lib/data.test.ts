import { describe, expect, it } from 'vitest'
import {
	getContacts,
	getCV,
	getHistory,
	getInfo,
	getLinks,
	getProjects,
	getQuiz,
	getSkills,
} from '@/lib/data'

describe('getLinks', () => {
	it('returns a non-empty array', async () => {
		const links = await getLinks()
		expect(Array.isArray(links)).toBe(true)
		expect(links.length).toBeGreaterThan(0)
	})

	it('each link has label, name and url', async () => {
		const links = await getLinks()
		for (const link of links) {
			expect(link).toHaveProperty('label')
			expect(link).toHaveProperty('name')
			expect(link).toHaveProperty('url')
			expect(typeof link.url).toBe('string')
		}
	})
})

describe('getInfo', () => {
	it('returns an object with name and job', async () => {
		const info = await getInfo()
		expect(info).toHaveProperty('name')
		expect(info).toHaveProperty('job')
		expect(typeof info.name).toBe('string')
		expect(typeof info.job).toBe('string')
	})

	it('has services array', async () => {
		const info = await getInfo()
		expect(Array.isArray(info.services)).toBe(true)
		expect(info.services.length).toBeGreaterThan(0)
	})

	it('has whoAmIDescription in both languages', async () => {
		const info = await getInfo()
		expect(info.whoAmIDescription).toHaveProperty('it')
		expect(info.whoAmIDescription).toHaveProperty('en')
	})
})

describe('getContacts', () => {
	it('returns Italian contacts with required fields', async () => {
		const contacts = await getContacts('it')
		expect(contacts).toHaveProperty('firstName')
		expect(contacts).toHaveProperty('lastName')
		expect(contacts).toHaveProperty('email')
		expect(contacts).toHaveProperty('links')
		expect(Array.isArray(contacts.links)).toBe(true)
	})

	it('returns English contacts with required fields', async () => {
		const contacts = await getContacts('en')
		expect(contacts).toHaveProperty('firstName')
		expect(contacts).toHaveProperty('email')
	})

	it('both languages have the same firstName', async () => {
		const it = await getContacts('it')
		const en = await getContacts('en')
		expect(it.firstName).toBe(en.firstName)
	})
})

describe('getSkills', () => {
	it('returns all required skill categories', async () => {
		const skills = await getSkills()
		const expected = [
			'languages',
			'frontends',
			'frameworks_frontend',
			'database',
			'frameworks_backend',
			'tools',
			'platforms',
			'soft',
		]
		for (const cat of expected) {
			expect(skills).toHaveProperty(cat)
		}
	})

	it('each category has a list array and description', async () => {
		const skills = await getSkills()
		expect(Array.isArray(skills.languages.list)).toBe(true)
		expect(skills.languages.list.length).toBeGreaterThan(0)
		expect(skills.languages.description).toHaveProperty('it')
		expect(skills.languages.description).toHaveProperty('en')
	})
})

describe('getCV', () => {
	it('returns curriculum with educations and experiences for Italian', async () => {
		const cv = await getCV('it')
		expect(cv).toHaveProperty('educations')
		expect(cv).toHaveProperty('experiences')
		expect(Array.isArray(cv.educations)).toBe(true)
		expect(Array.isArray(cv.experiences)).toBe(true)
	})

	it('returns curriculum for English', async () => {
		const cv = await getCV('en')
		expect(cv).toHaveProperty('educations')
		expect(cv).toHaveProperty('experiences')
	})
})

describe('getHistory', () => {
	it('returns history with title, it and en sections', async () => {
		const history = await getHistory()
		expect(history).toHaveProperty('title')
		expect(history).toHaveProperty('it')
		expect(history).toHaveProperty('en')
		expect(Array.isArray(history.it)).toBe(true)
		expect(Array.isArray(history.en)).toBe(true)
	})

	it('title has both languages', async () => {
		const history = await getHistory()
		expect(history.title).toHaveProperty('it')
		expect(history.title).toHaveProperty('en')
	})

	it('history entries have an id and description', async () => {
		const history = await getHistory()
		expect(history.it.length).toBeGreaterThan(0)
		expect(history.it[0]).toHaveProperty('id')
		expect(history.it[0]).toHaveProperty('description')
	})
})

describe('getProjects', () => {
	it('returns projects array for Italian', async () => {
		const projects = await getProjects('it')
		expect(Array.isArray(projects)).toBe(true)
		expect(projects.length).toBeGreaterThan(0)
	})

	it('returns projects array for English', async () => {
		const projects = await getProjects('en')
		expect(Array.isArray(projects)).toBe(true)
	})

	it('each project has required fields', async () => {
		const projects = await getProjects('it')
		for (const p of projects) {
			expect(p).toHaveProperty('id')
			expect(p).toHaveProperty('title')
			expect(p).toHaveProperty('description')
			expect(p).toHaveProperty('tags')
			expect(Array.isArray(p.tags)).toBe(true)
		}
	})
})

describe('getQuiz', () => {
	it('returns an object with a quiz array', async () => {
		const result = await getQuiz()
		expect(result).toHaveProperty('quiz')
		expect(Array.isArray(result.quiz)).toBe(true)
		expect(result.quiz.length).toBeGreaterThan(0)
	})

	it('each question has question and answers', async () => {
		const result = await getQuiz()
		for (const q of result.quiz) {
			expect(q).toHaveProperty('question')
			expect(q.question).toHaveProperty('it')
			expect(q.question).toHaveProperty('en')
			expect(Array.isArray(q.answers)).toBe(true)
			expect(q.answers.length).toBeGreaterThan(0)
		}
	})
})
