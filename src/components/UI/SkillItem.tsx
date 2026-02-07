'use client'

import Link from 'next/link'

interface SkillItemProps {
	link: { url: string }
	img: { src: string; alt: string }
}

function SkillItem({ link, img }: Readonly<SkillItemProps>) {
	console.log('Rendering SkillItem with link:', link, 'and img:', img)
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-3 p-2">
			<Link
				href={link.url}
				className="group flex items-center justify-center"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					alt={img.alt}
					src={img.src}
					// Dimensioni fisse e stabili per lo scroller
					className="h-12 w-12 object-contain transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-16 md:w-16 lg:h-20 lg:w-20"
				/>
			</Link>
			<p className="select-none font-medium text-slate-600 text-xs dark:text-slate-400">
				{img.alt}
			</p>
		</div>
	)
}

export default SkillItem
