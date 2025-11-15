'use client'

import AOS from 'aos'
import React from 'react'

import { SectionHero } from '@/components/UI'
import { useScreenDimensions } from '@/hooks'
import type { History, Language } from '@/types'

interface PageHistoryProps {
	language: Language
	history: History
}

function PageHistory({ language, history }: PageHistoryProps) {
	const { isMobile } = useScreenDimensions()

	React.useEffect(() => {
		AOS.init()
	}, [])

	return (
		<SectionHero title={history.title[language]}>
			{history[language].map((item, index) => {
				const isEven = index % 2 === 0
				if (index === 0 || index === history[language].length - 1) {
					return (
						<React.Fragment
							key={`history-${item.title ?? `${index}-no-title`}`}
						>
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
										alt={item.alt ?? 'history image'}
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
										alt={item.alt ?? 'history image'}
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
