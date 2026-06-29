'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	Bot,
	ChevronDown,
	ChevronLeft,
	Clipboard,
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
import questionsData from '@/data/questions.json'

interface AssistantChatProps {
	dict: Dictionary
}

const getRandomAnswer = (answers: string[]) => {
	return answers[Math.floor(Math.random() * answers.length)]
}

interface Question {
	keywords: string[]
	question: {
		id: string
		text: string
		answers: string[]
	}
}

interface Message {
	id: string
	text: string
	sender: 'assistant' | 'user'
	questionId?: string
	quotedMessageId?: string
	quotedMessageText?: string
}

const STORAGE_KEY = 'assistant_chat_history'

const getKeywordMap: (lang: 'it' | 'en') => Question[] = (lang: 'it' | 'en') =>
	questionsData.questions.map((q) => ({
		keywords: q.keywords[lang],
		question: {
			id: q.id,
			text: q.text[lang],
			answers: (q as any).answers[lang],
		},
	}))

export default function AssistantChat({ dict }: Readonly<AssistantChatProps>) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [isAssistantThinking, setIsAssistantThinking] = React.useState(false)
	const [inputValue, setInputValue] = React.useState('')
	const [history, setHistory] = React.useState<Message[]>(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem(STORAGE_KEY)
			if (saved) {
				try {
					const parsed = JSON.parse(saved)
					if (Array.isArray(parsed) && parsed.length > 0) {
						return parsed
					}
				} catch (e) {
					console.error('Failed to parse chat history', e)
				}
			}
		}
		return [
			{ id: 'welcome', text: dict.assistant.welcome, sender: 'assistant' },
		]
	})
	const [showForm, setShowForm] = React.useState(false)
	const [showQuestions, setShowQuestions] = React.useState(false) // Inizia chiuso
	const [success, setSuccess] = React.useState(false)
	const [error, setError] = React.useState<string | null>(null)
	const scrollRef = React.useRef<HTMLDivElement>(null)
	const [_indexAnswer, setIndexAnswer] = React.useState<number | null>(null)

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

	const scrollToMessage = (messageId: string) => {
		const element = document.getElementById(`msg-${messageId}`)
		if (element && scrollRef.current) {
			const container = scrollRef.current
			container.scrollTo({
				top: element.offsetTop - container.offsetTop - 20,
				behavior: 'smooth',
			})
		}
	}

	const handleSendMessage = () => {
		if (!inputValue.trim()) return

		const userMsg: Message = {
			id: `user-${Date.now()}`,
			text: inputValue,
			sender: 'user',
		}
		setHistory((prev) => [...prev, userMsg])
		setInputValue('')
		setIsAssistantThinking(true)

		setTimeout(() => {
			const normalizedInput = inputValue.toLowerCase().trim()
			const keywordMap = getKeywordMap(dict.lang as 'it' | 'en')
			let bestMatch: Question | null = null
			let highestScore = 0
			let bestMatchTotalKeywords = Infinity

			keywordMap.forEach((m) => {
				let currentScore = 0
				m.keywords.forEach((k) => {
					const regex = new RegExp(`\\b${k.toLowerCase()}\\b`, 'i')
					if (regex.test(normalizedInput)) {
						currentScore++
					}
				})

				if (
					currentScore > 0 &&
					(currentScore > highestScore ||
						(currentScore === highestScore &&
							m.keywords.length < bestMatchTotalKeywords))
				) {
					highestScore = currentScore
					bestMatchTotalKeywords = m.keywords.length
					bestMatch = m
				}
			})

			if (bestMatch) {
				handleQuestionClick(
					{
						id: (bestMatch as Question).question.id,
						text: (bestMatch as Question).question.text,
						answers: (bestMatch as Question).question.answers,
					},
					true,
				)
			} else if (
				normalizedInput.includes('contatto') ||
				normalizedInput.includes('contact')
			) {
				handleContactClick()
			} else {
				const fallbackMsg: Message = {
					id: `assistant-${Date.now()}`,
					text: questionsData.fallback[dict.lang as 'it' | 'en'],
					sender: 'assistant',
				}
				setHistory((prev) => [...prev, fallbackMsg])
			}
			setIsAssistantThinking(false)
			scrollToBottom()
		}, 800)
	}

	const handleQuestionClick = (
		question: {
			id: string
			text: string
			answers: string[]
		},
		skipUserMessage = false,
	) => {
		const existingAssistantMsg = history.find(
			(msg) => msg.questionId === question.id && msg.sender === 'assistant',
		)

		if (existingAssistantMsg) {
			const showLink = history.length > 5
			const repeatMsg: Message = {
				id: `assistant-${Date.now()}`,
				text:
					showLink && dict.lang === 'it'
						? 'Ti ho già risposto a questa domanda! [Clicca qui](chat:scroll) per rileggerla.'
						: showLink && dict.lang === 'en'
							? 'I have already answered this question! [Click here](chat:scroll) to read it again.'
							: !showLink && dict.lang === 'it'
								? 'Ti ho già risposto a questa domanda!'
								: 'I have already answered this question!',
				sender: 'assistant',
				quotedMessageId: existingAssistantMsg.id,
				quotedMessageText: existingAssistantMsg.text,
			}
			setHistory((prev) => [...prev, repeatMsg])
			setTimeout(scrollToBottom, 50)
		} else {
			const assistantMsg: Message = {
				id: `assistant-${Date.now()}`,
				text: getRandomAnswer(question.answers),
				sender: 'assistant',
				questionId: question.id,
			}

			if (!skipUserMessage) {
				const userMsg: Message = {
					id: `user-${Date.now()}`,
					text: question.text,
					sender: 'user',
					questionId: question.id,
				}
				setHistory((prev) => [...prev, userMsg])
			}

			setIsAssistantThinking(true)
			setTimeout(() => {
				setHistory((prev) => [...prev, assistantMsg])
				setIsAssistantThinking(false)
				scrollToBottom()
			}, 800)
		}
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
		<div className="fixed right-6 bottom-20 z-100 flex flex-col items-end">
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
							'h-[75vh] w-[90vw] sm:h-150 sm:w-100 md:h-[80vh]',
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
									id={`msg-${msg.id}`}
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
											'group relative max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm',
											msg.sender === 'assistant'
												? 'rounded-bl-none bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200'
												: 'rounded-br-none bg-primary/35 text-white',
										)}
									>
										<button
											onClick={(e) => {
												const btn = e.currentTarget
												navigator.clipboard.writeText(msg.text)
												const originalContent = btn.innerHTML
												btn.innerHTML =
													'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>'
												setTimeout(() => {
													btn.innerHTML = originalContent
												}, 2000)
											}}
											className={twMerge(
												'absolute top-2 p-1 opacity-100 transition-opacity hover:opacity-100 group-hover:opacity-100 md:opacity-0',
												msg.sender === 'assistant' ? '-right-8' : '-left-8',
											)}
											type="button"
											aria-label="Copy to clipboard"
											title="Copy to clipboard"
										>
											<Clipboard className="h-4 w-4 text-gray-400" />
										</button>
										{msg.quotedMessageText && (
											<button
												type="button"
												onClick={() =>
													msg.quotedMessageId &&
													scrollToMessage(msg.quotedMessageId)
												}
												className="mb-2 block w-full cursor-pointer rounded-lg border-primary border-l-4 bg-gray-100 p-2 text-left text-gray-600 text-xs dark:bg-gray-700 dark:text-gray-300"
											>
												<span className="block font-bold text-primary">
													Bot
												</span>
												<span className="line-clamp-2 italic">
													{msg.quotedMessageText}
												</span>
											</button>
										)}
										{msg.text
											.split(/(\[.*?\]\(chat:.*?\))/g)
											.map((part, index) => {
												const match = part.match(/\[(.*?)\]\((.*?)\)/)
												if (match) {
													const link = match[2]
													if (link.startsWith('chat:')) {
														return (
															<button
																key={index}
																type="button"
																onClick={() => {
																	if (link === 'chat:contact') {
																		handleContactClick()
																	} else if (link === 'chat:scroll') {
																		msg.quotedMessageId &&
																			scrollToMessage(msg.quotedMessageId)
																	}
																}}
																className="cursor-pointer font-bold underline transition-colors hover:text-primary dark:hover:text-blue-400"
															>
																{match[1]}
															</button>
														)
													}
													const splitText = part.split(/\[(.*?)\]\((.*?)\)/)
													return (
														<span key={index}>
															{splitText.map((textPart, textIndex) => {
																if (textIndex === 1) {
																	return (
																		<a
																			key={textIndex}
																			href={link}
																			target={
																				link.startsWith('http')
																					? '_blank'
																					: undefined
																			}
																			rel={
																				link.startsWith('http')
																					? 'noopener noreferrer'
																					: undefined
																			}
																			className="font-bold underline transition-colors hover:text-primary dark:hover:text-blue-400"
																		>
																			{textPart}
																		</a>
																	)
																} else if (textIndex === 2) {
																	// Ignora la parte del link, poiché è già gestita
																	return null
																}
																return <span key={textIndex}>{textPart}</span>
															})}
														</span>
													)
												}
												return <span key={index}>{part}</span>
											})}
									</div>
								</motion.div>
							))}

							{isAssistantThinking && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex flex-row items-end gap-2"
								>
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-[10px] text-gray-600 dark:bg-gray-800 dark:text-gray-400">
										<Bot className="h-3 w-3" />
									</div>
									<div className="rounded-2xl rounded-bl-none border border-gray-100 bg-white px-4 py-2 text-gray-400 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-800">
										<span className="animate-pulse">...</span>
									</div>
								</motion.div>
							)}

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
													<ChevronLeft className="h-4 w-4 text-primary" />
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
								<div className="flex items-center gap-2 p-2">
									<input
										type="text"
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												handleSendMessage()
											} else if (e.key === 'ArrowUp' && history.length > 0) {
												setIndexAnswer((prevIndex) => {
													if (prevIndex === null) {
														const lastUserMessageIndex = history
															.map((msg, index) => ({ msg, index }))
															.filter(({ msg }) => msg.sender === 'user')
															.map(({ index }) => index)
															.pop()
														if (lastUserMessageIndex !== undefined) {
															setInputValue(history[lastUserMessageIndex].text)
															return lastUserMessageIndex
														}
														return null
													} else {
														const prevUserMessageIndex = history
															.map((msg, index) => ({ msg, index }))
															.filter(({ msg }) => msg.sender === 'user')
															.map(({ index }) => index)
															.reverse()
															.find((index) => index < prevIndex)
														if (prevUserMessageIndex !== undefined) {
															setInputValue(history[prevUserMessageIndex].text)
															return prevUserMessageIndex
														}
														return null
													}
												})
											} else if (e.key === 'ArrowDown') {
												setIndexAnswer((prevIndex) => {
													if (prevIndex === null) return null
													const nextUserMessageIndex = history
														.map((msg, index) => ({ msg, index }))
														.filter(({ msg }) => msg.sender === 'user')
														.map(({ index }) => index)
														.find((index) => index > prevIndex)
													if (nextUserMessageIndex !== undefined) {
														setInputValue(history[nextUserMessageIndex].text)
														return nextUserMessageIndex
													}
													return null
												})
											}
										}}
										placeholder="Scrivi qui..."
										className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
									/>
									<button
										type="button"
										onClick={handleSendMessage}
										className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/90"
									>
										<Send className="h-4 w-4" />
									</button>
								</div>
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
												{questionsData.questions
													.filter((q) => !q.hidden)
													.map((q) => {
														const text = q.text[dict.lang as 'it' | 'en']
														return (
															<button
																type="button"
																key={q.id}
																onClick={() =>
																	handleQuestionClick({
																		id: q.id,
																		text: q.text[dict.lang as 'it' | 'en'],
																		answers: (q as any).answers[
																			dict.lang as 'it' | 'en'
																		],
																	})
																}
																className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-3 text-left font-medium text-gray-700 text-sm shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary"
															>
																{text}
															</button>
														)
													})}
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
					'flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all duration-300 md:h-14 md:w-14',
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
