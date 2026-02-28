'use client'

import { TriangleAlert } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="container flex min-h-[calc(100vh-144px)] w-full items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<TriangleAlert className="h-12 w-12 text-red-500" />
					<span className="text-4xl text-black dark:text-white">
						{'Page not found!'}
					</span>
				</div>
				<Link href={'/'} className="text-lg text-primary hover:underline">
					{'Return Home'}
				</Link>
			</div>
		</div>
	)
}
