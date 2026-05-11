// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import Input from '@/components/UI/Input'

describe('Input', () => {
	it('renders as an input element by default', () => {
		render(<Input placeholder="Type here" />)
		expect(screen.getByPlaceholderText('Type here').tagName).toBe('INPUT')
	})

	it('renders as a textarea when as="textarea"', () => {
		render(<Input as="textarea" placeholder="Text area" />)
		expect(screen.getByPlaceholderText('Text area').tagName).toBe('TEXTAREA')
	})

	it('applies the placeholder', () => {
		render(<Input placeholder="Enter name" />)
		expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
	})

	it('is disabled when disabled prop is set', () => {
		render(<Input disabled placeholder="disabled" />)
		expect(screen.getByPlaceholderText('disabled')).toBeDisabled()
	})

	it('merges custom className', () => {
		render(<Input className="rounded border" placeholder="styled" />)
		expect(screen.getByPlaceholderText('styled')).toHaveClass(
			'border',
			'rounded',
		)
	})

	it('has base styles applied', () => {
		render(<Input placeholder="base" />)
		expect(screen.getByPlaceholderText('base')).toHaveClass(
			'w-full',
			'bg-transparent',
		)
	})

	it('forwards ref to the input element', () => {
		const ref = createRef<HTMLInputElement>()
		render(<Input ref={ref} placeholder="ref-test" />)
		expect(ref.current).toBeInstanceOf(HTMLInputElement)
	})

	it('has displayName set to Input', () => {
		expect(Input.displayName).toBe('Input')
	})
})
