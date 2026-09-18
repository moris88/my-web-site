'use client'

import { useStore } from 'jotai'
import { Home } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { themeAtom } from '@/atoms'
import { Facebook, Github, Gitlab, Instagram, Linkedin } from '@/components'
import { buttonVariants } from '@/components/UI/Button'
import links from '@/data/links.json'
import { cn } from '@/lib/utils'
import { setThemeDocument } from '@/utils'

const iconMap: Record<string, React.ReactNode> = {
	linkedin: <Linkedin className="h-5 w-5" />,
	github: <Github className="h-5 w-5" />,
	gitlab: <Gitlab className="h-5 w-5" />,
	facebook: <Facebook className="h-5 w-5" />,
	instagram: <Instagram className="h-5 w-5" />,
}

export default function SocialsPage() {
	const searchParams = useSearchParams()
	const darkTheme = searchParams.get('dark')
	const atomStore = useStore()

	React.useEffect(() => {
		atomStore.set(themeAtom, darkTheme ? 'dark' : 'light')
		setThemeDocument(darkTheme ? 'dark' : 'light')
	}, [darkTheme, atomStore.set])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-6">
			<img
				alt="avatar"
				className="block h-40 w-40 rounded-full drop-shadow-xl md:h-60 md:w-60"
				src="/avatar_2.webp"
			/>
			<h1 className="my-3 font-bold text-3xl text-slate-900 dark:text-white">
				Maurizio Tolomeo
			</h1>
			<p className="mb-4 text-slate-900 italic dark:text-white">
				Connettiti con me
			</p>
			<div className="flex w-full max-w-sm flex-col gap-4">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ variant: 'secondary', size: 'lg' }),
							'w-full gap-3',
						)}
					>
						{iconMap[link.name]}
						{link.label}
					</a>
				))}
				<a
					href="/"
					className={cn(
						buttonVariants({ variant: 'default', size: 'lg' }),
						'w-full gap-3',
					)}
				>
					<Home className="h-5 w-5" />
					My Web Site
				</a>
			</div>
		</div>
	)
}
