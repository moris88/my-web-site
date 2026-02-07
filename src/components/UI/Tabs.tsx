'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Tab {
	id: string
	label: React.ReactNode
	content: React.ReactNode
}

interface TabsProps {
	tabs: Tab[]
	defaultValue?: string
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	position?: 'center' | 'right' | 'left'
}

function Tabs({ tabs, defaultValue, radius, position = 'center' }: TabsProps) {
	const [activeTab, setActiveTab] = React.useState(defaultValue || tabs[0].id)
	const [indicatorStyle, setIndicatorStyle] = React.useState({
		left: 0,
		width: 0,
	})
	const tabsRef = React.useRef<(HTMLButtonElement | null)[]>([])

	// Calcola posizione e larghezza dell'indicatore animato
	React.useEffect(() => {
		const activeIndex = tabs.findIndex((tab) => tab.id === activeTab)
		const activeElement = tabsRef.current[activeIndex]

		if (activeElement) {
			setIndicatorStyle({
				left: activeElement.offsetLeft,
				width: activeElement.offsetWidth,
			})
		}
	}, [activeTab, tabs])

	return (
		<div
			className={`w-full ${radius === 'none' ? '' : radius === 'sm' ? 'rounded-sm' : radius === 'md' ? 'rounded-md' : radius === 'lg' ? 'rounded-lg' : 'rounded-full'}`}
		>
			{/* TAB LIST */}
			<div
				className={twMerge(
					'flex w-full',
					position === 'center'
						? 'justify-center'
						: position === 'right'
							? 'justify-end'
							: 'justify-start',
				)}
			>
				<div
					className={`relative flex w-max items-center rounded-lg bg-slate-100 p-1 dark:bg-slate-800`}
				>
					{/* Indicatore Animato (Background Slide) */}
					<div
						className="absolute h-[calc(100%-8px)] rounded-md bg-primary shadow-sm transition-all duration-300 ease-in-out"
						style={{
							left: `${indicatorStyle.left}px`,
							width: `${indicatorStyle.width}px`,
						}}
					/>

					{tabs.map((tab, index) => (
						<button
							type="button"
							key={tab.id}
							ref={(el) => {
								tabsRef.current[index] = el
							}}
							onClick={() => setActiveTab(tab.id)}
							className={`relative z-10 flex cursor-pointer items-center gap-2 px-6 py-2 font-medium text-sm transition-colors duration-300 ${
								activeTab === tab.id
									? 'text-white dark:text-slate-900'
									: 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* TAB CONTENT */}
			<div className="mt-4">
				{tabs.map((tab) => (
					<div
						key={tab.id}
						className={`transition-all duration-500 ${
							activeTab === tab.id
								? 'block translate-y-0 opacity-100'
								: 'hidden translate-y-2 opacity-0'
						}`}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
