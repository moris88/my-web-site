// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Tooltip from '@/components/UI/Tooltip'

describe('Tooltip', () => {
	it('does not show the tooltip text initially', () => {
		render(
			<Tooltip text="Hover info">
				<span>Target</span>
			</Tooltip>,
		)
		expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
	})

	it('shows the tooltip on mouseenter', () => {
		render(
			<Tooltip text="Hover info">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toBeInTheDocument()
		expect(screen.getByRole('tooltip')).toHaveTextContent('Hover info')
	})

	it('hides the tooltip on mouseleave', () => {
		render(
			<Tooltip text="Hover info">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		fireEvent.mouseLeave(screen.getByRole('button'))
		expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
	})

	it('shows the tooltip on focus', () => {
		render(
			<Tooltip text="Focus info">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.focus(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toHaveTextContent('Focus info')
	})

	it('hides the tooltip on blur', () => {
		render(
			<Tooltip text="Focus info">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.focus(screen.getByRole('button'))
		fireEvent.blur(screen.getByRole('button'))
		expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
	})

	it('renders children inside the trigger', () => {
		render(
			<Tooltip text="Info">
				<span data-testid="child">Hover me</span>
			</Tooltip>,
		)
		expect(screen.getByTestId('child')).toBeInTheDocument()
	})

	it('applies top position class by default', () => {
		render(
			<Tooltip text="Top">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toHaveClass('bottom-full')
	})

	it('applies bottom position class', () => {
		render(
			<Tooltip text="Bottom" position="bottom">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toHaveClass('top-full')
	})

	it('applies left position class', () => {
		render(
			<Tooltip text="Left" position="left">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toHaveClass('right-full')
	})

	it('applies right position class', () => {
		render(
			<Tooltip text="Right" position="right">
				<span>Target</span>
			</Tooltip>,
		)
		fireEvent.mouseEnter(screen.getByRole('button'))
		expect(screen.getByRole('tooltip')).toHaveClass('left-full')
	})
})
