'use client'

import { Check, ChevronDown, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

interface Option {
	value: string
	label: string
}

interface SelectProps {
	options: Option[]
	value: string | string[] // Supporta stringa singola o array
	onChange: (value: string | string[]) => void
	placeholder?: string
	label?: string
	multiple?: boolean
	className?: string
	classNameButton?: string
}

function Select({
	options,
	value,
	onChange,
	placeholder = 'Seleziona...',
	multiple = false,
	className,
	classNameButton,
}: SelectProps) {
	const [isOpen, setIsOpen] = React.useState(false)
	const containerRef = React.useRef<HTMLDivElement>(null)

	// Gestione chiusura click esterno
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const isSelected = (val: string) => {
		return multiple ? (value as string[]).includes(val) : value === val
	}

	const handleSelect = (val: string) => {
		if (multiple) {
			const currentValues = value as string[]
			const nextValues = currentValues.includes(val)
				? currentValues.filter((v) => v !== val)
				: [...currentValues, val]
			onChange(nextValues)
		} else {
			onChange(val)
			setIsOpen(false)
		}
	}

	const removeValue = (val: string, e: React.MouseEvent) => {
		e.stopPropagation()
		if (multiple) {
			onChange((value as string[]).filter((v) => v !== val))
		}
	}

	const selectedOptions = options.filter((opt) =>
		multiple ? (value as string[]).includes(opt.value) : value === opt.value,
	)

	return (
		<div className={cn('w-full space-y-1.5', className)} ref={containerRef}>
			<div className="relative">
				{/* Trigger */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className={cn(
						'flex w-full cursor-pointer items-center justify-between outline-none focus:border-none',
						classNameButton,
					)}
				>
					<div className="flex flex-wrap gap-1">
						{selectedOptions.length > 0 ? (
							selectedOptions.map((opt) => (
								<span
									key={opt.value}
									className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700 text-xs dark:bg-slate-800 dark:text-slate-300"
								>
									{opt.label}
									{multiple && (
										<X
											size={12}
											className="cursor-pointer hover:text-red-500"
											onClick={(e) => removeValue(opt.value, e)}
										/>
									)}
								</span>
							))
						) : (
							<span className="text-slate-400">{placeholder}</span>
						)}
					</div>
					<ChevronDown
						size={16}
						className={cn(
							'ml-2 text-slate-500 transition-transform duration-200',
							isOpen && 'rotate-180',
						)}
					/>
				</button>

				{/* Dropdown Menu */}
				{isOpen && (
					<div className="fade-in zoom-in-95 absolute z-50 mt-2 w-full animate-in overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl duration-100 dark:border-slate-800 dark:bg-slate-900">
						<div className="max-h-60 overflow-y-auto p-1">
							{options.map((option) => {
								const active = isSelected(option.value)
								return (
									<button
										key={option.value}
										type="button"
										onClick={() => handleSelect(option.value)}
										className={cn(
											'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
											active
												? 'bg-primary/10 font-medium text-primary'
												: 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800',
										)}
									>
										{option.label}
										{active && <Check size={14} />}
									</button>
								)
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Select
