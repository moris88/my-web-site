'use client'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChipProps {
	children: React.ReactNode
	onDelete?: () => void
	icon?: React.ReactNode
	variant?: 'default' | 'outline' | 'flat'
	color?: 'slate' | 'blue' | 'green' | 'red'
	size?: 'sm' | 'md' | 'lg'
	className?: string
}

function Chip({
	children,
	onDelete,
	icon,
	variant = 'default',
	color = 'slate',
	size = 'md',
	className,
}: ChipProps) {
	// Mappatura varianti e colori
	const variants = {
		default: {
			slate:
				'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
			blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
			green:
				'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
			red: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
		},
		outline: {
			slate: 'border border-slate-300 text-slate-600 dark:border-slate-700',
			blue: 'border border-blue-300 text-blue-600 dark:border-blue-700',
			green: 'border border-green-300 text-green-600 dark:border-green-700',
			red: 'border border-red-300 text-red-600 dark:border-red-700',
		},
		flat: {
			slate:
				'bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-400',
			blue: 'bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400',
			green:
				'bg-transparent text-green-600 hover:bg-green-50 dark:text-green-400',
			red: 'bg-transparent text-red-600 hover:bg-red-50 dark:text-red-400',
		},
	}

	const sizes = {
		sm: 'text-xs px-2 py-0.5',
		md: 'text-sm px-3 py-1',
		lg: 'text-base px-4 py-2',
	}

	return (
		<div
			className={cn(
				'inline-flex select-none items-center gap-1.5 rounded-full px-3 py-1 font-medium text-xs transition-all',
				variants[variant][color],
				sizes[size],
				className,
			)}
		>
			{/* Icona opzionale */}
			{icon && <span className="shrink-0">{icon}</span>}

			<span>{children}</span>

			{/* Bottone di rimozione opzionale */}
			{onDelete && (
				<button
					type="button"
					onClick={onDelete}
					className="ml-0.5 rounded-full p-0.5 outline-none hover:bg-black/10 dark:hover:bg-white/10"
				>
					<X size={12} strokeWidth={3} />
				</button>
			)}
		</div>
	)
}

export default Chip
