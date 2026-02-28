'use client'

import {
	FileText,
	FileUser,
	IdCard,
	Laptop,
	LineChart,
	Wrench,
} from 'lucide-react'
import { Suspense } from 'react'
import type { Dictionary } from '@/app/dictionaries'
import { Navbar } from './Navbar'
import Skeleton from './Skeleton'
import Tooltip from './Tooltip'

interface NavbarProps {
	dict: Dictionary
}

function Header({ dict }: Readonly<NavbarProps>) {
	const links = [
		{
			name: dict.navbar.curriculum,
			path: '/curriculum',
			icon: <FileUser className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.experience,
			path: '/experience',
			icon: <LineChart className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.skills,
			path: '/skills',
			icon: <Wrench className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.projects,
			path: '/projects',
			icon: <Laptop className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.blog,
			path: '/blog',
			icon: <FileText className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.contacts,
			path: '/contacts',
			icon: <IdCard className="h-4 w-4 text-primary" />,
		},
	]

	return (
		<Navbar
			navLinks={links.map(({ name, path, icon }) => ({
				title: name,
				href: path,
				icon: icon,
			}))}
			logo={
				<div className="flex items-center justify-center gap-2">
					<Suspense
						fallback={<Skeleton className="flex h-7 w-7 rounded-full" />}
					>
						<img
							alt="avatar"
							className="rounded-lg"
							height={30}
							src="/avatar.webp"
							width={30}
						/>
					</Suspense>
					<Tooltip text="Home page" position="right">
						<span className="cursor-pointer self-center whitespace-nowrap font-semibold text-base text-black transition-colors duration-300 hover:text-primary md:text-xl dark:text-white dark:hover:text-primary">
							Maurizio Tolomeo
						</span>
					</Tooltip>
				</div>
			}
		/>
	)
}

export default Header
