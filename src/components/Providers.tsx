'use client'

import { NextUIProvider } from '@nextui-org/system'
import { Dictionary } from '@/app/dictionaries'
import { Footer, Header } from '@/components'
import { Links } from '@/types'

interface ProvidersProps {
  children: React.ReactNode
  dict: Dictionary
  links: Links
}

export default function Providers({ children, dict, links }: ProvidersProps) {
  return (
    <NextUIProvider>
      <Header dict={dict} />
      {children}
      <Footer links={links} />
    </NextUIProvider>
  )
}
