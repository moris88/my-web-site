import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes with false', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  it('handles conditional classes with undefined', () => {
    expect(cn('foo', undefined, 'baz')).toBe('foo baz')
  })

  it('deduplicates conflicting tailwind classes (last wins)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('returns empty string for no input', () => {
    expect(cn()).toBe('')
  })

  it('handles null', () => {
    expect(cn(null, 'foo')).toBe('foo')
  })

  it('handles arrays of classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz')
  })

  it('handles object syntax', () => {
    expect(cn({ foo: true, bar: false })).toBe('foo')
  })

  it('merges and deduplicates complex tailwind variants', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })
})
