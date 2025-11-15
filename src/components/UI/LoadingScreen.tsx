'use client'

import { Spinner } from '@heroui/spinner'

export default function LoadingScreen() {
	return (
		<div className="flex min-h-[calc(100vh-130px)] w-full items-center justify-center">
			<Spinner size="lg" variant="gradient" />
		</div>
	)
}
