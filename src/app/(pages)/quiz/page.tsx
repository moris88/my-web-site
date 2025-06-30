import React from 'react'
import { getDictionary } from '@/app/dictionaries'
import { PageQuiz } from '@/components'
import { getQuiz } from '@/lib'

export default async function ProjectsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const questions = await getQuiz()
  return <PageQuiz dict={dict} language={language} questions={questions.quiz} />
}
