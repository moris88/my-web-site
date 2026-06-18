'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollTop } from '@/hooks'

export default function ScrollToTop() {
	const { showScrollTop, scrollToTop } = useScrollTop()

	return (
		<AnimatePresence>
			{showScrollTop && (
				<div className="fixed right-6 bottom-36 z-50 flex">
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
	)
}
