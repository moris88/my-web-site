'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	Book,
	Briefcase,
	Building2,
	ChevronDown,
	Download,
	FileUser,
	GraduationCap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { Dictionary } from '@/app/dictionaries'
import {
	Button,
	Checkbox,
	Dialog,
	DownloadFile,
	SectionHero,
} from '@/components'
import type { Curriculum, Education, Experience } from '@/types'

interface PageCVProps {
	curriculum: Curriculum
	dict: Dictionary
}

function PageCV({ curriculum, dict }: PageCVProps) {
	const [accept, setAccept] = useState<boolean>(false)
	const [showDownload, setShowDownload] = useState<boolean>(false)

	// Stato per gestire l'abilitazione basata sullo scroll
	const [hasReadTerms, setHasReadTerms] = useState<boolean>(false)
	const scrollRef = useRef<HTMLUListElement>(null)

	// Stato per il tasto Scroll to Top
	const [showScrollTop, setShowScrollTop] = useState<boolean>(false)

	useEffect(() => {
		const handleScrollWindow = () => {
			setShowScrollTop(window.scrollY > 400)
		}
		window.addEventListener('scroll', handleScrollWindow)
		return () => window.removeEventListener('scroll', handleScrollWindow)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	// Funzione per verificare se l'utente ha raggiunto la fine del testo
	const handleScroll = () => {
		const element = scrollRef.current
		if (element) {
			const { scrollTop, scrollHeight, clientHeight } = element
			// Soglia di tolleranza di 2px per gestire arrotondamenti dei vari browser
			const isAtBottom = scrollHeight - scrollTop <= clientHeight + 2

			if (isAtBottom) {
				setHasReadTerms(true)
			}
		}
	}

	// Reset dello stato quando il modal viene chiuso/riaperto
	useEffect(() => {
		if (!showDownload) {
			setHasReadTerms(false)
			setAccept(false)
		}
	}, [showDownload])

	const renderTimelineItem = (
		item: Experience | Education,
		index: number,
		total: number,
		type: 'work' | 'education',
	) => {
		const isLast = index === total - 1
		return (
			<div key={index} className="relative flex gap-6 pb-12 last:pb-0">
				{!isLast && (
					<div className="absolute top-10 left-4.75 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
				)}

				<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-primary shadow-sm dark:border-slate-900 dark:bg-blue-900/30 dark:text-blue-400">
					{type === 'work' ? (
						<Building2 className="h-5 w-5" />
					) : (
						<Book className="h-5 w-5" />
					)}
				</div>

				<div className="flex flex-col gap-2 pt-1">
					<h3 className="font-bold text-gray-900 text-xl dark:text-gray-100">
						{item.link ? (
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary hover:underline dark:hover:text-blue-400"
							>
								{item.type === 'work' ? item.company : item.institution}
							</a>
						) : item.type === 'work' ? (
							item.company
						) : (
							item.institution
						)}
					</h3>
					<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-500 text-sm dark:text-gray-400">
						<span className="font-medium text-gray-700 dark:text-gray-300">
							{item.role}
						</span>
						<span className="hidden h-1 w-1 rounded-full bg-gray-300 md:block" />
						<span>
							{item.start} - {item.end ?? 'Present'}
						</span>
					</div>
					<p className="mt-2 max-w-2xl text-gray-600 leading-relaxed dark:text-gray-300">
						{item.description}
					</p>
				</div>
			</div>
		)
	}

	return (
		<SectionHero
			icon={<FileUser className="h-8 w-8 text-primary" />}
			title={dict.curriculum.title}
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

			<div className="mx-auto max-w-4xl">
				<div className="mb-12 flex justify-center">
					<Button onClick={() => setShowDownload(true)}>
						{dict.curriculum.download}
						{<Download className="h-5 w-5" />}
					</Button>
				</div>

				<div className="grid gap-16 md:grid-cols-1">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="mb-8 flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
								<Briefcase />
							</span>
							{dict.curriculum.experiences}
						</h2>
						<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-gray-200/50 shadow-xl md:p-8 dark:border-gray-800 dark:bg-slate-900/50 dark:shadow-none">
							{curriculum.experiences.map((exp, index) =>
								renderTimelineItem(
									exp,
									index,
									curriculum.experiences.length,
									'work',
								),
							)}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="mb-8 flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
								<GraduationCap />
							</span>
							{dict.curriculum.education}
						</h2>
						<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-gray-200/50 shadow-xl md:p-8 dark:border-gray-800 dark:bg-slate-900/50 dark:shadow-none">
							{curriculum.educations.map((edu, index) =>
								renderTimelineItem(
									edu,
									index,
									curriculum.educations.length,
									'education',
								),
							)}
						</div>
					</motion.div>
				</div>
			</div>

			<Dialog
				isOpen={showDownload}
				isDismissible={false}
				onClose={() => setShowDownload(false)}
				title={dict.curriculum.download}
			>
				<p className="text-gray-600 dark:text-gray-300">
					{dict.curriculum.terms.top}
				</p>

				<ul
					ref={scrollRef}
					onScroll={handleScroll}
					className="my-4 max-h-[30vh] list-inside list-disc overflow-y-auto rounded-lg border border-gray-200 p-4 text-gray-600 dark:border-gray-700 dark:text-gray-300"
				>
					{(dict.curriculum.terms.items as string[]).map((term, index) => (
						<li key={index} className="mb-2 last:mb-0">
							{term}
						</li>
					))}
				</ul>

				{!hasReadTerms && (
					<p className="mb-2 font-semibold text-red-600 text-xs dark:text-red-400">
						* Devi scorrere tutto il testo per poter accettare i termini.
					</p>
				)}

				<div className="py-4">
					<Checkbox
						id="accept-terms"
						checked={accept}
						onChange={setAccept}
						disabled={!hasReadTerms}
						label={dict.curriculum.accept}
					/>
				</div>

				<div className="flex justify-end gap-2 pb-4">
					<Button variant="ghost" onClick={() => setShowDownload(false)}>
						{dict.curriculum.cancel}
					</Button>
					<DownloadFile
						disabled={!accept}
						pathFile="https://cv.mauriziotolomeo.it/"
					>
						{dict.curriculum.download}
					</DownloadFile>
				</div>
			</Dialog>
		</SectionHero>
	)
}

export default PageCV
