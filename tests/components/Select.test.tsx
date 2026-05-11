// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Select from '@/components/UI/Select'

const options = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
]

describe('Select (single)', () => {
	it('shows placeholder when no value is selected', () => {
		render(
			<Select
				options={options}
				value=""
				onChange={vi.fn()}
				placeholder="Choose..."
			/>,
		)
		expect(screen.getByText('Choose...')).toBeInTheDocument()
	})

	it('shows selected option label when a value is set', () => {
		render(<Select options={options} value="react" onChange={vi.fn()} />)
		expect(screen.getByText('React')).toBeInTheDocument()
	})

	it('opens the dropdown when the trigger is clicked', () => {
		render(<Select options={options} value="" onChange={vi.fn()} />)
		expect(screen.queryByText('Vue')).not.toBeInTheDocument()
		fireEvent.click(screen.getByRole('button'))
		expect(screen.getByText('Vue')).toBeInTheDocument()
	})

	it('closes the dropdown after selecting an option', () => {
		render(<Select options={options} value="" onChange={vi.fn()} />)
		fireEvent.click(screen.getByRole('button')) // open
		fireEvent.click(screen.getByText('React')) // select → close
		expect(screen.queryByText('Vue')).not.toBeInTheDocument()
	})

	it('calls onChange with the selected value', () => {
		const handleChange = vi.fn()
		render(<Select options={options} value="" onChange={handleChange} />)
		fireEvent.click(screen.getByRole('button'))
		fireEvent.click(screen.getByText('Vue'))
		expect(handleChange).toHaveBeenCalledWith('vue')
	})

	it('closes when clicking outside the component', () => {
		render(
			<div>
				<Select options={options} value="" onChange={vi.fn()} />
				<div data-testid="outside">Outside</div>
			</div>,
		)
		fireEvent.click(screen.getByRole('button')) // open
		expect(screen.getByText('Angular')).toBeInTheDocument()
		fireEvent.mouseDown(screen.getByTestId('outside'))
		expect(screen.queryByText('Angular')).not.toBeInTheDocument()
	})
})

describe('Select (multiple)', () => {
	it('shows placeholder when no options are selected', () => {
		render(
			<Select
				options={options}
				value={[]}
				onChange={vi.fn()}
				multiple
				placeholder="Pick..."
			/>,
		)
		expect(screen.getByText('Pick...')).toBeInTheDocument()
	})

	it('calls onChange with the new array when an option is selected', () => {
		const handleChange = vi.fn()
		render(
			<Select options={options} value={[]} onChange={handleChange} multiple />,
		)
		fireEvent.click(screen.getByRole('button'))
		fireEvent.click(screen.getByText('React'))
		expect(handleChange).toHaveBeenCalledWith(['react'])
	})

	it('calls onChange removing the value when a selected option is clicked again', () => {
		const handleChange = vi.fn()
		render(
			<Select
				options={options}
				value={['react']}
				onChange={handleChange}
				multiple
			/>,
		)
		fireEvent.click(screen.getByRole('button'))
		// Click React again to deselect
		const reactButtons = screen.getAllByText('React')
		fireEvent.click(reactButtons[reactButtons.length - 1])
		expect(handleChange).toHaveBeenCalledWith([])
	})

	it('shows selected options as pills', () => {
		render(
			<Select
				options={options}
				value={['react', 'vue']}
				onChange={vi.fn()}
				multiple
			/>,
		)
		expect(screen.getAllByText('React').length).toBeGreaterThan(0)
		expect(screen.getAllByText('Vue').length).toBeGreaterThan(0)
	})

	it('does not close after selecting an option in multiple mode', () => {
		render(<Select options={options} value={[]} onChange={vi.fn()} multiple />)
		fireEvent.click(screen.getByRole('button'))
		fireEvent.click(screen.getByText('React'))
		// Angular option is still visible = dropdown still open
		expect(screen.getByText('Angular')).toBeInTheDocument()
	})

	it('removes a selected pill via its X icon without opening the dropdown', () => {
		const handleChange = vi.fn()
		render(
			<Select
				options={options}
				value={['react', 'vue']}
				onChange={handleChange}
				multiple
			/>,
		)
		// The X buttons are inside the pill spans, not inside the dropdown
		const xIcons = document.querySelectorAll('svg.cursor-pointer')
		fireEvent.click(xIcons[0])
		expect(handleChange).toHaveBeenCalledWith(['vue'])
	})
})
