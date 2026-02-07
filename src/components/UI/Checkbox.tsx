'use client'

import { Check } from 'lucide-react'

interface CheckboxProps {
	id: string
	label?: string
	checked: boolean
	onChange: (checked: boolean) => void
	disabled?: boolean
}

function Checkbox({
	id,
	label,
	checked,
	onChange,
	disabled = false,
}: CheckboxProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="relative flex items-center">
				{/* Input Nativo Nascosto */}
				<input
					type="checkbox"
					id={id}
					checked={checked}
					disabled={disabled}
					onChange={(e) => onChange(e.target.checked)}
					className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 bg-white transition-all checked:border-primary checked:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:checked:bg-primary"
				/>

				{/* Icona Check (Visibile solo quando l'input è checked) */}
				<Check
					size={14}
					className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
					strokeWidth={4}
				/>
			</div>

			{/* Label */}
			{label && (
				<label
					htmlFor={id}
					className={`cursor-pointer select-none font-medium text-sm leading-none ${disabled ? 'cursor-not-allowed opacity-50' : 'text-slate-900 dark:text-slate-100'}`}
				>
					{label}
				</label>
			)}
		</div>
	)
}

export default Checkbox
