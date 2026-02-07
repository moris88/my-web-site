import { twMerge } from 'tailwind-merge'

interface LabelProps {
	children: React.ReactNode
	required?: boolean
	label: string
	className?: string
}

function Label({ children, required, label, className }: LabelProps) {
	return (
		<div
			className={twMerge(
				'rounded-lg bg-slate-50 p-4 dark:bg-slate-700',
				className,
			)}
		>
			<p className="mb-1 block font-medium text-slate-400 text-sm italic">
				{label}
				{required && <span className="ml-1 text-red-500">*</span>}
			</p>
			{children}
		</div>
	)
}

export default Label
