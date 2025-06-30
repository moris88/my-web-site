'use client'

import React from 'react'
import { Dictionary } from '@/app/dictionaries'
import { DeveloperCategory, QuizQuestion } from '@/types'
import { QuizResultPopup } from '@/components'

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
    }
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
        (a, b) => b[1] - a[1]
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
        <QuizResultPopup category={result} onClose={resetQuiz} />
      )}
      {stop && (
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Quiz completato!</h2>
          <p className="mb-4 text-gray-700">
            Grazie per aver partecipato! Puoi ripetere il quiz per esplorare
            altre opzioni.
          </p>
          <button
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => setStop(false)}
          >
            Ripeti il quiz
          </button>
        </div>
      )}
      {!result && !stop && (
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">
            {questions[step].question[language]}
          </h2>
          <ul className="space-y-3">
            {questions[step].answers.map((answer, i) => (
              <li key={i}>
                <button
                  className="w-full rounded-md bg-blue-100 px-4 py-2 text-left text-blue-900 hover:bg-blue-200"
                  onClick={() => handleAnswer(answer.points)}
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
