'use client'

import 'aos/dist/aos.css'

import { Divider, Tooltip } from '@heroui/react'
import AOS from 'aos'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import type { Dictionary } from '@/app/dictionaries'
import { SkillItem, UniqueButton } from '@/components'
import type { Info, Language } from '@/types'
import Typewriter from 'typewriter-effect'

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
			<div className="hero">
				<img alt="cover" className="hero-image" src="cover.webp" />
				<div
					className={twMerge(
						'hero-content flex w-full flex-col items-center justify-center gap-4',
						'!pr-0',
					)}
				>
					<div
						className="flex items-center justify-center p-4 md:p-0"
						data-aos="fade-up"
					>
						<Tooltip
							color="default"
							content={dict.home.message}
							placement="top"
						>
							<img
								alt="avatar"
								className="block h-60 w-60 rounded-full drop-shadow-xl md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
								src="/avatar.webp"
							/>
						</Tooltip>
					</div>
					{!startSubTitle && (
						<div className="text-3xl text-shadow-md text-white">
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
							<p className="text-3xl text-shadow-md text-white">
								MAURIZIO TOLOMEO
							</p>
							<div className="text-center text-shadow-md text-white text-xl">
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
			</div>
			<div className="container flex flex-col items-center justify-center gap-4">
				<div className="my-10 flex flex-col items-center justify-center gap-2">
					<Divider className="my-5 max-w-10" />
					<p className="italic">{dict.home.whoAmITitle}</p>
					<Divider className="my-5 max-w-10" />
				</div>
				<div className="flex w-full justify-center" data-aos="fade-up">
					<div className="col-span-3 select-none rounded-lg bg-gray-200 p-2 text-justify shadow-lg shadow-slate-500 md:p-5 dark:bg-slate-600">
						{parse(info?.whoAmIDescription?.[language] ?? '')}
					</div>
				</div>
				<div className="my-10 flex flex-col items-center justify-center gap-2">
					<Divider className="my-5 max-w-10" />
					<p className="italic">{dict.home.whatIDoTitle}</p>
					<Divider className="my-5 max-w-10" />
				</div>
				<div className="flex w-full justify-center" data-aos="fade-up">
					<div className="col-span-3 select-none rounded-lg bg-gray-200 p-2 text-justify shadow-lg shadow-slate-500 md:p-5 dark:bg-slate-600">
						{parse(info?.whatIDoDescription?.[language] ?? '')}
					</div>
				</div>
				<div className="my-10 flex flex-col items-center justify-center gap-2">
					<Divider className="my-5 max-w-10" />
					<p className="italic">{dict.home.whatISpecializeInTitle}</p>
					<Divider className="my-5 max-w-10" />
				</div>
				<div
					className="mb-10 flex flex-col items-center justify-center gap-2 lg:flex-row"
					data-aos="fade-up"
				>
					{info.primary_skills.map(({ link, img }) => (
						<SkillItem key={`skill-${img.src}`} img={img} link={link} />
					))}
				</div>
			</div>
		</>
	)
}

export default HomePage
