'use client'

import {
	Button,
	Checkbox,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
} from '@heroui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FaCity } from 'react-icons/fa'
import { HiArrowDownTray } from 'react-icons/hi2'
import { MdOutlineWork, MdSchool } from 'react-icons/md'
import { RiBookFill } from 'react-icons/ri'
import { TbFileCv } from 'react-icons/tb'

import type { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import type { Curriculum, Education, Experience } from '@/types'

interface PageCVProps {
	curriculum: Curriculum
	dict: Dictionary
}

function PageCV({ curriculum, dict }: PageCVProps) {
	const [accept, setAccept] = React.useState<boolean>(false)
	const [showDownload, setShowDownload] = React.useState<boolean>(false)

	// Helper to render timeline items
	const renderTimelineItem = (
		item: Experience | Education,
		index: number,
		total: number,
		type: 'work' | 'education',
	) => {
		const isLast = index === total - 1
		return (
			<div key={index} className="relative flex gap-6 pb-12 last:pb-0">
				{/* Timeline Line */}
				{!isLast && (
					<div className="absolute top-10 left-4.75 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
				)}

				{/* Icon */}
				<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-blue-600 shadow-sm dark:border-slate-900 dark:bg-blue-900/30 dark:text-blue-400">
					{type === 'work' ? (
						<FaCity className="h-5 w-5" />
					) : (
						<RiBookFill className="h-5 w-5" />
					)}
				</div>

				{/* Content */}
				<div className="flex flex-col gap-2 pt-1">
					<h3 className="font-bold text-gray-900 text-xl dark:text-gray-100">
						{item.link ? (
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 hover:underline dark:hover:text-blue-400"
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
			icon={<TbFileCv className="h-8 w-8 text-primary" />}
			title={dict.curriculum.title}
		>
			<div className="mx-auto max-w-4xl">
				{/* Download Button (Floating on mobile, inline on desktop) */}
				<div className="mb-12 flex justify-center">
					<Button
						className="bg-linear-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg transition-transform hover:scale-105"
						size="lg"
						radius="full"
						onPress={() => setShowDownload(true)}
						endContent={<HiArrowDownTray className="h-5 w-5" />}
					>
						{dict.curriculum.download}
					</Button>
				</div>

				<div className="grid gap-16 md:grid-cols-1">
					{/* Experience Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="mb-8 flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
								<MdOutlineWork />
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

					{/* Education Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="mb-8 flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
								<MdSchool />
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

			{/* Download Modal */}
			<Modal
				isOpen={showDownload}
				onClose={() => setShowDownload(false)}
				backdrop="blur"
				size="md"
			>
				<ModalContent>
					<ModalHeader className="flex flex-col gap-1">
						{dict.curriculum.download}
					</ModalHeader>
					<ModalBody>
						<p className="text-gray-600 dark:text-gray-300">
							{dict.curriculum.terms}
						</p>
						<div className="py-4">
							<Checkbox isSelected={accept} onValueChange={setAccept}>
								I accept the terms and conditions
							</Checkbox>
						</div>
						<div className="flex justify-end gap-2 pb-4">
							<Button variant="light" onPress={() => setShowDownload(false)}>
								{dict.curriculum.cancel}
							</Button>
							<DownloadFile
								disabled={!accept}
								pathFile="https://cv.mauriziotolomeo.it/"
							>
								{dict.curriculum.download}
							</DownloadFile>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</SectionHero>
	)
}

export default PageCV
