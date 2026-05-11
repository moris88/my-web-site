// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Tabs from '@/components/UI/Tabs'

const tabs = [
	{ id: 'tab1', label: 'Tab One', content: <p>Content One</p> },
	{ id: 'tab2', label: 'Tab Two', content: <p>Content Two</p> },
	{ id: 'tab3', label: 'Tab Three', content: <p>Content Three</p> },
]

describe('Tabs', () => {
	it('renders all tab labels', () => {
		render(<Tabs tabs={tabs} />)
		expect(screen.getByRole('button', { name: 'Tab One' })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Tab Two' })).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: 'Tab Three' }),
		).toBeInTheDocument()
	})

	it('shows the first tab content by default', () => {
		render(<Tabs tabs={tabs} />)
		expect(screen.getByText('Content One')).toBeVisible()
	})

	it('shows the content of the defaultValue tab', () => {
		render(<Tabs tabs={tabs} defaultValue="tab2" />)
		expect(screen.getByText('Content Two')).toBeVisible()
	})

	it('switches to a new tab when its button is clicked', () => {
		render(<Tabs tabs={tabs} />)
		fireEvent.click(screen.getByRole('button', { name: 'Tab Two' }))
		expect(screen.getByText('Content Two')).toBeVisible()
	})

	it('the active tab button has the active text-white class', () => {
		render(<Tabs tabs={tabs} />)
		expect(screen.getByRole('button', { name: 'Tab One' })).toHaveClass(
			'text-white',
		)
		expect(screen.getByRole('button', { name: 'Tab Two' })).not.toHaveClass(
			'text-white',
		)
	})

	it('updates the active class after switching tabs', () => {
		render(<Tabs tabs={tabs} />)
		fireEvent.click(screen.getByRole('button', { name: 'Tab Three' }))
		expect(screen.getByRole('button', { name: 'Tab Three' })).toHaveClass(
			'text-white',
		)
		expect(screen.getByRole('button', { name: 'Tab One' })).not.toHaveClass(
			'text-white',
		)
	})

	it('applies left position class to the tab list container', () => {
		const { container } = render(<Tabs tabs={tabs} position="left" />)
		expect(container.querySelector('.justify-start')).toBeInTheDocument()
	})

	it('applies right position class to the tab list container', () => {
		const { container } = render(<Tabs tabs={tabs} position="right" />)
		expect(container.querySelector('.justify-end')).toBeInTheDocument()
	})

	it('applies center position class by default', () => {
		const { container } = render(<Tabs tabs={tabs} />)
		expect(container.querySelector('.justify-center')).toBeInTheDocument()
	})
})
