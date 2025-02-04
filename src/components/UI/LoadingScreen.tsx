'use client'

import { Spinner } from '@heroui/spinner'

export default function LoadingScreen() {
  return (
    <div className="container flex w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  )
}
