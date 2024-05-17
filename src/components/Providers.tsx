'use client'

import { NextUIProvider } from '@nextui-org/system'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface ProvidersProps {
  children: React.ReactNode
  dict: any
  links: any
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
