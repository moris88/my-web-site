'use client'

import { Spinner } from '@heroui/spinner'

export default function LoadingScreen() {
  return (
    <div className="flex w-full min-h-[calc(100vh-130px)] items-center justify-center">
      <Spinner size="lg" variant="gradient" />
    </div>
  )
}
