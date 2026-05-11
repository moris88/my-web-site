// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Chip from '@/components/UI/Chip'

describe('Chip', () => {
	it('renders its children text', () => {
		render(<Chip>React</Chip>)
		expect(screen.getByText('React')).toBeInTheDocument()
	})

	it('renders the delete button when onDelete is provided', () => {
		render(<Chip onDelete={vi.fn()}>Tag</Chip>)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('does not render a delete button when onDelete is not provided', () => {
		render(<Chip>Tag</Chip>)
		expect(screen.queryByRole('button')).not.toBeInTheDocument()
	})

	it('calls onDelete when the delete button is clicked', () => {
		const handleDelete = vi.fn()
		render(<Chip onDelete={handleDelete}>Tag</Chip>)
		fireEvent.click(screen.getByRole('button'))
		expect(handleDelete).toHaveBeenCalledTimes(1)
	})

	it('renders the icon when provided', () => {
		render(<Chip icon={<span data-testid="icon">★</span>}>With Icon</Chip>)
		expect(screen.getByTestId('icon')).toBeInTheDocument()
	})

	it('does not render icon slot when icon prop is omitted', () => {
		render(<Chip>No Icon</Chip>)
		expect(screen.queryByRole('img')).not.toBeInTheDocument()
	})

	it('applies default color class for slate', () => {
		const { container } = render(<Chip color="slate">Slate</Chip>)
		expect(container.firstChild).toHaveClass('bg-slate-100')
	})

	it('applies blue color class', () => {
		const { container } = render(<Chip color="blue">Blue</Chip>)
		expect(container.firstChild).toHaveClass('bg-blue-100')
	})

	it('applies green color class', () => {
		const { container } = render(<Chip color="green">Green</Chip>)
		expect(container.firstChild).toHaveClass('bg-green-100')
	})

	it('applies red color class', () => {
		const { container } = render(<Chip color="red">Red</Chip>)
		expect(container.firstChild).toHaveClass('bg-red-100')
	})

	it('applies outline variant class', () => {
		const { container } = render(
			<Chip variant="outline" color="slate">
				Outline
			</Chip>,
		)
		expect(container.firstChild).toHaveClass('border', 'border-slate-300')
	})

	it('applies flat variant class', () => {
		const { container } = render(
			<Chip variant="flat" color="slate">
				Flat
			</Chip>,
		)
		expect(container.firstChild).toHaveClass('bg-transparent')
	})

	it('applies sm size class', () => {
		const { container } = render(<Chip size="sm">Small</Chip>)
		expect(container.firstChild).toHaveClass('text-xs', 'px-2')
	})

	it('applies lg size class', () => {
		const { container } = render(<Chip size="lg">Large</Chip>)
		expect(container.firstChild).toHaveClass('text-base', 'px-4')
	})

	it('merges custom className', () => {
		const { container } = render(<Chip className="my-custom">Custom</Chip>)
		expect(container.firstChild).toHaveClass('my-custom')
	})
})
