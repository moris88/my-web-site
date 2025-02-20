'use client'

import { ErrorPage } from '@/components'

export default function Error({ err }: { err: Error }) {
  return <ErrorPage err={err} />
}
