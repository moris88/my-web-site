import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { isActive } from '@/utils'
import ToogleTheme from './ToogleTheme'

export const Navbar = ({
	navLinks,
	logo,
}: {
	navLinks: { title: string; href: string; icon: React.ReactNode }[]
	logo: React.ReactNode
}) => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<nav className="sticky top-0 z-50 w-full bg-gray-50 shadow-lg dark:border-slate-700 dark:bg-slate-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					{/* LOGO E DESCRIZIONE */}
					<div className="flex shrink-0 flex-col justify-center">
						<Link href="/">{logo}</Link>
					</div>

					{/* DESKTOP NAV (Hidden on Tablet/Mobile < 1024px) */}
					<div className="hidden xl:block">
						<div className="flex items-center space-x-8">
							{navLinks.map(({ title, href, icon }) =>
								ItemNavbar({ title, href, icon, pathname }),
							)}
							<ToogleTheme />
						</div>
					</div>

					{/* HAMBURGER BUTTON (Visible on Tablet/Mobile < 1024px) */}
					<div className="flex xl:hidden">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex cursor-pointer items-center justify-center p-2 text-slate-900 focus:outline-none dark:text-white"
						>
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* MOBILE/TABLET SIDEBAR MENU */}
			<div
				className={`fixed inset-y-0 right-0 z-50 w-full transform bg-white shadow-xl transition-transform duration-300 ease-in-out sm:w-80 xl:hidden dark:bg-slate-900 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex h-full flex-col p-6">
					<div className="flex items-center justify-end">
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="cursor-pointer p-2 text-slate-600 focus:outline-none dark:text-white"
						>
							<X size={28} />
						</button>
					</div>

					<div className="my-8">
						<Link href="/">{logo}</Link>
					</div>

					<div className="flex flex-col space-y-6">
						{navLinks.map(({ title, href, icon }) =>
							ItemNavbar({
								title,
								href,
								icon,
								pathname,
								onClick: () => setIsOpen(false),
							}),
						)}
						<div className="flex w-full items-center justify-center gap-2">
							<ToogleTheme />
						</div>
					</div>
				</div>
			</div>

			{/* OVERLAY */}
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
					onClick={() => setIsOpen(false)}
					onKeyDown={() => setIsOpen(false)}
				/>
			)}
		</nav>
	)
}

function ItemNavbar({
	title,
	href,
	icon,
	pathname,
	onClick,
}: {
	title: string
	href: string
	icon: React.ReactNode
	pathname: string
	onClick?: () => void
}) {
	return (
		<Link key={href} href={href} className="group" onClick={onClick}>
			<div
				className={twMerge(
					isActive(pathname, href)
						? 'border-b border-b-primary text-primary'
						: 'text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary',
					`flex items-center gap-2 pr-4 text-base transition-all duration-300 ease-in-out md:pr-0`,
				)}
			>
				<span
					className={
						isActive(pathname, href)
							? ''
							: 'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
					}
				>
					{icon}
				</span>
				{title}
			</div>
		</Link>
	)
}
