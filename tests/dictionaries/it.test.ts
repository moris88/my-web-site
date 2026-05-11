import { describe, expect, it } from 'vitest'
import enDictionary from '@/app/dictionaries/en'
import itDictionary from '@/app/dictionaries/it'

describe('Italian dictionary', () => {
  it('has correct language metadata', () => {
    expect(itDictionary.language).toBe('Italiano')
    expect(itDictionary.lang).toBe('it')
  })

  it('has navigation strings', () => {
    const { navbar } = itDictionary
    expect(navbar).toHaveProperty('blog')
    expect(navbar).toHaveProperty('experience')
    expect(navbar).toHaveProperty('skills')
    expect(navbar).toHaveProperty('projects')
    expect(navbar).toHaveProperty('contacts')
    expect(navbar).toHaveProperty('curriculum')
  })

  it('has home section with all keys', () => {
    const { home } = itDictionary
    expect(home).toHaveProperty('navigate')
    expect(home).toHaveProperty('whoAmITitle')
    expect(home).toHaveProperty('whatIDoTitle')
    expect(home.links).toHaveProperty('skills')
    expect(home.links).toHaveProperty('blog')
  })

  it('has contacts section with full form', () => {
    const { contacts } = itDictionary
    expect(contacts).toHaveProperty('title')
    expect(contacts.form.name).toHaveProperty('label')
    expect(contacts.form.name).toHaveProperty('required')
    expect(contacts.form.email).toHaveProperty('label')
    expect(contacts.form.message).toHaveProperty('label')
  })

  it('skills legend has 4 levels', () => {
    expect(itDictionary.skills.legend.list).toHaveLength(4)
  })

  it('quiz results cover all 6 developer categories', () => {
    const categories = ['frontend', 'backend', 'fullstack', 'desktop', 'mobile', 'database'] as const
    for (const cat of categories) {
      expect(itDictionary.quiz.results[cat]).toHaveProperty('title')
      expect(itDictionary.quiz.results[cat]).toHaveProperty('description')
    }
  })

  it('has not_found section', () => {
    expect(itDictionary.not_found).toHaveProperty('title')
    expect(itDictionary.not_found).toHaveProperty('message')
    expect(itDictionary.not_found).toHaveProperty('button')
  })

  it('has the same top-level keys as English dictionary', () => {
    const itKeys = Object.keys(itDictionary).sort()
    const enKeys = Object.keys(enDictionary).sort()
    expect(itKeys).toEqual(enKeys)
  })

  it('has the same navbar keys as English dictionary', () => {
    const itNavKeys = Object.keys(itDictionary.navbar).sort()
    const enNavKeys = Object.keys(enDictionary.navbar).sort()
    expect(itNavKeys).toEqual(enNavKeys)
  })

  it('has the same quiz result categories as English dictionary', () => {
    const itResultKeys = Object.keys(itDictionary.quiz.results).sort()
    const enResultKeys = Object.keys(enDictionary.quiz.results).sort()
    expect(itResultKeys).toEqual(enResultKeys)
  })

  it('lang differs from English', () => {
    expect(itDictionary.lang).not.toBe(enDictionary.lang)
    expect(itDictionary.language).not.toBe(enDictionary.language)
  })
})
