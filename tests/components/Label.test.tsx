// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Label from '@/components/UI/Label'

describe('Label', () => {
	it('renders the label text', () => {
		render(<Label label="Username">content</Label>)
		expect(screen.getByText('Username')).toBeInTheDocument()
	})

	it('renders children', () => {
		render(
			<Label label="Field">
				<span data-testid="child">child content</span>
			</Label>,
		)
		expect(screen.getByTestId('child')).toBeInTheDocument()
	})

	it('shows asterisk when required is true', () => {
		render(
			<Label label="Name" required>
				content
			</Label>,
		)
		expect(screen.getByText('*')).toBeInTheDocument()
	})

	it('does not show asterisk when required is false', () => {
		render(
			<Label label="Name" required={false}>
				content
			</Label>,
		)
		expect(screen.queryByText('*')).not.toBeInTheDocument()
	})

	it('does not show asterisk when required is not provided', () => {
		render(<Label label="Name">content</Label>)
		expect(screen.queryByText('*')).not.toBeInTheDocument()
	})

	it('merges custom className', () => {
		const { container } = render(
			<Label label="Name" className="custom-class">
				content
			</Label>,
		)
		expect(container.firstChild).toHaveClass('custom-class')
	})
})
