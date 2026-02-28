'use client'

import { motion } from 'framer-motion'
import { Ghost, Home, Search } from 'lucide-react'
import Link from 'next/link'
import type { Dictionary } from '@/app/dictionaries'
import { Button } from '../UI'

interface NotFoundPageProps {
	dict: Dictionary
}

function NotFoundPage({ dict }: NotFoundPageProps) {
	return (
		<div className="container flex min-h-[calc(100vh-144px)] w-full flex-col items-center justify-center gap-8 py-12">
			<div className="relative flex h-48 w-48 items-center justify-center">
				{/* Floating Ghost */}
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className="text-slate-300 dark:text-slate-600"
				>
					<Ghost size={120} strokeWidth={1} />
				</motion.div>

				{/* Floating Particles */}
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						animate={{
							y: [0, -40, 0],
							opacity: [0, 1, 0],
							scale: [0.5, 1, 0.5],
						}}
						transition={{
							duration: 3 + i,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.4,
						}}
						className="absolute h-2 w-2 rounded-full bg-primary/30"
						style={{
							top: `${20 + i * 15}%`,
							left: `${10 + i * 20}%`,
						}}
					/>
				))}

				{/* Search Icon */}
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 10, -10, 0],
					}}
					transition={{
						duration: 5,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className="absolute right-4 bottom-4 text-secondary"
				>
					<Search size={40} />
				</motion.div>
			</div>

			<div className="flex flex-col items-center gap-4 text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					className="flex flex-col gap-2"
				>
					<h1 className="font-bold text-7xl text-primary sm:text-9xl">
						{'404'}
					</h1>
					<h2 className="font-semibold text-2xl text-slate-900 sm:text-3xl dark:text-white">
						{dict.not_found.title}
					</h2>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="max-w-md text-lg text-slate-600 dark:text-slate-400"
				>
					{dict.not_found.message}
				</motion.p>

				<Button type="button">
					<Link href="/" className="flex items-center gap-2">
						<Home size={20} />
						{dict.not_found.button}
					</Link>
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
