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
		<div className="relative m-auto w-full overflow-hidden bg-gray-50 before:absolute before:top-0 before:left-0 before:z-2 before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#f9fafb_0%,rgba(249,250,251,0)_100%)] before:content-[''] after:absolute after:top-0 after:right-0 after:z-2 after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,#f9fafb_0%,rgba(249,250,251,0)_100%)] after:content-[''] dark:bg-[#1b1a19] dark:after:bg-[linear-gradient(to_left,#1b1a19_0%,rgba(27,26,25,0)_100%)] dark:before:bg-[linear-gradient(to_right,#1b1a19_0%,rgba(27,26,25,0)_100%)]">
			<div className="flex w-[calc(250px*14)] animate-scroll hover:[animation-play-state:paused]">
				{skills.map((skill) => (
					<div
						className="flex w-[250px] items-center justify-center"
						key={`skill-1-${skill.img.src}`}
					>
						<SkillItem img={skill.img} link={skill.link} />
					</div>
				))}
				{skills.map((skill) => (
					<div
						className="flex w-[250px] items-center justify-center"
						key={`skill-2-${skill.img.src}`}
					>
						<SkillItem img={skill.img} link={skill.link} />
					</div>
				))}
			</div>
		</div>
	)
}

export default InfiniteSkillsScroller
