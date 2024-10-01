'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function ErrorPage({ error }: { error?: string }) {
  return (
    <div className="container flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-4">
        <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
        <span className="text-4xl">{error ?? 'Ops! Error Page...'}</span>
      </div>
    </div>
  )
}

export default ErrorPage
