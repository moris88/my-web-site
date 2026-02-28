'use client'

import { motion } from 'framer-motion'
import { Facebook, Github, Gitlab, IdCard, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import {
	Button,
	ButtonsGroupSocial,
	InteractiveAvatar,
	ModalMessage,
	SectionHero,
} from '@/components'
import type { Contact, StoreLink } from '@/types'

interface PageContactsProps {
	contacts: Contact
	links: StoreLink[]
	dict: Dictionary
}

export default function PageContacts({
	contacts,
	links,
	dict,
}: Readonly<PageContactsProps>) {
	const [storeLink, setStoreLink] = React.useState<StoreLink | null>(null)
	const iconMap: Record<string, React.ReactNode> = {
		facebook: <Facebook className="h-6 w-6" />,
		github: <Github className="h-6 w-6" />,
		linkedin: <Linkedin className="h-6 w-6" />,
		gitlab: <Gitlab className="h-6 w-6" />,
	}

	const linkMap = links.reduce(
		(acc, link) => {
			acc[link.name.toLowerCase()] = link
			return acc
		},
		{} as Record<string, (typeof links)[0]>,
	)

	return (
		<SectionHero
			icon={<IdCard className="h-8 w-8 text-primary" />}
			title={dict.contacts.title}
			subtitle={dict.contacts.subtitle}
		>
			<div className="container mx-auto flex flex-col items-center gap-10 px-4">
				{contacts && (
					<div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
						{/* Left Column: Profile & Info */}
						<motion.div
							animate={{ opacity: 1, x: 0 }}
							className="flex flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/50"
							initial={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}
						>
							<div className="flex flex-col items-center gap-6">
								<InteractiveAvatar
									alt="avatar"
									className="block h-40 w-40 rounded-full drop-shadow-xl md:h-60 md:w-60"
									src="/avatar_2.webp"
								/>
								<div className="text-center">
									<h3 className="font-bold text-2xl text-black dark:text-white">
										{`${contacts?.firstName} ${contacts?.lastName}`}
									</h3>
									<p className="font-medium text-gray-500 text-lg dark:text-gray-400">
										{contacts?.job}
									</p>
									<p className="text-gray-400 italic">
										{contacts?.specialization}
									</p>
								</div>
								<Link
									className="text-lg text-primary hover:underline"
									href={`mailto:${contacts?.email ?? ''}`}
								>
									{contacts?.email ?? ''}
								</Link>
								<div className="w-full">
									<div className="flex flex-col flex-wrap justify-center gap-3 md:flex-row">
										{contacts.links.map((button) => {
											console.log('button', button)
											const buttonLower = button.toLowerCase()
											const storeLink = linkMap[buttonLower]
											return (
												<Button
													key={buttonLower}
													onClick={() => storeLink && setStoreLink(storeLink)}
												>
													<span className="flex items-center gap-2">
														{iconMap[buttonLower]}
														{
															dict.contacts.buttons[
																button as keyof typeof dict.contacts.buttons
															] as string
														}
													</span>
												</Button>
											)
										})}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right Column: Contact Form */}
						<motion.div
							animate={{ opacity: 1, x: 0 }}
							className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/50"
							initial={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="w-full max-w-md">
								<ModalMessage
									className="flex flex-col gap-4"
									dict={dict}
									modal={false}
								/>
							</div>
						</motion.div>
					</div>
				)}

				<div className="mt-10">
					<ButtonsGroupSocial
						dict={dict}
						setStoreLink={setStoreLink}
						storeLink={storeLink}
					/>
				</div>
			</div>
		</SectionHero>
	)
}
