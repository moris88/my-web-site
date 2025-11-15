'use client'

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
					<button
						type="button"
						className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
						onClick={() => setStop(false)}
					>
						{dict.quiz.popup.buttons.close}
					</button>
				</div>
			)}
			{!result && !stop && (
				<div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
					<h2 className="mb-4 font-semibold text-xl">
						{questions[step].question[language]}
					</h2>
					<ul className="space-y-3">
						{questions[step].answers.map((answer) => (
							<li key={answer.text[language]}>
								<button
									type="button"
									className="w-full rounded-md bg-blue-100 px-4 py-2 text-left text-blue-900 hover:bg-blue-200"
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
