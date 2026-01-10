'use client'

import { Link } from '@heroui/react'
import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'

import type { StoreLink } from '@/types'
import { generateUniqueId } from '@/utils'

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
		<footer className="flex min-h-15 w-full select-none items-center justify-between rounded-lg bg-gray-300 p-5 dark:bg-slate-800">
			<div className="flex flex-wrap gap-4 gap-y-1 text-sm lg:text-base">
				<span className="dark:text-gray-400">{copyRight}</span>
				<Link isExternal showAnchorIcon color="foreground" href="/cookies">
					<span className="font-semibold text-primary text-sm hover:text-primary lg:text-base dark:text-gray-400">
						Cookies Policy
					</span>
				</Link>
			</div>
			<div className="flex items-center gap-4">
				{links.map((link) => (
					<Link key={generateUniqueId()} href={link.url}>
						{link.name === 'facebook' && (
							<FaFacebook className="h-6 w-6 text-primary dark:text-white" />
						)}
						{link.name === 'github' && (
							<FaGithub className="h-6 w-6 text-primary dark:text-white" />
						)}
						{link.name === 'gitlab' && (
							<FaGitlab className="h-6 w-6 text-primary dark:text-white" />
						)}
						{link.name === 'linkedin' && (
							<FaLinkedin className="h-6 w-6 text-primary dark:text-white" />
						)}
					</Link>
				))}
			</div>
		</footer>
	)
}

export default MyFooter
