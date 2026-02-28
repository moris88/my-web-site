'use client'

import { Facebook, Github, Gitlab, Linkedin } from 'lucide-react'
import Link from 'next/link'
import type { StoreLink } from '@/types'

interface MyFooterProps {
	links: StoreLink[]
}

function MyFooter({ links }: Readonly<MyFooterProps>) {
	const getYear = () => {
		const today = new Date()
		return today.getFullYear()
	}
	const copyRight = `©${getYear()}-Moris™`
	return (
		<footer className="flex min-h-15 w-full select-none items-center justify-between rounded-lg bg-gray-200 p-5 dark:bg-slate-800">
			<div className="flex flex-wrap gap-4 gap-y-1 text-black text-sm lg:text-base dark:text-white">
				<span className="font-bold">{copyRight}</span>
				<Link color="foreground" href="/cookies">
					<span className="font-medium text-primary text-sm hover:text-primary/50 lg:text-base dark:text-gray-400 dark:hover:text-gray-200">
						Cookies Policy
					</span>
				</Link>
			</div>
			<div className="flex items-center gap-4">
				{links.map((link) => (
					<Link key={`footer-link-${link.name}`} href={link.url}>
						{link.name === 'facebook' && (
							<Facebook className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
						)}
						{link.name === 'github' && (
							<Github className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
						)}
						{link.name === 'gitlab' && (
							<Gitlab className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
						)}
						{link.name === 'linkedin' && (
							<Linkedin className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
						)}
					</Link>
				))}
			</div>
		</footer>
	)
}

export default MyFooter
