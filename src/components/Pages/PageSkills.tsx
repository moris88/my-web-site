'use client'

import { Wrench } from 'lucide-react'
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

	return (
		<SectionHero
			icon={<Wrench className="h-6 w-6 text-primary" />}
			title={dict.skills.title}
			subtitle={dict.skills.subtitle}
		>
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
