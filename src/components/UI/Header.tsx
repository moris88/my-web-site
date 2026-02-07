'use client'

import { Suspense } from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'
import { GrArticle } from 'react-icons/gr'
import { HiIdentification } from 'react-icons/hi2'
import { TbFileCv } from 'react-icons/tb'
import type { Dictionary } from '@/app/dictionaries'
import { Navbar } from './Navbar'
import Skeleton from './Skeleton'

interface NavbarProps {
	dict: Dictionary
}

function Header({ dict }: Readonly<NavbarProps>) {
	const links = [
		{
			name: dict.navbar.curriculum,
			path: '/curriculum',
			icon: <TbFileCv className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.experience,
			path: '/experience',
			icon: <AiOutlineLineChart className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.skills,
			path: '/skills',
			icon: <FaTools className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.projects,
			path: '/projects',
			icon: <FaLaptopCode className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.blog,
			path: '/blog',
			icon: <GrArticle className="h-4 w-4 text-primary" />,
		},
		{
			name: dict.navbar.contacts,
			path: '/contacts',
			icon: <HiIdentification className="h-4 w-4 text-primary" />,
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
					<span className="self-center whitespace-nowrap font-semibold text-base text-black md:text-xl dark:text-white">
						Maurizio Tolomeo
					</span>
				</div>
			}
		/>
	)
}

export default Header
