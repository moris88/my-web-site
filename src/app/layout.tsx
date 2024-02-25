import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Navbar'
import { getLinks } from '@/lib/request'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maurizio Tolomeo',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = await getLinks()
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer links={links} />
      </body>
    </html>
  )
}
