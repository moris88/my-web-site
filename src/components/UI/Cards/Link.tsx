'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface CardLinkProps {
	icon: React.ReactNode
	title: string
	description: string
	path: string
}

function CardLink({ icon, title, description, path }: Readonly<CardLinkProps>) {
	return (
		<Link
			href={path}
			className={twMerge(
				'flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 p-6 text-center shadow-lg transition-all duration-300 ease-in-out',
				'hover:bg-gray-200 hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700',
			)}
		>
			<div className="text-primary">{icon}</div>
			<h3 className="font-bold text-primary text-xl">{title}</h3>
			<p className="text-gray-600 dark:text-gray-300">{description}</p>
		</Link>
	)
}

export default CardLink
