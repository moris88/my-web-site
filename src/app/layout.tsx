import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { UIWrapper } from '@/components'
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
      <body
        className={twMerge(
          inter.className,
          'box-border bg-white dark:bg-[#1b1a19] min-h-screen pb-24',
        )}
      >
        <UIWrapper dict={dict} links={links}>
          {children}
        </UIWrapper>
      </body>
    </html>
  )
}
