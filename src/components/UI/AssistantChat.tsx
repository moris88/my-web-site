'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	Bot,
	ChevronDown,
	ChevronLeft,
	MessageCircle,
	RotateCcw,
	Send,
	User,
	X,
} from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import type { Dictionary } from '@/app/dictionaries'
import { Button, FormContact } from '@/components'

interface AssistantChatProps {
	dict: Dictionary
}

interface Message {
	id: string
	text: string
	sender: 'assistant' | 'user'
}

const STORAGE_KEY = 'assistant_chat_history'

export default function AssistantChat({ dict }: Readonly<AssistantChatProps>) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [history, setHistory] = React.useState<Message[]>([
		{ id: 'welcome', text: dict.assistant.welcome, sender: 'assistant' },
	])
	const [showForm, setShowForm] = React.useState(false)
	const [showQuestions, setShowQuestions] = React.useState(false) // Inizia chiuso
	const [success, setSuccess] = React.useState(false)
	const [error, setError] = React.useState<string | null>(null)
	const scrollRef = React.useRef<HTMLDivElement>(null)

	// Carica la cronologia dal localStorage all'avvio
	React.useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY)
		if (saved) {
			try {
				const parsed = JSON.parse(saved)
				if (Array.isArray(parsed) && parsed.length > 0) {
					setHistory(parsed)
				}
			} catch (e) {
				console.error('Failed to parse chat history', e)
			}
		}
	}, [])

	// Salva la cronologia al cambiamento
	React.useEffect(() => {
		if (history.length > 0) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
		}
	}, [history])

	const scrollToBottom = React.useCallback(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				top: scrollRef.current.scrollHeight,
				behavior: 'smooth',
			})
		}
	}, [])

	React.useEffect(() => {
		if (isOpen) {
			const timeoutId = setTimeout(scrollToBottom, 100)
			return () => clearTimeout(timeoutId)
		}
	}, [isOpen, scrollToBottom])

	const handleQuestionClick = (question: {
		id: string
		text: string
		answer: string
	}) => {
		const userMsg: Message = {
			id: `user-${Date.now()}`,
			text: question.text,
			sender: 'user',
		}
		const assistantMsg: Message = {
			id: `assistant-${Date.now()}`,
			text: question.answer,
			sender: 'assistant',
		}

		setHistory((prev) => [...prev, userMsg, assistantMsg])
		setShowQuestions(false)
	}

	const handleContactClick = () => {
		setShowForm(true)
		setShowQuestions(false)
	}

	const resetChat = () => {
		const initialHistory: Message[] = [
			{ id: 'welcome', text: dict.assistant.welcome, sender: 'assistant' },
		]
		setHistory(initialHistory)
		localStorage.setItem(STORAGE_KEY, JSON.stringify(initialHistory))
		setShowForm(false)
		setShowQuestions(false)
		setSuccess(false)
		setError(null)
	}

	return (
		<div className="fixed right-4 bottom-20 z-100 flex flex-col items-end sm:right-6">
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.9,
							y: 20,
							transformOrigin: 'bottom right',
						}}
						animate={{
							opacity: 1,
							scale: 1,
							y: 0,
							transition: { type: 'spring', damping: 25, stiffness: 300 },
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
							y: 20,
							transition: { duration: 0.2 },
						}}
						className={twMerge(
							'mb-4 flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950',
							'h-[80vh] w-[90vw] sm:h-150 sm:w-100',
						)}
					>
						{/* Header */}
						<div className="flex items-center justify-between bg-primary p-4 text-white">
							<div className="flex items-center gap-2">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
									<Bot className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-bold text-sm leading-none">
										{dict.assistant.title}
									</h3>
									<span className="text-[10px] uppercase tracking-wider opacity-80">
										Online
									</span>
								</div>
							</div>
							<div className="flex items-center gap-1">
								<button
									type="button"
									onClick={resetChat}
									className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10"
									aria-label="Reset chat"
									title="Pulisci chat"
								>
									<RotateCcw className="h-4 w-4" />
								</button>
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/10"
									aria-label="Close chat"
								>
									<X className="h-5 w-5" />
								</button>
							</div>
						</div>

						{/* Chat Area */}
						<div
							ref={scrollRef}
							className="scrollbar-hide flex-1 space-y-4 overflow-y-auto bg-gray-50/50 p-4 dark:bg-gray-900/50"
						>
							{history.map((msg) => (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									key={msg.id}
									className={twMerge(
										'flex items-end gap-2',
										msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row',
									)}
								>
									<div
										className={twMerge(
											'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px]',
											msg.sender === 'user'
												? 'bg-primary text-white'
												: 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
										)}
									>
										{msg.sender === 'user' ? (
											<User className="h-3 w-3" />
										) : (
											<Bot className="h-3 w-3" />
										)}
									</div>
									<div
										className={twMerge(
											'max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm',
											msg.sender === 'assistant'
												? 'rounded-bl-none border border-gray-100 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'
												: 'rounded-br-none bg-primary text-white',
										)}
									>
										{msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, index) => {
											const match = part.match(/\[(.*?)\]\((.*?)\)/)
											if (match) {
												const isChatAction = match[2].startsWith('chat:')
												if (isChatAction) {
													return (
														<button
															key={index}
															type="button"
															onClick={() => {
																if (match[2] === 'chat:contact') {
																	handleContactClick()
																}
															}}
															className="cursor-pointer font-bold underline transition-colors hover:text-primary dark:hover:text-blue-400"
														>
															{match[1]}
														</button>
													)
												}
												return (
													<a
														key={index}
														href={match[2]}
														target={
															match[2].startsWith('http') ? '_blank' : undefined
														}
														rel={
															match[2].startsWith('http')
																? 'noopener noreferrer'
																: undefined
														}
														className="font-bold underline transition-colors hover:text-primary dark:hover:text-blue-400"
													>
														{match[1]}
													</a>
												)
											}
											return part
										})}
									</div>
								</motion.div>
							))}

							{showForm && (
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									className="border-t pt-4 dark:border-gray-800"
								>
									{success ? (
										<div className="rounded-xl border border-gray-100 bg-white py-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
											<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
												<Send className="h-6 w-6" />
											</div>
											<p className="px-4 font-medium text-gray-800 text-sm dark:text-gray-200">
												{dict.contacts.modal.message}
											</p>
											<Button
												variant="outline"
												size="sm"
												className="mt-6"
												onClick={resetChat}
											>
												{dict.assistant.backToQuestions}
											</Button>
										</div>
									) : (
										<div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
											<div className="mb-6 flex items-center gap-2">
												<button
													type="button"
													onClick={() => {
														setShowForm(false)
														setShowQuestions(true)
													}}
													className="cursor-pointer rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<ChevronLeft className="h-4 w-4" />
												</button>
												<span className="font-bold text-gray-500 text-xs uppercase tracking-wider">
													{dict.contacts.modal.title}
												</span>
											</div>
											<FormContact
												dict={dict}
												onSuccess={() => setSuccess(true)}
												onError={(m) => setError(m)}
												onClose={() => {
													setShowForm(false)
													setShowQuestions(true)
												}}
												notDone
											/>
											{error && (
												<p className="mt-2 font-medium text-[10px] text-red-500">
													{error}
												</p>
											)}
										</div>
									)}
								</motion.div>
							)}
						</div>

						{/* Questions Area (Accordion) */}
						{!showForm && !success && (
							<div className="border-t bg-white p-2 dark:border-gray-800 dark:bg-gray-950">
								<button
									type="button"
									onClick={() => setShowQuestions(!showQuestions)}
									className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left font-bold text-gray-400 text-xs uppercase tracking-widest transition-colors hover:text-primary"
								>
									{dict.assistant.placeholder}
									<motion.div
										animate={{ rotate: showQuestions ? 180 : 0 }}
										transition={{ duration: 0.2 }}
									>
										<ChevronDown className="h-4 w-4" />
									</motion.div>
								</button>
								<AnimatePresence>
									{showQuestions && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: 'auto',
												opacity: 1,
												transition: { duration: 0.3 },
											}}
											exit={{
												height: 0,
												opacity: 0,
												transition: { duration: 0.2 },
											}}
											className="overflow-hidden"
										>
											<div className="scrollbar-hide grid max-h-75 gap-2 overflow-y-auto p-2">
												{dict.assistant.questions.map((q) => (
													<button
														type="button"
														key={q.id}
														onClick={() => handleQuestionClick(q)}
														className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-3 text-left font-medium text-gray-700 text-sm shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary"
													>
														{q.text}
													</button>
												))}
												<button
													type="button"
													onClick={handleContactClick}
													className="w-full cursor-pointer rounded-xl border border-gray-300 border-dashed p-3 text-left font-medium text-gray-500 text-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-gray-700 dark:text-gray-400"
												>
													{dict.assistant.contactMe}
												</button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>

			{/* FAB */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className={twMerge(
					'flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all duration-300',
					isOpen
						? 'rotate-90 bg-white text-primary dark:bg-gray-800 dark:text-primary'
						: 'bg-primary text-white shadow-primary/30',
				)}
				aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
			>
				<AnimatePresence mode="wait">
					{isOpen ? (
						<motion.div
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<X className="h-6 w-6" />
						</motion.div>
					) : (
						<motion.div
							key="open"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<MessageCircle className="h-6 w-6" />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>
		</div>
	)
}
