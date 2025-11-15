'use client'

import { Link } from '@heroui/react'

interface SkillItemProps {
	link: { url: string }
	img: { src: string; alt: string }
}

function SkillItem({ link, img }: Readonly<SkillItemProps>) {
	return (
		<div className="flex max-h-full min-h-20 flex-row items-center justify-center gap-2 lg:max-h-20 lg:flex-col">
			<Link isExternal href={link.url}>
				<img
					alt={img.alt}
					className="h-auto w-full max-w-8 rounded-xl object-cover drop-shadow-lg transition-all duration-600 ease-in-out hover:max-w-20 lg:max-w-12"
					src={img.src}
				/>
			</Link>
			<p className="select-none">{img.alt}</p>
		</div>
	)
}

export default SkillItem
