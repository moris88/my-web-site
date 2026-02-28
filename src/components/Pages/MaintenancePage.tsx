'use client'

import { motion } from 'framer-motion'
import { Hammer, Settings, Wrench } from 'lucide-react'
import type { Dictionary } from '@/app/dictionaries'
import { Button } from '../UI'

interface MaintenancePageProps {
	dict: Dictionary
}

function MaintenancePage({ dict }: MaintenancePageProps) {
	return (
		<div className="container flex min-h-[calc(100vh-144px)] w-full flex-col items-center justify-center gap-8 py-12">
			<div className="relative flex h-48 w-48 items-center justify-center">
				{/* Rotating Gears */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className="absolute top-0 right-0 text-slate-400 dark:text-slate-600"
				>
					<Settings size={80} strokeWidth={1} />
				</motion.div>

				<motion.div
					animate={{ rotate: -360 }}
					transition={{
						duration: 12,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className="absolute bottom-4 left-0 text-slate-300 dark:text-slate-700"
				>
					<Settings size={100} strokeWidth={1} />
				</motion.div>

				{/* Pulsing Tools */}
				<motion.div
					animate={{
						y: [0, -15, 0],
						rotate: [0, 20, 0],
					}}
					transition={{
						duration: 2.5,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className="absolute z-10 text-primary"
				>
					<Wrench size={56} strokeWidth={1.5} />
				</motion.div>

				<motion.div
					animate={{
						x: [0, 15, 0],
						rotate: [0, -25, 0],
					}}
					transition={{
						duration: 3,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
						delay: 0.5,
					}}
					className="absolute top-6 left-6 z-10 text-secondary"
				>
					<Hammer size={48} strokeWidth={1.5} />
				</motion.div>

				{/* Floating Particles - Rendered only on client to avoid hydration mismatch */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						animate={{
							y: [0, -30, 0],
							opacity: [0, 1, 0],
							scale: [0.5, 1, 0.5],
						}}
						transition={{
							duration: 2.5 + i * 0.5,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.3,
						}}
						className="absolute h-1.5 w-1.5 rounded-full bg-primary/20"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</div>

			<div className="flex flex-col items-center gap-4 text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					className="flex flex-col gap-2"
				>
					<h1 className="font-bold text-4xl text-slate-900 sm:text-5xl dark:text-white">
						{dict.maintenance.title}
					</h1>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="max-w-md text-lg text-slate-600 dark:text-slate-400"
				>
					{dict.maintenance.message}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mt-4"
				>
					<Button type="button" onClick={() => window.location.reload()}>
						<Settings size={20} className="animate-spin-slow" />
						{dict.maintenance.button}
					</Button>
				</motion.div>
			</div>
		</div>
	)
}

export default MaintenancePage
