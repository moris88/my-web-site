// @vitest-environment jsdom
import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ProgressBar from '@/components/UI/ProgressBar'

describe('ProgressBar', () => {
	beforeEach(() => vi.useFakeTimers())
	afterEach(() => vi.useRealTimers())

	it('renders the label when provided', () => {
		render(<ProgressBar value={50} label="TypeScript" />)
		expect(screen.getByText('TypeScript')).toBeInTheDocument()
	})

	it('shows 0% initially before the animation timeout', () => {
		render(<ProgressBar value={80} />)
		expect(screen.getByText('0%')).toBeInTheDocument()
	})

	it('shows the correct value after 100ms', () => {
		render(<ProgressBar value={75} />)
		act(() => vi.advanceTimersByTime(100))
		expect(screen.getByText('75%')).toBeInTheDocument()
	})

	it('shows 0% for value 0', () => {
		render(<ProgressBar value={0} />)
		act(() => vi.advanceTimersByTime(100))
		expect(screen.getByText('0%')).toBeInTheDocument()
	})

	it('shows 100% for value 100', () => {
		render(<ProgressBar value={100} />)
		act(() => vi.advanceTimersByTime(100))
		expect(screen.getByText('100%')).toBeInTheDocument()
	})

	it('applies the primary color class by default', () => {
		const { container } = render(<ProgressBar value={50} />)
		act(() => vi.advanceTimersByTime(100))
		expect(container.querySelector('.bg-blue-500')).toBeInTheDocument()
	})

	it('applies the danger color class', () => {
		const { container } = render(<ProgressBar value={50} color="danger" />)
		expect(container.querySelector('.bg-red-500')).toBeInTheDocument()
	})

	it('applies the success color class', () => {
		const { container } = render(<ProgressBar value={50} color="success" />)
		expect(container.querySelector('.bg-green-500')).toBeInTheDocument()
	})

	it('applies the warning color class', () => {
		const { container } = render(<ProgressBar value={50} color="warning" />)
		expect(container.querySelector('.bg-yellow-500')).toBeInTheDocument()
	})

	it('applies the secondary color class', () => {
		const { container } = render(<ProgressBar value={50} color="secondary" />)
		expect(container.querySelector('.bg-violet-500')).toBeInTheDocument()
	})

	it('updates progress width style after timeout', () => {
		const { container } = render(<ProgressBar value={60} />)
		act(() => vi.advanceTimersByTime(100))
		const bar = container.querySelector('.transition-all') as HTMLElement
		expect(bar?.style.width).toBe('60%')
	})
})
