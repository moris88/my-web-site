'use client'

interface SkillScrollItemProps {
	img: { src: string; alt: string }
}

function SkillScrollItem({ img }: Readonly<SkillScrollItemProps>) {
	console.log('Rendering SkillItem with img:', img)
	return (
		<div className="group flex h-full w-full flex-col items-center justify-center gap-3 p-2">
			{/* <img
				alt={img.alt}
				src={img.src}
				// Dimensioni fisse e stabili per lo scroller
				className="h-12 w-12 object-contain transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-16 md:w-16 lg:h-20 lg:w-20"
			/> */}
			<p className="select-none font-medium text-slate-600 text-xs transition-colors duration-300 group-hover:text-slate-800 md:text-sm lg:text-base dark:text-slate-400 dark:group-hover:text-slate-200">
				{img.alt}
			</p>
		</div>
	)
}

export default SkillScrollItem
