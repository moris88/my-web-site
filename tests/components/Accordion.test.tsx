// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Accordion } from '@/components/UI/Accordion'

const items = [
	{ id: 'a1', title: 'First Item', content: 'First content' },
	{ id: 'a2', title: 'Second Item', content: 'Second content' },
	{ id: 'a3', title: 'Third Item', content: 'Third content' },
]

describe('Accordion', () => {
	it('renders all item titles', () => {
		render(<Accordion items={items} />)
		expect(screen.getByText('First Item')).toBeInTheDocument()
		expect(screen.getByText('Second Item')).toBeInTheDocument()
		expect(screen.getByText('Third Item')).toBeInTheDocument()
	})

	it('renders all item contents in the DOM', () => {
		render(<Accordion items={items} />)
		expect(screen.getByText('First content')).toBeInTheDocument()
	})

	it('rotates the chevron when an item is opened', () => {
		render(<Accordion items={items} />)
		const firstButton = screen.getAllByRole('button')[0]
		const chevron = firstButton.querySelector('svg') as SVGElement

		expect(chevron).not.toHaveClass('rotate-180')
		fireEvent.click(firstButton)
		expect(chevron).toHaveClass('rotate-180')
	})

	it('closes an open item when clicked again', () => {
		render(<Accordion items={items} />)
		const firstButton = screen.getAllByRole('button')[0]
		const chevron = firstButton.querySelector('svg') as SVGElement

		fireEvent.click(firstButton)
		expect(chevron).toHaveClass('rotate-180')
		fireEvent.click(firstButton)
		expect(chevron).not.toHaveClass('rotate-180')
	})

	it('closes the previous item when a new one is opened (single mode)', () => {
		render(<Accordion items={items} />)
		const [btn1, btn2] = screen.getAllByRole('button')
		const chevron1 = btn1.querySelector('svg') as SVGElement
		const chevron2 = btn2.querySelector('svg') as SVGElement

		fireEvent.click(btn1)
		expect(chevron1).toHaveClass('rotate-180')

		fireEvent.click(btn2)
		expect(chevron1).not.toHaveClass('rotate-180')
		expect(chevron2).toHaveClass('rotate-180')
	})

	it('keeps multiple items open when allowMultiple is true', () => {
		render(<Accordion items={items} allowMultiple />)
		const [btn1, btn2] = screen.getAllByRole('button')
		const chevron1 = btn1.querySelector('svg') as SVGElement
		const chevron2 = btn2.querySelector('svg') as SVGElement

		fireEvent.click(btn1)
		fireEvent.click(btn2)
		expect(chevron1).toHaveClass('rotate-180')
		expect(chevron2).toHaveClass('rotate-180')
	})

	it('toggles an open item in allowMultiple mode without closing others', () => {
		render(<Accordion items={items} allowMultiple />)
		const [btn1, btn2] = screen.getAllByRole('button')
		const chevron1 = btn1.querySelector('svg') as SVGElement
		const chevron2 = btn2.querySelector('svg') as SVGElement

		fireEvent.click(btn1)
		fireEvent.click(btn2)
		fireEvent.click(btn1) // close first only
		expect(chevron1).not.toHaveClass('rotate-180')
		expect(chevron2).toHaveClass('rotate-180')
	})

	it('renders with an empty items array without crashing', () => {
		render(<Accordion items={[]} />)
	})
})
