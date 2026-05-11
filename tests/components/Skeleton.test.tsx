// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Skeleton from '@/components/UI/Skeleton'

describe('Skeleton', () => {
	it('renders a div element', () => {
		render(<Skeleton data-testid="skeleton" />)
		expect(screen.getByTestId('skeleton').tagName).toBe('DIV')
	})

	it('has animate-pulse class', () => {
		render(<Skeleton data-testid="skeleton" />)
		expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse')
	})

	it('has rounded-md and bg-gray-200 classes', () => {
		render(<Skeleton data-testid="skeleton" />)
		const el = screen.getByTestId('skeleton')
		expect(el).toHaveClass('rounded-md', 'bg-gray-200')
	})

	it('merges custom className', () => {
		render(<Skeleton data-testid="skeleton" className="h-10 w-full" />)
		const el = screen.getByTestId('skeleton')
		expect(el).toHaveClass('h-10', 'w-full')
		expect(el).toHaveClass('animate-pulse')
	})

	it('passes additional HTML div props', () => {
		render(<Skeleton data-testid="skeleton" aria-label="loading" />)
		expect(screen.getByTestId('skeleton')).toHaveAttribute(
			'aria-label',
			'loading',
		)
	})
})
