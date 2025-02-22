'use client'

import React from 'react'
import { ErrorPage } from '@/components'

export default function DefaultError({ err }: { err: Error }) {
  return <ErrorPage err={err} />
}
