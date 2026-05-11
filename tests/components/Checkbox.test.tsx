// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Checkbox from '@/components/UI/Checkbox'

describe('Checkbox', () => {
	it('renders an input with type checkbox', () => {
		render(<Checkbox id="cb1" checked={false} onChange={vi.fn()} />)
		expect(screen.getByRole('checkbox')).toBeInTheDocument()
	})

	it('reflects checked state', () => {
		render(<Checkbox id="cb1" checked={true} onChange={vi.fn()} />)
		expect(screen.getByRole('checkbox')).toBeChecked()
	})

	it('reflects unchecked state', () => {
		render(<Checkbox id="cb1" checked={false} onChange={vi.fn()} />)
		expect(screen.getByRole('checkbox')).not.toBeChecked()
	})

	it('calls onChange with true when unchecked box is clicked', () => {
		const handleChange = vi.fn()
		render(<Checkbox id="cb1" checked={false} onChange={handleChange} />)
		fireEvent.click(screen.getByRole('checkbox'))
		expect(handleChange).toHaveBeenCalledWith(true)
	})

	it('calls onChange with false when checked box is clicked', () => {
		const handleChange = vi.fn()
		render(<Checkbox id="cb1" checked={true} onChange={handleChange} />)
		fireEvent.click(screen.getByRole('checkbox'))
		expect(handleChange).toHaveBeenCalledWith(false)
	})

	it('is disabled when disabled prop is set', () => {
		render(<Checkbox id="cb1" checked={false} onChange={vi.fn()} disabled />)
		expect(screen.getByRole('checkbox')).toBeDisabled()
	})

	it('renders the label text when label prop is provided', () => {
		render(
			<Checkbox
				id="cb1"
				checked={false}
				onChange={vi.fn()}
				label="Accept terms"
			/>,
		)
		expect(screen.getByText('Accept terms')).toBeInTheDocument()
	})

	it('the label is associated with the checkbox via htmlFor', () => {
		render(
			<Checkbox
				id="cb-terms"
				checked={false}
				onChange={vi.fn()}
				label="Accept"
			/>,
		)
		expect(screen.getByLabelText('Accept')).toBeInTheDocument()
	})

	it('does not render label element when label prop is omitted', () => {
		render(<Checkbox id="cb1" checked={false} onChange={vi.fn()} />)
		expect(screen.queryByRole('label')).not.toBeInTheDocument()
	})

	it('applies disabled style to label when disabled is true', () => {
		render(
			<Checkbox
				id="cb1"
				checked={false}
				onChange={vi.fn()}
				label="Disabled label"
				disabled
			/>,
		)
		const label = screen.getByText('Disabled label')
		expect(label).toHaveClass('cursor-not-allowed', 'opacity-50')
	})
})
