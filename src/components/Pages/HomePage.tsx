'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { Bot, Code, Paintbrush } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
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
								Bot: <Bot className="h-8 w-8" />,
								Code: <Code className="h-8 w-8" />,
								Paintbrush: <Paintbrush className="h-8 w-8" />,
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
						<div className="prose dark:prose-invert max-w-4xl text-black dark:text-white">
							{parse(info?.whoAmIDescription?.[language] ?? '')}
						</div>
					</div>

					<div className="mt-16 flex w-full flex-col items-center gap-10">
						<div className="flex flex-col items-center gap-2">
							<h3 className="font-bold text-3xl text-black dark:text-white">
								My Tech Stack
							</h3>
							<div className="h-1 w-12 rounded-full bg-primary/40" />
						</div>

						<div
							className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
							data-aos="fade-up"
						>
							{[
								{
									title: 'Frontend Core',
									skills: [
										'React (Advanced)',
										'Next.js',
										'TypeScript',
										'Tailwind CSS',
										'SCSS',
									],
									color: 'from-blue-500/10 to-cyan-500/10',
									icon: <Code className="text-blue-500" />,
								},
								{
									title: 'Backend Core',
									skills: ['Node.js', 'Express.js', 'Supabase', 'REST APIs'],
									color: 'from-green-500/10 to-emerald-500/10',
									icon: <Code className="text-green-500" />,
								},
								{
									title: 'Database',
									skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
									color: 'from-purple-500/10 to-pink-500/10',
									icon: <Code className="text-purple-500" />,
								},
								{
									title: 'Tools & Design',
									skills: ['Git & GitHub', 'Figma', 'Biome', 'Vercel'],
									color: 'from-orange-500/10 to-yellow-500/10',
									icon: <Paintbrush className="text-orange-500" />,
								},
							].map((category, idx) => (
								<motion.div
									key={category.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -5 }}
									className={twMerge(
										'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-800/50',
										'hover:border-primary/30 hover:shadow-xl dark:hover:border-primary/30',
									)}
								>
									<div
										className={twMerge(
											'absolute inset-0 -z-10 bg-linear-to-br opacity-0 transition-opacity group-hover:opacity-100',
											category.color,
										)}
									/>

									<div className="flex items-start justify-between">
										<div className="flex flex-col gap-1">
											<span className="font-bold text-primary/60 text-xs uppercase tracking-wider">
												Category
											</span>
											<h4 className="font-bold text-slate-900 text-xl dark:text-white">
												{category.title}
											</h4>
										</div>
										<div className="rounded-xl bg-slate-100 p-3 text-xl dark:bg-slate-800">
											{category.icon}
										</div>
									</div>

									<div className="mt-6 flex flex-wrap gap-2">
										{category.skills.map((skill) => (
											<span
												key={skill}
												className="rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-1 font-medium text-slate-600 text-sm transition-colors group-hover:border-primary/20 group-hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-slate-700"
											>
												{skill}
											</span>
										))}
									</div>
								</motion.div>
							))}
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
