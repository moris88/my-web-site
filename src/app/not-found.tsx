'use client'

import { Link } from '@heroui/react'
import { HiExclamationTriangle } from 'react-icons/hi2'

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-130px)] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <HiExclamationTriangle className="h-12 w-12 text-red-500" />
          <span className="text-4xl">{'Page not found!'}</span>
        </div>
        <Link isExternal showAnchorIcon href={'/'}>
          {'Return Home'}
        </Link>
      </div>
    </div>
  )
}
