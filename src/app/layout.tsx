import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { twMerge } from 'tailwind-merge'
import { UIWrapper } from '@/components/UI'
import { getLinks } from '@/lib/data'
import { getDictionary } from './dictionaries'
import './globals.css'
import { getUser } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maurizio Tolomeo | Sviluppatore Frontend & Mobile - React, Next.js',
  description: 'Sviluppatore Frontend & Mobile con esperienza in React, Next.js, React Native e Tailwind CSS. Creazione di soluzioni moderne e performanti.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = await getDictionary()
  const links = await getLinks()
  const response = await getUser()
  const user = response?.data?.user ?? null

  return (
    <html lang="it">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={String(metadata.description ?? '')} name="description" />
        <meta name="robots" content="index, follow" />
        <title>{String(metadata.title ?? '')}</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="https://www.mauriziotolomeo.it" rel="canonical" />
      </head>
      <body
        className={twMerge(
          inter.className,
          'box-border bg-white dark:bg-[#1b1a19]',
        )}
      >
        <UIWrapper dict={dict} links={links} user={user}>
          {children}
          <SpeedInsights />
          <Analytics />
        </UIWrapper>
      </body>
    </html>
  )
}
