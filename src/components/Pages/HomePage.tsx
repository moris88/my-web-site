'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCode, FaPaintbrush, FaRobot } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'
import Typewriter from 'typewriter-effect'

import type { Dictionary } from '@/app/dictionaries'
import {
	InfiniteSkillsScroller,
	InteractiveAvatar,
	SectionCardLink,
	ServiceCard,
	Tooltip,
	UniqueButton,
} from '@/components'
import type { Info, Language } from '@/types'

interface HomePageProps {
	dict: Dictionary
	info: Info
	language: Language
}

function HomePage({ dict, info, language }: HomePageProps) {
	const [startSubTitle, setStartSubtitle] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<section className="hero">
				<img alt="cover" className="hero-image" src="cover.webp" />
				<div
					className={twMerge(
						'hero-content flex w-full flex-col items-center justify-center gap-4',
						'pr-0!',
					)}
				>
					<div
						className="flex items-center justify-center p-4 md:p-0"
						data-aos="fade-up"
					>
						<Tooltip position="bottom" text={dict.home.message}>
							<InteractiveAvatar
								alt="avatar"
								className="block aspect-square max-h-[80vh] w-full max-w-[clamp(180px,30vw,450px)]"
								src="/avatar.webp"
							/>
						</Tooltip>
					</div>
					{!startSubTitle && (
						<div className="myFont text-3xl text-shadow-md text-white">
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString('MAURIZIO TOLOMEO')
										.pauseFor(500)
										.callFunction(() => {
											setStartSubtitle(true)
										})
										.start()
								}}
							/>
						</div>
					)}
					{startSubTitle && (
						<>
							<p className="myFont text-3xl text-shadow-md text-white">
								MAURIZIO TOLOMEO
							</p>
							<div className="myFont text-center text-shadow-md text-white text-xl">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.typeString('REACT DEVELOPER')
											.pauseFor(1500)
											.deleteAll()
											.typeString('UI/UX DESIGNER')
											.pauseFor(1500)
											.deleteAll()
											.typeString('PROMPT ENGINEER')
											.pauseFor(1500)
											.deleteAll()
											.typeString('WEB DEVELOPER SPECIALIZED IN FRONTEND')
											.start()
									}}
								/>
							</div>
						</>
					)}
					<UniqueButton
						className="mt-4"
						onClick={() => router.push('/contacts')}
					>
						{language === 'en' ? 'Contact Me' : 'Contattami'}
					</UniqueButton>
				</div>
			</section>

			<section className="w-full bg-gray-50 py-20 dark:bg-[#1b1a19]">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
					<div className="flex flex-col items-center gap-4 text-center">
						<h2 className="font-bold text-3xl text-black md:text-4xl dark:text-white">
							{dict.home.whatIDoTitle}
						</h2>
						<div className="h-1 w-20 rounded-full bg-primary" />
						<div className="max-w-3xl text-gray-600 dark:text-gray-300">
							{parse(info?.whatIDoDescription?.[language] ?? '')}
						</div>
					</div>

					<div
						className="grid w-full grid-cols-1 gap-6 md:grid-cols-3"
						data-aos="fade-up"
					>
						{info.services?.map((service) => {
							const iconMap: Record<string, React.ReactNode> = {
								FaRobot: <FaRobot className="h-8 w-8" />,
								FaCode: <FaCode className="h-8 w-8" />,
								FaPaintBrush: <FaPaintbrush className="h-8 w-8" />,
							}

							return (
								<ServiceCard
									key={service.title.en}
									description={service.description[language]}
									icon={iconMap[service.icon]}
									title={service.title[language]}
								/>
							)
						})}
					</div>
				</div>
			</section>

			<section className="w-full bg-white py-20 dark:bg-slate-900">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
					<div className="flex flex-col items-center gap-4 text-center">
						<h2 className="font-bold text-3xl text-black md:text-4xl dark:text-white">
							{dict.home.whoAmITitle}
						</h2>
						<div className="h-1 w-20 rounded-full bg-primary" />
					</div>

					<div
						className="rounded-2xl bg-gray-50 p-8 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/50"
						data-aos="fade-up"
					>
						<div className="prose dark:prose-invert max-w-4xl text-justify text-black dark:text-white">
							{parse(info?.whoAmIDescription?.[language] ?? '')}
						</div>
					</div>

					<div className="mt-10 flex w-full flex-col items-center gap-6">
						<h3 className="font-semibold text-2xl text-black dark:text-white">
							My Tech Stack
						</h3>
						<div
							className="w-full max-w-4xl rounded-xl bg-gray-50 p-6 text-black shadow-md dark:bg-slate-800 dark:text-white dark:shadow-slate-900/50"
							data-aos="fade-up"
						>
							{parse(info?.secondary_skills?.[language] ?? '')}
						</div>
					</div>
				</div>
			</section>

			<section className="w-full bg-gray-50 py-20 dark:bg-[#1b1a19]">
				<div className="container mx-auto flex flex-col items-center gap-10 px-4">
					<div className="flex flex-col items-center gap-4 text-center">
						<h2 className="font-bold text-3xl text-black md:text-4xl dark:text-white">
							{dict.home.whatISpecializeInTitle}
						</h2>
						<div className="h-1 w-20 rounded-full bg-primary" />
					</div>
					<div className="w-full" data-aos="fade-up">
						<InfiniteSkillsScroller skills={info.primary_skills} />
					</div>
				</div>
			</section>

			<SectionCardLink dict={dict} />
		</>
	)
}

export default HomePage
