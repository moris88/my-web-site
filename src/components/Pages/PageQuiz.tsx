'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import { Button, QuizResultPopup } from '@/components'
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
				<div className="rounded-xl bg-blue-50 p-6 shadow-md dark:bg-gray-800">
					<h2 className="mb-4 font-semibold text-black text-xl dark:text-white">
						{dict.quiz.popup.title}
					</h2>
					<p className="mb-4 text-gray-700 dark:text-white">
						{dict.quiz.popup.message}
					</p>
					<div className="flex items-center justify-center gap-4">
						<Button
							type="button"
							variant="secondary"
							onClick={() => setStop(false)}
						>
							{dict.quiz.popup.buttons.reset}
						</Button>
						<Button type="button" onClick={() => router.push('/experience')}>
							{dict.quiz.popup.buttons.close}
						</Button>
					</div>
				</div>
			)}
			{!result && !stop && (
				<div className="rounded-xl bg-blue-50 p-6 shadow-md dark:bg-gray-800">
					<h2 className="mb-4 select-none font-semibold text-black text-xl dark:text-white">
						{questions[step].question[language]}
					</h2>
					<ul className="space-y-3">
						{questions[step].answers.map((answer) => (
							<li key={answer.text[language]} className="select-none">
								<Button
									type="button"
									variant="secondary"
									className="w-full"
									onClick={(e) => {
										e.preventDefault()
										handleAnswer(answer.points)
									}}
								>
									{answer.text[language]}
								</Button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default PageQuiz
