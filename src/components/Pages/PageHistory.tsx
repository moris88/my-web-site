'use client'

import 'aos/dist/aos.css'

import { Button } from '@heroui/button'
import AOS from 'aos'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { SectionHero } from '@/components/UI'
import type { History, Language } from '@/types'

interface PageHistoryProps {
	language: Language
	history: History
}

function PageHistory({ language, history }: Readonly<PageHistoryProps>) {
	const [showContent, setShowContent] = React.useState(true)
	const router = useRouter()

	React.useEffect(() => {
		AOS.init()
	}, [])

	const historyItems = history[language]
	const introItem = historyItems[0]
	const outroItem = historyItems[historyItems.length - 1]
	const timelineItems = historyItems.slice(1, historyItems.length - 1)

	return (
		<SectionHero title={history.title[language]}>
			{/* Intro Section */}
			<div className="mx-auto max-w-4xl text-center">
				<h3 className="mb-4 font-bold text-2xl md:text-3xl">
					{introItem.title}
				</h3>
				<p className="text-gray-600 text-lg dark:text-gray-300">
					{introItem.description}
				</p>
			</div>

			{/* Quiz Banner */}
			{showContent && (
				<div
					className="relative mx-auto my-8 w-full max-w-4xl overflow-hidden rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 p-1 shadow-lg backdrop-blur-sm dark:from-blue-900/20 dark:to-purple-900/20"
					data-aos="fade-up"
				>
					<div className="relative rounded-xl bg-white/50 p-6 dark:bg-slate-900/50">
						<button
							type="button"
							className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
							onClick={() => setShowContent(false)}
						>
							<IoMdClose size={24} />
						</button>
						<div className="flex flex-col items-center gap-4 text-center">
							<div>
								<p className="font-bold text-xl">
									{language === 'en'
										? 'Want to discover what kind of developer you are?'
										: 'Vuoi scoprire che sviluppatore sei?'}
								</p>
								<p className="mt-2 text-gray-600 dark:text-gray-300">
									{language === 'en'
										? 'Take my quiz to find out your developer personality type and get personalized tips!'
										: 'Fai il mio quiz per scoprire il tuo tipo di personalità e ottenere consigli personalizzati!'}
								</p>
							</div>
							<Button
								className="bg-linear-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg"
								radius="full"
								onPress={() => router.push('/quiz')}
							>
								{language === 'en' ? 'Take the test' : 'Fai il test'}
							</Button>
						</div>
					</div>
				</div>
			)}

			{/* Timeline Section */}
			<div className="relative mx-auto max-w-6xl py-10">
				{/* Vertical Line */}
				<div className="absolute top-0 left-4 h-full w-0.5 bg-linear-to-b from-transparent via-gray-300 to-transparent md:left-1/2 md:-translate-x-1/2 dark:via-gray-700" />

				<div className="flex flex-col gap-12">
					{timelineItems.map((item, index) => {
						const isEven = index % 2 === 0
						return (
							<div
								key={item.id}
								className={`relative flex items-center ${
									isEven ? 'md:flex-row' : 'md:flex-row-reverse'
								}`}
								data-aos="fade-up"
							>
								{/* Timeline Dot */}
								<div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-md md:left-1/2 dark:border-slate-900 dark:bg-blue-500" />

								{/* Spacer for Desktop */}
								<div className="hidden w-1/2 md:block" />

								{/* Content Card */}
								<div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
									<div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-slate-900">
										<div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

										{item.image && (
											<div className="mb-4 overflow-hidden rounded-xl">
												<img
													src={item.image}
													alt={item.alt || item.title || ''}
													className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
											</div>
										)}
										<h4 className="mb-2 font-bold text-blue-600 text-xl dark:text-blue-400">
											{item.title}
										</h4>
										<p className="text-gray-600 leading-relaxed dark:text-gray-300">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			{/* Outro Section */}
			<div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-gray-50 p-8 text-center dark:bg-slate-800/50">
				<h3 className="mb-4 font-bold text-2xl">{outroItem.title}</h3>
				<p className="text-gray-600 text-lg dark:text-gray-300">
					{outroItem.description}
				</p>
				<div className="mt-2 flex w-full items-center justify-center gap-2 border-gray-200 border-t py-2 dark:border-gray-700">
					<Button
						color="primary"
						variant="ghost"
						className="mt-6"
						onPress={() => router.push('/blog')}
					>
						{language === 'en' ? 'Read my blog' : 'Leggi il mio blog'}
					</Button>
					<Button
						color="primary"
						variant="ghost"
						className="mt-6"
						onPress={() => router.push('/projects')}
					>
						{language === 'en' ? 'Read my projects' : 'Guarda i miei progetti'}
					</Button>
					<Button
						color="primary"
						variant="ghost"
						className="mt-6"
						onPress={() => router.push('/contacts')}
					>
						{language === 'en' ? 'Read my contacts' : 'Guarda i miei contatti'}
					</Button>
				</div>
			</div>

			<div className="mt-10 flex w-full justify-center text-gray-500 text-sm">
				<p>
					{language === 'en' ? 'Last update: ' : 'Ultimo aggiornamento: '}
					{history.lastUpdate}
				</p>
			</div>
		</SectionHero>
	)
}

export default PageHistory
