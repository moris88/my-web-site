'use client'

import 'aos/dist/aos.css'

import { Button } from '@heroui/button'
import AOS from 'aos'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { SectionHero } from '@/components/UI'
import { useScreenDimensions } from '@/hooks'
import type { History, Language } from '@/types'

interface PageHistoryProps {
	language: Language
	history: History
}

function PageHistory({ language, history }: PageHistoryProps) {
	const { isMobile } = useScreenDimensions()
	const [showContent, setShowContent] = React.useState(true)

	React.useEffect(() => {
		AOS.init()
	}, [])

	return (
		<SectionHero title={history.title[language]}>
			{showContent && (
				<div className="rounded-lg bg-blue-50 p-2 shadow-md">
					<div className="flex w-full justify-end">
						<IoMdClose
							className="h-6 w-6 cursor-pointer"
							onClick={() => setShowContent(false)}
						/>
					</div>
					<p className="mb-4 text-center font-semibold text-lg">
						{language === 'en'
							? 'Want to discover what kind of developer you are?'
							: 'Vuoi scoprire che sviluppatore sei?'}
					</p>
					<p className="mb-4 text-center text-sm">
						{language === 'en'
							? 'Take my quiz to find out your developer personality type and get personalized tips to enhance your coding skills!'
							: 'Fai il mio quiz per scoprire il tuo tipo di personalità da sviluppatore e ottenere consigli personalizzati per migliorare le tue competenze di coding!'}
					</p>
					<div className="flex w-full items-center justify-center gap-2">
						<Button
							color="primary"
							type="button"
							variant="flat"
							onPress={() => {
								window.open('https://mauriziotolomeo.it/quiz', '_blank')
							}}
						>
							{language === 'en' ? 'Take the test' : 'Fai il test'}
						</Button>
					</div>
				</div>
			)}
			{history[language].map((item, index) => {
				const isEven = index % 2 === 0
				if (index === 0 || index === history[language].length - 1) {
					return (
						<React.Fragment key={`history-${item.title}`}>
							<h3 className="px-0 text-lg lg:px-10 lg:text-2xl">
								{item.title}
							</h3>
							<p>{item.description}</p>
						</React.Fragment>
					)
				}
				return (
					<div
						key={`history-${item.title}`}
						className="flex flex-col items-center justify-center gap-4 py-2 md:flex-row md:py-10"
						data-aos="zoom-in-up"
					>
						{isEven ? (
							<>
								{item?.image && (
									<img
										alt={item.alt}
										className="min-w-96 max-w-96 rounded-lg object-cover object-center drop-shadow-lg"
										src={item.image}
									/>
								)}
								<div className="flex w-full flex-col gap-4 md:w-1/2">
									<h3 className="text-center text-lg md:text-start lg:text-2xl">
										{item.title}
									</h3>
									<hr />
									<p className="text-start md:text-start">{item.description}</p>
								</div>
								{isMobile && <p className="mt-5">---</p>}
							</>
						) : (
							<>
								<div className="flex w-full flex-col gap-4 md:w-1/2">
									<h3 className="text-center text-lg md:text-end lg:text-2xl">
										{item.title}
									</h3>
									<hr />
									<p className="text-start md:text-end">{item.description}</p>
								</div>
								{item?.image && (
									<img
										alt={item.alt}
										className="min-w-96 max-w-96 rounded-lg object-cover object-center drop-shadow-lg"
										src={item.image}
									/>
								)}
								{isMobile && <p className="mt-5">---</p>}
							</>
						)}
					</div>
				)
			})}
		</SectionHero>
	)
}

export default PageHistory
