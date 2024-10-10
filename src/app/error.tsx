'use client'

import { HiExclamationTriangle } from 'react-icons/hi2'

export default function DefaultError() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-4">
        <HiExclamationTriangle className="h-12 w-12 text-red-500" />
        <span className="text-4xl">Ops! Working in progress!</span>
      </div>
    </div>
  )
}
