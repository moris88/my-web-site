'use client'

import { motion } from 'framer-motion'
import { AlertCircle, XCircle, Zap } from 'lucide-react'
import { Button } from '../UI'

const { error } = console
interface ErrorPageProps {
	err?: Error
}

function ErrorPage({ err }: ErrorPageProps) {
	error('An error occurred:', err)
	return (
		<div className="container flex min-h-[calc(100vh-144px)] w-full flex-col items-center justify-center gap-8 py-12">
			<div className="relative flex h-48 w-48 items-center justify-center">
				{/* Glitchy Error Icon */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: 'spring', stiffness: 260, damping: 20 }}
					className="relative z-10 text-red-500"
				>
					<XCircle size={120} strokeWidth={1.5} />
				</motion.div>

				{/* Background Warning */}
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className="absolute text-red-200 dark:text-red-900/30"
				>
					<AlertCircle size={200} strokeWidth={1} />
				</motion.div>

				{/* Electricity/Zap Effects */}
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						animate={{
							opacity: [0, 1, 0],
							x: [0, (i - 1) * 40, 0],
							y: [0, (i - 1) * -30, 0],
						}}
						transition={{
							duration: 0.2,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: Math.random() * 2,
							delay: i * 0.5,
						}}
						className="absolute text-yellow-500"
					>
						<Zap size={32} fill="currentColor" />
					</motion.div>
				))}

				{/* Glitch Shadow Effect */}
				<motion.div
					animate={{
						x: [-2, 2, -2],
						opacity: [0.5, 0.8, 0.5],
					}}
					transition={{ duration: 0.1, repeat: Number.POSITIVE_INFINITY }}
					className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-blue-500/30"
				>
					<XCircle size={124} strokeWidth={1.5} />
				</motion.div>
			</div>

			<div className="flex flex-col items-center gap-4 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="font-bold text-4xl text-slate-900 sm:text-5xl dark:text-white"
				>
					{'Something went wrong'}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="max-w-md text-lg text-slate-600 dark:text-slate-400"
				>
					{"An unexpected error has occurred. We're already working to fix it."}
				</motion.p>
				<Button
					type="button"
					onClick={() => window.location.reload()}
					className="bg-red-500 hover:bg-red-600"
				>
					{'Try again'}
				</Button>
			</div>

			<div className="mt-8 text-slate-400 text-xs dark:text-slate-600">
				<p>{'The error has been logged to the console for debugging.'}</p>
			</div>
		</div>
	)
}

export default ErrorPage
