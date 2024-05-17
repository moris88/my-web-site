import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { getLinks } from '@/lib/request'
import { getDictionary } from './dictionaries'
import './globals.css'
import { twMerge } from 'tailwind-merge';

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
      <body className={twMerge(inter.className, 'dark box-border bg-[#1b1a19] min-h-screen pb-24')}>
        <Providers dict={dict} links={links}>{children}</Providers>
      </body>
    </html>
  )
}
