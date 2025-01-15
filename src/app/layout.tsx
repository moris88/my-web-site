import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { twMerge } from 'tailwind-merge'
import { UIWrapper } from '@/components/UI'
import { getLinks } from '@/lib/request'
import { getDictionary } from './dictionaries'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maurizio Tolomeo',
  description: 'Web Developer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = await getDictionary()
  const links = await getLinks()

  return (
    <html lang="it">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={String(metadata.description ?? '')} name="description" />
        <title>{String(metadata.title ?? '')}</title>
      </head>
      <body
        className={twMerge(
          inter.className,
          'box-border bg-white dark:bg-[#1b1a19] min-h-screen pb-24',
        )}
      >
        <UIWrapper dict={dict} links={links}>
          {children}
          <SpeedInsights />
          <Analytics />
        </UIWrapper>
      </body>
    </html>
  )
}
