import { describe, expect, it } from 'vitest'
import dictionary from '@/app/dictionaries/en'

describe('English dictionary', () => {
	it('has correct language metadata', () => {
		expect(dictionary.language).toBe('English')
		expect(dictionary.lang).toBe('en')
	})

	it('has navigation strings', () => {
		const { navbar } = dictionary
		expect(navbar).toHaveProperty('blog')
		expect(navbar).toHaveProperty('experience')
		expect(navbar).toHaveProperty('skills')
		expect(navbar).toHaveProperty('projects')
		expect(navbar).toHaveProperty('contacts')
		expect(navbar).toHaveProperty('curriculum')
	})

	it('has home section with all keys', () => {
		const { home } = dictionary
		expect(home).toHaveProperty('navigate')
		expect(home).toHaveProperty('whoAmITitle')
		expect(home).toHaveProperty('whatIDoTitle')
		expect(home).toHaveProperty('whatISpecializeInTitle')
		expect(home.links).toHaveProperty('skills')
		expect(home.links).toHaveProperty('blog')
	})

	it('has contacts section with full form', () => {
		const { contacts } = dictionary
		expect(contacts).toHaveProperty('title')
		expect(contacts.form.name).toHaveProperty('label')
		expect(contacts.form.name).toHaveProperty('placeholder')
		expect(contacts.form.name).toHaveProperty('required')
		expect(contacts.form.email).toHaveProperty('label')
		expect(contacts.form.message).toHaveProperty('label')
	})

	it('skills legend has 4 levels', () => {
		expect(dictionary.skills.legend.list).toHaveLength(4)
		for (const item of dictionary.skills.legend.list) {
			expect(item).toHaveProperty('color')
			expect(item).toHaveProperty('label')
			expect(item).toHaveProperty('level')
		}
	})

	it('quiz results cover all 6 developer categories', () => {
		const categories = [
			'frontend',
			'backend',
			'fullstack',
			'desktop',
			'mobile',
			'database',
		] as const
		for (const cat of categories) {
			const result = dictionary.quiz.results[cat]
			expect(result).toHaveProperty('title')
			expect(result).toHaveProperty('description')
			expect(Array.isArray(result.reasons)).toBe(true)
			expect(result.reasons.length).toBeGreaterThan(0)
		}
	})

	it('has not_found section', () => {
		expect(dictionary.not_found).toHaveProperty('title')
		expect(dictionary.not_found).toHaveProperty('message')
		expect(dictionary.not_found).toHaveProperty('button')
	})

	it('has blog section with filters and article keys', () => {
		expect(dictionary.blog).toHaveProperty('title')
		expect(dictionary.blog.filters.buttons).toHaveProperty('apply')
		expect(dictionary.blog.filters.buttons).toHaveProperty('reset')
		expect(dictionary.blog.article).toHaveProperty('shareTitle')
	})

	it('has projects section with filters', () => {
		expect(dictionary.projects).toHaveProperty('title')
		expect(dictionary.projects.filters.buttons).toHaveProperty('reset')
		expect(dictionary.projects.filters.buttons).toHaveProperty('apply')
	})

	it('has curriculum section with terms', () => {
		expect(dictionary.curriculum).toHaveProperty('title')
		expect(dictionary.curriculum).toHaveProperty('download')
		expect(Array.isArray(dictionary.curriculum.terms.items)).toBe(true)
	})
})
