import * as React from 'react'
import { cn } from '@/lib/utils'

type InputTypeProps = React.InputHTMLAttributes<HTMLInputElement> & {
	as?: 'input'
}
type TextareaTypeProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	as: 'textarea'
}

type InputProps = InputTypeProps | TextareaTypeProps

const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps
>(({ className, as = 'input', ...props }, ref) => {
	const Component = as as React.ElementType

	const baseStyles = cn(
		// Reset stili e gestione disabled
		'w-full bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-400 dark:placeholder:text-gray-500',
		className,
	)

	return (
		<Component
			// biome-ignore lint/suspicious/noExplicitAny: Il tipo è già gestito da React.InputHTMLAttributes
			ref={ref as any}
			className={baseStyles}
			{...props}
		/>
	)
})

Input.displayName = 'Input'

export default Input
