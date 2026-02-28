'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardLinkProps {
	icon: React.ReactNode
	title: string
	description: string
	path: string
}

function CardLink({ icon, title, description, path }: Readonly<CardLinkProps>) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Link href={path} className="block h-full">
			<motion.div
				layout
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				whileHover={{ y: -5 }}
				transition={{
					layout: { duration: 0.3, ease: 'easeOut' },
				}}
				className={twMerge(
					'relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-gray-50 p-8 text-center shadow-md transition-all duration-300',
					'hover:shadow-xl dark:bg-slate-800 dark:shadow-slate-900/50',
					'border-2 border-transparent hover:border-primary/30',
				)}
			>
				<motion.div
					layout
					className="relative z-10 transition-transform duration-300 group-hover:scale-110"
				>
					<div className="mb-2 flex items-center justify-center rounded-2xl bg-primary/10 p-4 text-primary transition-colors duration-300">
						{icon}
					</div>
				</motion.div>

				<motion.h3
					layout
					className="relative z-10 font-bold text-primary text-xl tracking-tight"
				>
					{title}
				</motion.h3>

				<motion.div layout className="relative z-10 w-full overflow-hidden">
					<AnimatePresence mode="wait">
						{!isHovered ? (
							<motion.div
								key="indicator"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="mt-2 flex items-center justify-center gap-2 font-medium text-primary/60 text-sm"
							>
								<span className="h-px w-6 bg-primary/20" />
								Esplora
								<span className="h-px w-6 bg-primary/20" />
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
								className="mt-2"
							>
								<p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
									{description}
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Decorative background glow */}
				<motion.div
					className="absolute -right-10 -bottom-10 z-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl"
					animate={{
						scale: isHovered ? 2 : 1,
						opacity: isHovered ? 0.8 : 0.3,
					}}
				/>
			</motion.div>
		</Link>
	)
}

export default CardLink
