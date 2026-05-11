import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/database', () => ({
  default: {
    prepare: vi.fn(),
  },
}))

import db from '@/lib/database'
import { getArticle } from '@/lib/articles'

const mockGet = vi.fn()

describe('getArticle', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked((db as any).prepare).mockReturnValue({ get: mockGet })
  })

  it('returns null when id is 0', async () => {
    expect(await getArticle(0, 'it')).toBeNull()
  })

  it('returns null when id is negative', async () => {
    expect(await getArticle(-5, 'en')).toBeNull()
  })

  it('returns null when id is NaN', async () => {
    expect(await getArticle(Number.NaN, 'it')).toBeNull()
  })

  it('returns null when article is not found in the DB', async () => {
    mockGet.mockReturnValue(undefined)
    expect(await getArticle(999, 'it')).toBeNull()
  })

  it('returns null when stmt.get returns null', async () => {
    mockGet.mockReturnValue(null)
    expect(await getArticle(1, 'en')).toBeNull()
  })

  it('returns the article when found', async () => {
    const article = {
      id: '1',
      title: 'Test Article',
      summary: 'A short summary',
      content: '<p>Content</p>',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
      published_at: '2024-01-01',
      published: 'true' as const,
    }
    mockGet.mockReturnValue(article)
    const result = await getArticle(1, 'it')
    expect(result).toEqual(article)
  })

  it('returns the article for English language', async () => {
    const article = {
      id: '2',
      title: 'English Article',
      summary: 'Summary',
      content: 'Content',
      created_at: '2024-02-01',
      updated_at: '2024-02-01',
      published_at: '2024-02-01',
      published: 'true' as const,
    }
    mockGet.mockReturnValue(article)
    const result = await getArticle(2, 'en')
    expect(result).toEqual(article)
  })

  it('returns null when prepare throws an error', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked((db as any).prepare).mockImplementation(() => {
      throw new Error('DB connection lost')
    })
    const result = await getArticle(1, 'it')
    expect(result).toBeNull()
  })

  it('returns null when db is null', async () => {
    vi.resetModules()
    vi.doMock('@/lib/database', () => ({ default: null }))
    const { getArticle: getArticleNullDb } = await import('@/lib/articles')
    const result = await getArticleNullDb(1, 'it')
    expect(result).toBeNull()
  })
})
