'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type React from 'react'
import { useState } from 'react'
import Card, { CardContent } from './Card'

interface ServiceCardProps {
	title: string
	description: string
	icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: Readonly<ServiceCardProps>) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div
			layout
			whileHover={{ y: -5 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="h-full cursor-default"
			transition={{
				layout: { duration: 0.3, ease: 'easeOut' },
				y: { duration: 0.2 },
			}}
		>
			<Card className="relative h-full overflow-hidden border-2 transition-colors duration-300 hover:border-primary/50">
				<CardContent icon={icon} title={title}>
					<motion.div layout className="relative mt-2 overflow-hidden">
						<AnimatePresence mode="wait">
							{!isHovered ? (
								<motion.div
									key="indicator"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="flex items-center gap-2 font-medium text-primary text-sm"
								>
									<span className="h-px w-8 bg-primary/30" />
									Scopri di più
								</motion.div>
							) : (
								<motion.div
									key="description"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{
										height: { duration: 0.3 },
										opacity: { duration: 0.2, delay: 0.1 },
									}}
								>
									<p className="text-slate-600 leading-relaxed dark:text-slate-300">
										{description}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</CardContent>

				{/* Decorative background element */}
				<motion.div
					className="absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl"
					animate={{
						scale: isHovered ? 1.5 : 1,
						opacity: isHovered ? 0.8 : 0.3,
					}}
				/>
			</Card>
		</motion.div>
	)
}

export default ServiceCard
