// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import {
  addAtSymbol,
  formatDate,
  isActive,
  priorityItems,
  setThemeDocument,
} from '@/utils/utils'

describe('priorityItems', () => {
  it('contains the four priorities in order', () => {
    expect(priorityItems).toEqual(['urgent', 'high', 'medium', 'low'])
  })

  it('has 4 items', () => {
    expect(priorityItems).toHaveLength(4)
  })
})

describe('isActive', () => {
  it('returns true when both paths are /', () => {
    expect(isActive('/', '/')).toBe(true)
  })

  it('returns false when path is / but currentPath is not', () => {
    expect(isActive('/blog', '/')).toBe(false)
    expect(isActive('/skills', '/')).toBe(false)
  })

  it('returns true when currentPath starts with path', () => {
    expect(isActive('/blog/article-1', '/blog')).toBe(true)
    expect(isActive('/projects/42', '/projects')).toBe(true)
  })

  it('returns true for exact match', () => {
    expect(isActive('/contacts', '/contacts')).toBe(true)
    expect(isActive('/skills', '/skills')).toBe(true)
  })

  it('returns false for unrelated paths', () => {
    expect(isActive('/skills', '/blog')).toBe(false)
    expect(isActive('/contacts', '/projects')).toBe(false)
  })
})

describe('formatDate', () => {
  it('returns empty string for undefined', () => {
    expect(formatDate(undefined)).toBe('')
  })

  it('returns empty string for empty string', () => {
    expect(formatDate('')).toBe('')
  })

  it('formats a date to DD/MM/YYYY HH:mm', () => {
    expect(formatDate('2024-06-01T08:00:00')).toBe('01/06/2024 08:00')
  })

  it('formats another date correctly', () => {
    expect(formatDate('2023-12-25T15:45:00')).toBe('25/12/2023 15:45')
  })

  it('matches the expected format pattern', () => {
    const result = formatDate('2024-01-15T10:30:00')
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/)
  })
})

describe('addAtSymbol', () => {
  it('returns "Not provided" for null', () => {
    expect(addAtSymbol(null, '@')).toBe('Not provided')
  })

  it('returns "Not provided" for empty string', () => {
    expect(addAtSymbol('', '@')).toBe('Not provided')
  })

  it('prepends symbol if not already present', () => {
    expect(addAtSymbol('user', '@')).toBe('@user')
    expect(addAtSymbol('issue', '#')).toBe('#issue')
  })

  it('does not prepend if symbol is already present', () => {
    expect(addAtSymbol('@user', '@')).toBe('@user')
    expect(addAtSymbol('#issue', '#')).toBe('#issue')
  })

  it('works with custom symbols', () => {
    expect(addAtSymbol('tag', '!')).toBe('!tag')
    expect(addAtSymbol('!tag', '!')).toBe('!tag')
  })
})

describe('setThemeDocument', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('adds dark class and stores theme in localStorage', () => {
    setThemeDocument('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('removes dark class and stores light theme in localStorage', () => {
    document.documentElement.classList.add('dark')
    setThemeDocument('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('overwrites a previously set theme', () => {
    setThemeDocument('dark')
    setThemeDocument('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
