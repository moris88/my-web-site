'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

export default function DefaultError() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-4">
        <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
        <span className="text-4xl">Ops! Working in progress!</span>
      </div>
    </div>
  )
}
