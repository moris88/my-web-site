'use client'

import React from 'react'

interface TooltipProps {
	text: string
	children: React.ReactNode
	position?: 'top' | 'bottom' | 'left' | 'right'
}

function Tooltip({ text, children, position = 'top' }: TooltipProps) {
	const [isVisible, setIsVisible] = React.useState(false)

	// Mappatura delle posizioni
	const positionClasses = {
		top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 -translate-y-1/2 ml-2',
	}

	// Mappatura delle frecce (opzionale)
	const arrowClasses = {
		top: 'top-full left-1/2 -translate-x-1/2 border-t-slate-800',
		bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-800',
		left: 'left-full top-1/2 -translate-y-1/2 border-l-slate-800',
		right: 'right-full top-1/2 -translate-y-1/2 border-r-slate-800',
	}

	return (
		<button
			type="button"
			className="relative flex items-center"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			onFocus={() => setIsVisible(true)}
			onBlur={() => setIsVisible(false)}
		>
			{children}

			{isVisible && (
				<div
					role="tooltip"
					className={`absolute z-50 whitespace-nowrap rounded bg-slate-800 px-2 py-1 font-medium text-white text-xs shadow-md transition-opacity duration-200 lg:text-xl ${positionClasses[position]}`}
				>
					{text}
					{/* Freccia decorativa */}
					<div
						className={`absolute border-4 border-transparent ${arrowClasses[position]}`}
					/>
				</div>
			)}
		</button>
	)
}

export default Tooltip
