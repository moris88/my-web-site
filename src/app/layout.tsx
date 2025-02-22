import type { Metadata } from 'next'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { UIWrapper } from '@/components'
import { getLinks } from '@/lib/data'
import { getDictionary } from './dictionaries'
import { getUser } from '@/lib'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maurizio Tolomeo | Sviluppatore Frontend & Mobile - React, Next.js',
  description:
    'Sviluppatore Frontend & Mobile con esperienza in React, Next.js, React Native e Tailwind CSS. Creazione di soluzioni moderne e performanti.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = await getDictionary()
  const links = await getLinks()
  const user = await getUser()

  return (
    <html lang={dict.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={String(metadata.description ?? '')} name="description" />
        <meta content="index, follow" name="robots" />
        <title>{String(metadata.title ?? '')}</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="https://www.mauriziotolomeo.it" rel="canonical" />
      </head>
      <body>
        <UIWrapper dict={dict} links={links} user={user}>
          {children}
          <SpeedInsights />
          <Analytics />
        </UIWrapper>
      </body>
    </html>
  )
}
