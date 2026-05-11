// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Spinner from '@/components/UI/Spinner'

describe('Spinner', () => {
	it('renders an element with role="status"', () => {
		render(<Spinner />)
		expect(screen.getByRole('status')).toBeInTheDocument()
	})

	it('has aria-label "Loading"', () => {
		render(<Spinner />)
		expect(screen.getByLabelText('Loading')).toBeInTheDocument()
	})

	it('includes the animate-spin class', () => {
		render(<Spinner />)
		expect(screen.getByRole('status')).toHaveClass('animate-spin')
	})

	it('merges custom className', () => {
		render(<Spinner className="text-red-500" />)
		expect(screen.getByRole('status')).toHaveClass('text-red-500')
	})

	it('passes additional SVG props', () => {
		render(<Spinner data-testid="spinner" />)
		expect(screen.getByTestId('spinner')).toBeInTheDocument()
	})
})
