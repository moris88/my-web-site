'use client'

import { useId } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconProps {
	className?: string
	pathD: string
	labelIcon: string
}
function Icon({ className, labelIcon, pathD }: Readonly<IconProps>) {
	const id = useId()
	const titleId = `icon-${id}`

	return (
		<svg
			className={twMerge(`bi bi-${labelIcon}`, className)}
			fill="currentColor"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			role={labelIcon ? 'img' : 'presentation'}
			aria-labelledby={labelIcon ? titleId : undefined}
			aria-hidden={labelIcon ? undefined : true}
		>
			{labelIcon ? <title id={titleId}>{labelIcon}</title> : null}
			<path d={pathD} />
		</svg>
	)
}

export default Icon
