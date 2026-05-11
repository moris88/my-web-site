// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Dialog } from '@/components/UI/Dialog'

describe('Dialog', () => {
	it('renders children when isOpen is true', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				<p>Dialog content</p>
			</Dialog>,
		)
		expect(screen.getByText('Dialog content')).toBeInTheDocument()
	})

	it('calls showModal when isOpen becomes true', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
	})

	it('calls close when isOpen is false', () => {
		render(
			<Dialog isOpen={false} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(HTMLDialogElement.prototype.close).toHaveBeenCalled()
	})

	it('renders the title when provided', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()} title="My Dialog">
				Content
			</Dialog>,
		)
		expect(screen.getByText('My Dialog')).toBeInTheDocument()
	})

	it('does not render a title element when title is not provided', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(screen.queryByRole('heading')).not.toBeInTheDocument()
	})

	it('renders the close button when isDismissible is true (default)', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('does not render the close button when isDismissible is false', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()} isDismissible={false}>
				Content
			</Dialog>,
		)
		expect(screen.queryByRole('button')).not.toBeInTheDocument()
	})

	it('calls onClose when the close button is clicked', () => {
		const handleClose = vi.fn()
		render(
			<Dialog isOpen={true} onClose={handleClose} title="Test">
				Content
			</Dialog>,
		)
		fireEvent.click(screen.getByRole('button'))
		expect(handleClose).toHaveBeenCalledTimes(1)
	})

	it('sets body overflow to hidden when open', () => {
		render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(document.body.style.overflow).toBe('hidden')
	})

	it('resets body overflow when closed', () => {
		const { rerender } = render(
			<Dialog isOpen={true} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		rerender(
			<Dialog isOpen={false} onClose={vi.fn()}>
				Content
			</Dialog>,
		)
		expect(document.body.style.overflow).toBe('unset')
	})

	it('calls onClose when Escape key is pressed and isDismissible is true', () => {
		const handleClose = vi.fn()
		render(
			<Dialog isOpen={true} onClose={handleClose}>
				Content
			</Dialog>,
		)
		fireEvent.keyDown(
			screen.getByRole('dialog') ?? document.querySelector('dialog')!,
			{
				key: 'Escape',
			},
		)
		expect(handleClose).toHaveBeenCalled()
	})

	it('calls onClose when clicking directly on the backdrop (dialog element)', () => {
		const handleClose = vi.fn()
		const { container } = render(
			<Dialog isOpen={true} onClose={handleClose}>
				Content
			</Dialog>,
		)
		const dialog = container.querySelector('dialog')!
		fireEvent.click(dialog, { target: dialog })
		expect(handleClose).toHaveBeenCalled()
	})

	it('calls preventDefault on cancel event when isDismissible is false', () => {
		const { container } = render(
			<Dialog isOpen={true} onClose={vi.fn()} isDismissible={false}>
				Content
			</Dialog>,
		)
		const dialog = container.querySelector('dialog')!
		const cancelEvent = new Event('cancel', {
			bubbles: false,
			cancelable: true,
		})
		const preventDefaultSpy = vi.spyOn(cancelEvent, 'preventDefault')
		dialog.dispatchEvent(cancelEvent)
		expect(preventDefaultSpy).toHaveBeenCalled()
	})
})
