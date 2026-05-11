// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Button, buttonVariants } from '@/components/UI/Button'

describe('Button', () => {
	it('renders its children', () => {
		render(<Button>Click me</Button>)
		expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
	})

	it('applies default variant class bg-primary', () => {
		render(<Button>Default</Button>)
		expect(screen.getByRole('button')).toHaveClass('bg-primary')
	})

	it('applies secondary variant classes', () => {
		render(<Button variant="secondary">Secondary</Button>)
		expect(screen.getByRole('button')).toHaveClass('bg-white')
	})

	it('applies outline variant classes', () => {
		render(<Button variant="outline">Outline</Button>)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass('border-2', 'border-primary')
	})

	it('applies ghost variant classes', () => {
		render(<Button variant="ghost">Ghost</Button>)
		expect(screen.getByRole('button')).toHaveClass('text-slate-700')
	})

	it('applies link variant classes', () => {
		render(<Button variant="link">Link</Button>)
		expect(screen.getByRole('button')).toHaveClass(
			'text-primary',
			'underline-offset-4',
		)
	})

	it('applies sm size class', () => {
		render(<Button size="sm">Small</Button>)
		expect(screen.getByRole('button')).toHaveClass('h-8')
	})

	it('applies lg size class', () => {
		render(<Button size="lg">Large</Button>)
		expect(screen.getByRole('button')).toHaveClass('h-12')
	})

	it('applies default size class', () => {
		render(<Button size="default">Default size</Button>)
		expect(screen.getByRole('button')).toHaveClass('h-10')
	})

	it('is disabled when disabled prop is set', () => {
		render(<Button disabled>Disabled</Button>)
		expect(screen.getByRole('button')).toBeDisabled()
	})

	it('calls onClick when clicked', () => {
		const handleClick = vi.fn()
		render(<Button onClick={handleClick}>Click</Button>)
		fireEvent.click(screen.getByRole('button'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('merges custom className without overriding base classes', () => {
		render(<Button className="custom-class">Custom</Button>)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass('custom-class')
		expect(btn).toHaveClass('bg-primary')
	})

	it('forwards ref to the button element', () => {
		const ref = createRef<HTMLButtonElement>()
		render(<Button ref={ref}>Ref</Button>)
		expect(ref.current).toBeInstanceOf(HTMLButtonElement)
	})

	it('has displayName set to Button', () => {
		expect(Button.displayName).toBe('Button')
	})

	it('buttonVariants returns a string', () => {
		expect(typeof buttonVariants()).toBe('string')
		expect(typeof buttonVariants({ variant: 'outline', size: 'sm' })).toBe(
			'string',
		)
	})

	it('passes additional HTML attributes', () => {
		render(
			<Button type="submit" data-testid="my-btn">
				Submit
			</Button>,
		)
		const btn = screen.getByTestId('my-btn')
		expect(btn).toHaveAttribute('type', 'submit')
	})
})
