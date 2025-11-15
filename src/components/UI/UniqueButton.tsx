import { twMerge } from 'tailwind-merge'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	className?: string
}

function UniqueButton({ children, onClick, className }: ButtonProps) {
	return (
		<button
			type="button"
			className={twMerge('unique-button', className)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default UniqueButton
