'use client'

import type { Info } from '@/types'

interface InfiniteSkillsScrollerProps {
	skills: Info['primary_skills']
}

function InfiniteSkillsScroller({
	skills,
}: Readonly<InfiniteSkillsScrollerProps>) {
	console.log('Rendering InfiniteSkillsScroller with skills:', skills)
	if (!skills || skills.length === 0) {
		return null // O mostra un messaggio di caricamento o un placeholder
	}
	return (
		// Aggiunto h-24 per dare altezza, e fixate le unità arbitrarie [width]
		<div className="relative m-auto h-36 w-full overflow-hidden bg-gray-50 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-25 before:bg-[linear-gradient(to_right,#f9fafb_0%,rgba(249,250,251,0)_100%)] before:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-25 after:bg-[linear-gradient(to_left,#f9fafb_0%,rgba(249,250,251,0)_100%)] after:content-[''] dark:bg-[#1b1a19] dark:after:bg-[linear-gradient(to_left,#1b1a19_0%,rgba(27,26,25,0)_100%)] dark:before:bg-[linear-gradient(to_right,#1b1a19_0%,rgba(27,26,25,0)_100%)]">
			{/* w-max assicura che il div si espanda in base al contenuto per l'animazione */}
			<div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
				{skills.map((skill, index) => {
					if (!skill.img || !skill.img?.src) {
						console.warn(
							`Skill at index ${index} is missing img or img.src:`,
							skill,
						)
						return null // Salta questa skill se l'immagine non è valida
					}
					return (
						<div
							className="flex w-37.5 shrink-0 items-center justify-center"
							key={`skill-1-${skill.img.src}-${index}`}
						>
							<div className="group flex h-full w-full flex-col items-center justify-center gap-3 p-2">
								<img
									alt={skill.img.alt}
									src={skill.img.src}
									// Dimensioni fisse e stabili per lo scroller
									className="h-12 w-12 object-contain transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-16 md:w-16 lg:h-20 lg:w-20"
								/>
								<p className="select-none font-medium text-slate-600 text-xs transition-colors duration-300 group-hover:text-slate-800 md:text-sm lg:text-base dark:text-slate-400 dark:group-hover:text-slate-200">
									{skill.img.alt}
								</p>
							</div>
						</div>
					)
				})}
				{/* Duplicazione per effetto infinito */}
				{skills.map((skill, index) => {
					if (!skill.img || !skill.img?.src) {
						console.warn(
							`Skill at index ${index} is missing img or img.src:`,
							skill,
						)
						return null // Salta questa skill se l'immagine non è valida
					}
					return (
						<div
							className="flex w-37.5 shrink-0 items-center justify-center"
							key={`skill-2-${skill.img.src}-${index}`}
						>
							<div
								className="flex w-37.5 shrink-0 items-center justify-center"
								key={`skill-1-${skill.img.src}-${index}`}
							>
								<div className="group flex h-full w-full flex-col items-center justify-center gap-3 p-2">
									<img
										alt={skill.img.alt}
										src={skill.img.src}
										// Dimensioni fisse e stabili per lo scroller
										className="h-12 w-12 object-contain transition-transform duration-500 ease-in-out group-hover:scale-125 md:h-16 md:w-16 lg:h-20 lg:w-20"
									/>
									<p className="select-none font-medium text-slate-600 text-xs transition-colors duration-300 group-hover:text-slate-800 md:text-sm lg:text-base dark:text-slate-400 dark:group-hover:text-slate-200">
										{skill.img.alt}
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default InfiniteSkillsScroller
