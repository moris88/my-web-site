'use client'

import { TriangleAlert } from 'lucide-react'

function ErrorPage({ err }: { err: Error }) {
	const { error } = console
	error(err)
	return (
		<div className="container flex h-full w-full items-center justify-center">
			<div className="flex items-center gap-4">
				<TriangleAlert className="h-12 w-12 text-red-500" />
				<span className="text-4xl">{'Ops! Error Page...'}</span>
			</div>
		</div>
	)
}

export default ErrorPage
