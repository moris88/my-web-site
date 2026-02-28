'use client'

import { ErrorPage } from '@/components'

const { error } = console

export default function DefaultError({ err }: { err: Error }) {
	error('An error occurred:', err)
	return <ErrorPage />
}
