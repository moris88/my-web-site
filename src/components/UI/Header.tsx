'use client'

import { Link } from '@heroui/link'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Skeleton,
} from '@heroui/react'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'
import { GrArticle } from 'react-icons/gr'
import { HiIdentification } from 'react-icons/hi2'
import { TbFileCv } from 'react-icons/tb'
import type { Dictionary } from '@/app/dictionaries'
import { generateUniqueId, isActive } from '@/utils'
import ToogleTheme from './ToogleTheme'

interface NavbarProps {
	dict: Dictionary
}

function Header({ dict }: Readonly<NavbarProps>) {
	const pathname = usePathname()
	const links = [
		{
			name: dict.navbar.curriculum,
			path: '/curriculum',
			icon: <TbFileCv className="h-8 w-8 text-primary" />,
		},
		{
			name: dict.navbar.experience,
			path: '/experience',
			icon: <AiOutlineLineChart className="h-8 w-8 text-primary" />,
		},
		{
			name: dict.navbar.skills,
			path: '/skills',
			icon: <FaTools className="h-6 w-6 text-primary" />,
		},
		{
			name: dict.navbar.projects,
			path: '/projects',
			icon: <FaLaptopCode className="h-8 w-8 text-primary" />,
		},
		{
			name: dict.navbar.blog,
			path: '/blog',
			icon: <GrArticle className="h-8 w-8 text-primary" />,
		},
		{
			name: dict.navbar.contacts,
			path: '/contacts',
			icon: <HiIdentification className="h-8 w-8 text-primary" />,
		},
	]

	return (
		<Navbar
			isBlurred
			className="max-h-15 rounded-lg! bg-gray-300 dark:bg-slate-800"
			position="sticky"
		>
			<NavbarBrand>
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
					<Link href="/">
						<span className="self-center whitespace-nowrap font-semibold text-base text-black md:text-xl dark:text-white">
							Maurizio Tolomeo
						</span>
					</Link>
				</div>
			</NavbarBrand>
			<NavbarContent className="lg:hidden" justify="end">
				<NavbarMenuToggle id="button-mobile-navbar" />
			</NavbarContent>
			<NavbarMenu className="overflow-hidden">
				{links.map(({ name, path, icon }) => (
					<NavbarMenuItem
						key={generateUniqueId()}
						className="flex flex-col w-full items-center justify-center"
					>
						<Link href={path} className="my-8 group">
							<div
								className={`${isActive(pathname, path) ? 'text-primary dark:text-gray-400' : 'text-black hover:text-primary dark:text-white dark:hover:text-gray-400'} transition-all duration-300 ease-in-out text-2xl flex items-center gap-4`}
							>
								<span
									className={
										isActive(pathname, path)
											? ''
											: 'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
									}
								>
									{icon}
								</span>
								{name}
							</div>
						</Link>
						<hr className="border-t border-primary w-1/2" />
					</NavbarMenuItem>
				))}
				<NavbarMenuItem className="flex w-full justify-center my-8">
					<ToogleTheme>
						<span className="text-2xl">{dict.navbar.theme}</span>
					</ToogleTheme>
				</NavbarMenuItem>
			</NavbarMenu>
			<NavbarContent className="hidden gap-4 lg:flex" justify="end">
				{links.map(({ name, path }) => (
					<NavbarItem key={generateUniqueId()}>
						<Link href={path}>
							<span
								className={`${isActive(pathname, path) ? 'border-b border-b-primary text-primary dark:border-b-gray-400 dark:text-gray-400' : 'text-black hover:border-b hover:border-b-primary hover:text-primary dark:text-white dark:hover:border-b-gray-400 dark:hover:text-gray-400'} transition-all duration-300 ease-in-out`}
							>
								{name}
							</span>
						</Link>
					</NavbarItem>
				))}
				<div className="hidden lg:flex">
					<ToogleTheme />
				</div>
			</NavbarContent>
		</Navbar>
	)
}

export default Header
