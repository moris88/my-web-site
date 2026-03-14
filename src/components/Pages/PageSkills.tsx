'use client'

import { AnimatePresence, motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { ChevronDown, Wrench } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import {
	Accordion,
	Button,
	Card,
	CardContent,
	Dialog,
	ProgressBar,
	SectionHero,
	Tabs,
} from '@/components'
import type { Language, Skill, Skills } from '@/types'

interface SkillsProps {
	skills: Skills
	dict: Dictionary
	language: Language
}

export default function PageSkills({
	skills,
	language,
	dict,
}: Readonly<SkillsProps>) {
	const route = useRouter()
	const [skill, setSkill] = React.useState<{
		title: string
		description: string
	} | null>(null)
	const hardSkills = Object.keys(skills).filter((key) => key !== 'soft')
	const softSkills = Object.keys(skills).filter((key) => key === 'soft')
	const [showLegend, setShowLegend] = React.useState<boolean>(false)

	// Stato per il tasto Scroll to Top
	const [showScrollTop, setShowScrollTop] = React.useState<boolean>(false)

	React.useEffect(() => {
		const handleScrollWindow = () => {
			setShowScrollTop(window.scrollY > 400)
		}
		window.addEventListener('scroll', handleScrollWindow)
		return () => window.removeEventListener('scroll', handleScrollWindow)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const mappa = {
		0: dict.skills.languages,
		1: dict.skills.frontends,
		2: dict.skills.frameworks_frontend,
		3: dict.skills.frameworks_backend,
		4: dict.skills.database,
		5: dict.skills.tools,
		6: dict.skills.platforms,
	}

	const handleClickClose = () => {
		setSkill(null)
	}

	const handleClickOpen = (skill: Skill) => {
		setSkill({
			title:
				typeof skill.title === 'string' ? skill.title : skill.title[language],
			description: skill.description?.[language] ?? '',
		})
	}

	const handleClickOpenLink = (link?: string) => {
		if (!link) {
			return
		}
		route.push(link)
	}

	const mapColor: Record<
		number,
		'danger' | 'warning' | 'success' | 'secondary' | 'primary'
	> = {
		1: 'danger',
		2: 'danger',
		3: 'danger',
		4: 'danger',
		5: 'danger',
		6: 'warning',
		7: 'success',
		8: 'success',
		9: 'secondary',
		10: 'secondary',
	}

	const renderIcon = (iconName?: string) => {
		if (!iconName) return null
		const IconComponent = (
			LucideIcons as unknown as Record<string, React.ElementType>
		)[iconName]
		return IconComponent ? <IconComponent className="h-5 w-5" /> : null
	}

	return (
		<SectionHero
			icon={<Wrench className="h-6 w-6 text-primary" />}
			title={dict.skills.title}
			subtitle={dict.skills.subtitle}
		>
			{/* BOTTONE SCROLL TO TOP */}
			<AnimatePresence>
				{showScrollTop && (
					<div className="fixed right-6 bottom-20 z-50 flex">
						<motion.button
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={scrollToTop}
							className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-black/5 transition-colors hover:bg-slate-50 md:h-14 md:w-14 dark:bg-slate-800 dark:ring-white/10 dark:hover:bg-slate-700"
						>
							<ChevronDown className="h-6 w-6 rotate-180 text-primary md:h-7 md:w-7" />
						</motion.button>
					</div>
				)}
			</AnimatePresence>

			<div className="flex flex-col justify-center px-2 md:px-14">
				<div className="block">
					{skill && (
						<Dialog
							isOpen={skill !== null}
							onClose={handleClickClose}
							title={skill.title}
						>
							<p>{skill.description}</p>
						</Dialog>
					)}
					<Tabs
						position="center"
						tabs={[
							{
								id: 'hard',
								label: 'Hard Skills',
								content: (
									<div className="flex flex-col gap-2">
										{hardSkills?.map((key, index) => (
											<Accordion
												key={`hard-${key}`}
												allowMultiple
												items={[
													{
														id: `hard-item-${index}`,
														title: mappa[index as keyof typeof mappa],
														content: (
															<div className="flex flex-col gap-2">
																<p className="text-center text-sm italic">
																	{skills[key]?.description?.[language]}
																</p>
																<div className="my-4 grid grid-cols-1 gap-4 gap-y-4 px-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
																	{skills[key]?.list
																		?.toSorted((a, b) => b.level - a.level)
																		.map((skill: Skill) => {
																			return (
																				<button
																					type="button"
																					key={`hard-skill-${index}-${skill.title}`}
																					disabled={!skill.link}
																					className="cursor-pointer"
																					onClick={() =>
																						handleClickOpenLink(skill.link)
																					}
																				>
																					<Card className="bg-gray-300">
																						<CardContent
																							icon={renderIcon(skill.icon)}
																							title={skill.title as string}
																						>
																							<ProgressBar
																								color={mapColor[skill.level]}
																								value={skill.level * 10}
																							/>
																						</CardContent>
																					</Card>
																				</button>
																			)
																		})}
																</div>
															</div>
														),
													},
												]}
											/>
										))}
									</div>
								),
							},
							{
								id: 'soft',
								label: 'Soft Skills',
								content: (
									<>
										{softSkills?.map((key) => (
											<div key={`soft-${key}`} className="flex flex-col gap-2">
												<p className="text-center text-black text-sm italic dark:text-white">
													{skills[key].description[language]}
												</p>
												<div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
													{skills[key].list
														.toSorted((a, b) => b.level - a.level)
														.map((skill: Skill, index) => {
															return (
																<button
																	key={`soft-skill-${key}-${index}`}
																	type="button"
																	onClick={(e) => {
																		e.preventDefault()
																		e.stopPropagation()
																		handleClickOpen(skill)
																	}}
																>
																	<Card className="bg-gray-100">
																		<CardContent
																			icon={renderIcon(skill.icon)}
																			title={
																				typeof skill.title === 'string'
																					? skill.title
																					: skill.title[language]
																			}
																		>
																			<ProgressBar
																				color={mapColor[skill.level]}
																				value={skill.level * 10}
																			/>
																		</CardContent>
																	</Card>
																</button>
															)
														})}
												</div>
											</div>
										))}
									</>
								),
							},
						]}
						defaultValue="hard"
						radius="full"
					/>
					<div className="my-5 flex items-center justify-center">
						<Button type="button" onClick={() => setShowLegend((t) => !t)}>
							{!showLegend
								? dict.skills.legend.buttons.show
								: dict.skills.legend.buttons.hide}
						</Button>
					</div>
					{showLegend && (
						<div className="my-5 flex w-full flex-col items-center justify-center gap-2">
							<p className="text-center font-semibold text-black text-sm italic dark:text-white">
								{dict.skills.legend.title}
							</p>
							<p className="text-center text-black text-sm italic dark:text-white">
								{dict.skills.legend.description}
							</p>
							<ul className="w-full max-w-xl">
								{dict.skills.legend.list.map((item) => (
									<li
										key={`legend-item-${item.label}`}
										className="w-full py-4 text-sm"
									>
										<ProgressBar
											color={
												item.color as
													| 'danger'
													| 'warning'
													| 'success'
													| 'secondary'
													| 'primary'
											}
											label={item.label}
											value={item.level}
										/>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</SectionHero>
	)
}
