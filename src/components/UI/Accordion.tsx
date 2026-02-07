'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
	id: string
	title: string
	content: React.ReactNode
}

interface AccordionProps {
	items: AccordionItem[]
	allowMultiple?: boolean
}

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
	const [openIds, setOpenIds] = React.useState<string[]>([])
	const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

	const setContentRef = React.useCallback(
		(id: string, el: HTMLDivElement | null) => {
			contentRefs.current[id] = el
		},
		[],
	)

	const toggleItem = (id: string) => {
		if (allowMultiple) {
			setOpenIds((prev) =>
				prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
			)
		} else {
			setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
		}
	}

	return (
		<div className="w-full rounded-lg bg-slate-100 px-4 dark:bg-slate-800">
			{items.map((item) => {
				const isOpen = openIds.includes(item.id)

				return (
					<div
						key={item.id}
						className="border-slate-200 border-b dark:border-slate-800"
					>
						{/* TRIGGER */}
						<button
							type="button"
							onClick={() => toggleItem(item.id)}
							className="flex w-full cursor-pointer items-center justify-between py-4 text-left transition-all hover:text-primary focus:outline-none"
						>
							<span className="font-semibold text-slate-900 text-sm dark:text-slate-100">
								{item.title}
							</span>
							<ChevronDown
								size={18}
								className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
							/>
						</button>

						{/* CONTENT (Animato) */}
						<div
							ref={(el) => setContentRef(item.id, el)}
							style={{
								maxHeight: isOpen
									? `${contentRefs.current[item.id]?.scrollHeight}px`
									: '0px',
							}}
							className="overflow-hidden transition-all duration-300 ease-in-out"
						>
							<div className="pb-4 text-slate-600 text-sm leading-relaxed dark:text-slate-400">
								{item.content}
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
