import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type React from 'react'

import { UIWrapper } from '@/components'
import { getLinks } from '@/lib/data'

import { getDictionary } from './dictionaries'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: 'Maurizio Tolomeo | Frontend & Mobile Developer - React, Next.js',
	description:
		'Frontend & Mobile Developer with experience in React, Next.js, React Native, and Tailwind CSS. Building modern and performant solutions.',
	keywords: [
		'nextjs',
		'react',
		'tailwindcss',
		'typescript',
		'portfolio',
		'blog',
		'personal-website',
		'web-developer',
		'frontend',
		'Maurizio Tolomeo',
	],
	authors: [{ name: 'Maurizio Tolomeo', url: 'https://mauriziotolomeo.it' }],
	creator: 'Maurizio Tolomeo',
	publisher: 'Maurizio Tolomeo',
	openGraph: {
		title: 'Maurizio Tolomeo | Frontend & Mobile Developer',
		description:
			'Frontend & Mobile Developer with experience in React, Next.js, React Native, and Tailwind CSS.',
		url: 'https://mauriziotolomeo.it',
		siteName: "Maurizio Tolomeo's Portfolio",
		images: [
			{
				url: 'https://mauriziotolomeo.it/cover.webp',
				width: 1200,
				height: 630,
				alt: 'Maurizio Tolomeo - Frontend & Mobile Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Maurizio Tolomeo | Frontend & Mobile Developer',
		description:
			'Frontend & Mobile Developer with experience in React, Next.js, React Native, and Tailwind CSS.',
		images: ['https://mauriziotolomeo.it/cover.webp'],
		creator: '@mauriziotolomeo',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	verification: {
		google: process.env.GOOGLE_VERIFICATION_CODE,
	},
	alternates: {
		canonical: 'https://mauriziotolomeo.it',
		languages: {
			'en-US': 'https://mauriziotolomeo.it/en',
			'it-IT': 'https://mauriziotolomeo.it/it',
		},
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const dict = await getDictionary()
	const links = await getLinks()

	return (
		<html lang={dict.lang}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<UIWrapper dict={dict} links={links}>
					{children}
					{process.env.DEVELOPMENT !== 'true' && (
						<>
							<Analytics />
							<SpeedInsights />
						</>
					)}
				</UIWrapper>
			</body>
		</html>
	)
}
