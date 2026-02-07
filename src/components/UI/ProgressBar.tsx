'use client'

import React from 'react'

interface ProgressBarProps {
	value: number // Valore da 0 a 100
	label?: string
	color?: 'danger' | 'warning' | 'success' | 'secondary' | 'primary'
}

function ProgressBar({ value, label, color = 'primary' }: ProgressBarProps) {
	const [progress, setProgress] = React.useState(0)

	React.useEffect(() => {
		// Innesca l'animazione al render
		const timeout = setTimeout(() => setProgress(value), 100)
		return () => clearTimeout(timeout)
	}, [value])

	const colorClasses = {
		danger: 'bg-red-500',
		warning: 'bg-yellow-500',
		success: 'bg-green-500',
		secondary: 'bg-violet-500',
		primary: 'bg-blue-500',
	}

	return (
		<div className="w-full space-y-2">
			<div className="flex justify-between font-medium text-sm">
				<span className="text-slate-700 dark:text-slate-200">{label}</span>
				<span className="text-slate-500">{progress}%</span>
			</div>
			<div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
				<div
					className={`h-full ${colorClasses[color]} transition-all duration-1000 ease-out`}
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	)
}

export default ProgressBar
