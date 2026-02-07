'use client'

import {
	FaBook,
	FaCode,
	FaEnvelope,
	FaProjectDiagram,
	FaUser,
} from 'react-icons/fa'
import type { Dictionary } from '@/app/dictionaries'
import CardLink from './CardLink'

interface SectionCardLinkProps {
	dict: Dictionary
}

function SectionCardLink({ dict }: Readonly<SectionCardLinkProps>) {
	const links = [
		{
			name: dict.navbar.curriculum,
			path: '/curriculum',
			icon: <FaUser className="h-8 w-8" />,
			description: dict.home.links.curriculum,
		},
		{
			name: dict.navbar.experience,
			path: '/experience',
			icon: <FaProjectDiagram className="h-8 w-8" />,
			description: dict.home.links.experience,
		},
		{
			name: dict.navbar.skills,
			path: '/skills',
			icon: <FaCode className="h-8 w-8" />,
			description: dict.home.links.skills,
		},
		{
			name: dict.navbar.projects,
			path: '/projects',
			icon: <FaProjectDiagram className="h-8 w-8" />,
			description: dict.home.links.portfolio,
		},
		{
			name: dict.navbar.blog,
			path: '/blog',
			icon: <FaBook className="h-8 w-8" />,
			description: dict.home.links.blog,
		},
		{
			name: dict.navbar.contacts,
			path: '/contacts',
			icon: <FaEnvelope className="h-8 w-8" />,
			description: dict.home.links.contacts,
		},
	]

	return (
		<section className="w-full bg-white py-20 dark:bg-slate-900">
			<div className="container mx-auto flex flex-col items-center gap-10 px-4">
				<div className="flex flex-col items-center gap-4 text-center">
					<h2 className="font-bold text-3xl text-black md:text-4xl dark:text-white">
						{dict.home.navigate}
					</h2>
					<div className="h-1 w-20 rounded-full bg-primary" />
				</div>
				<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{links.map((link) => (
						<CardLink
							key={link.path}
							icon={link.icon}
							title={link.name}
							description={link.description}
							path={link.path}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default SectionCardLink
