'use client'

import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import { QuizResultPopup } from '@/components'
import type { DeveloperCategory, QuizQuestion } from '@/types'

interface PageQuizProps {
	dict: Dictionary
	language: 'it' | 'en'
	questions: QuizQuestion[]
}

function PageQuiz({ dict, language, questions }: Readonly<PageQuizProps>) {
	const router = useRouter()
	const [step, setStep] = React.useState(0)
	const [stop, setStop] = React.useState(false)
	const [scores, setScores] = React.useState<Record<DeveloperCategory, number>>(
		{
			frontend: 0,
			backend: 0,
			fullstack: 0,
			desktop: 0,
			mobile: 0,
			database: 0,
		},
	)
	const [result, setResult] = React.useState<DeveloperCategory | null>(null)

	const handleAnswer = (points: Partial<Record<DeveloperCategory, number>>) => {
		const newScores = { ...scores }
		for (const [cat, score] of Object.entries(points)) {
			newScores[cat as DeveloperCategory] += score ?? 0
		}
		setScores(newScores)

		if (step + 1 < questions.length) {
			setStep(step + 1)
		} else {
			const best = Object.entries(newScores).sort(
				(a, b) => b[1] - a[1],
			)[0][0] as DeveloperCategory
			setResult(best)
		}
	}

	const resetQuiz = () => {
		setStop(true)
		setStep(0)
		setScores({
			frontend: 0,
			backend: 0,
			fullstack: 0,
			desktop: 0,
			mobile: 0,
			database: 0,
		})
		setResult(null)
	}

	return (
		<div className="mx-auto max-w-xl p-4">
			{result && !stop && (
				<QuizResultPopup category={result} dict={dict} onClose={resetQuiz} />
			)}
			{stop && (
				<div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
					<h2 className="mb-4 font-semibold text-xl">
						{dict.quiz.popup.title}
					</h2>
					<p className="mb-4 text-gray-700 dark:text-white">
						{dict.quiz.popup.message}
					</p>
					<div className="flex items-center justify-center gap-4">
						<Button
							size="lg"
							radius="full"
							type="button"
							onPress={() => setStop(false)}
							className="relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-padding p-[2px] font-semibold text-transparent shadow-lg transition-transform hover:scale-105"
						>
							<span className="flex h-full w-full items-center justify-center rounded-full bg-white px-4 text-blue-600 dark:bg-slate-900 dark:text-purple-300">
								{dict.quiz.popup.buttons.reset}
							</span>
						</Button>
						<Button
							size="lg"
							radius="full"
							type="button"
							className="bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white shadow-lg transition-transform hover:scale-105"
							onPress={() => router.push('/experience')}
						>
							{dict.quiz.popup.buttons.close}
						</Button>
					</div>
				</div>
			)}
			{!result && !stop && (
				<div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
					<h2 className="mb-4 select-none font-semibold text-xl">
						{questions[step].question[language]}
					</h2>
					<ul className="space-y-3">
						{questions[step].answers.map((answer) => (
							<li key={answer.text[language]} className="select-none">
								<button
									type="button"
									className="w-full cursor-pointer rounded-md bg-blue-100 px-4 py-2 text-left text-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-blue-200 hover:shadow-md hover:transition-all hover:duration-300 hover:ease-in-out dark:hover:bg-gradient-to-r dark:hover:from-blue-900 dark:hover:from-blue-900 dark:hover:to-purple-900 dark:hover:to-purple-900 dark:hover:shadow-blue-800 dark:hover:shadow-blue-800"
									onClick={(e) => {
										e.preventDefault()
										handleAnswer(answer.points)
									}}
								>
									{answer.text[language]}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default PageQuiz
