'use client'

import { SkillItem } from '@/components'
import type { Info } from '@/types'

interface InfiniteSkillsScrollerProps {
	skills: Info['primary_skills']
}

function InfiniteSkillsScroller({
	skills,
}: Readonly<InfiniteSkillsScrollerProps>) {
	return (
		// Aggiunto h-24 per dare altezza, e fixate le unità arbitrarie [width]
		<div className="relative m-auto h-36 w-full overflow-hidden bg-gray-50 before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-25 before:bg-[linear-gradient(to_right,#f9fafb_0%,rgba(249,250,251,0)_100%)] before:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-25 after:bg-[linear-gradient(to_left,#f9fafb_0%,rgba(249,250,251,0)_100%)] after:content-[''] dark:bg-[#1b1a19] dark:after:bg-[linear-gradient(to_left,#1b1a19_0%,rgba(27,26,25,0)_100%)] dark:before:bg-[linear-gradient(to_right,#1b1a19_0%,rgba(27,26,25,0)_100%)]">
			{/* w-max assicura che il div si espanda in base al contenuto per l'animazione */}
			<div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
				{skills.map((skill, index) => (
					<div
						className="flex w-37.5 shrink-0 items-center justify-center"
						key={`skill-1-${skill.img.src}-${index}`}
					>
						<SkillItem img={skill.img} />
					</div>
				))}
				{/* Duplicazione per effetto infinito */}
				{skills.map((skill, index) => (
					<div
						className="flex w-37.5 shrink-0 items-center justify-center"
						key={`skill-2-${skill.img.src}-${index}`}
					>
						<SkillItem img={skill.img} />
					</div>
				))}
			</div>
		</div>
	)
}

export default InfiniteSkillsScroller
