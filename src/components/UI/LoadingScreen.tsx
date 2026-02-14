'use client'

import Spinner from './Spinner'

export default function LoadingScreen() {
	return (
		<div className="flex min-h-[calc(100vh-130px)] w-full items-center justify-center">
			<Spinner className="h-12 w-12" />
		</div>
	)
}
