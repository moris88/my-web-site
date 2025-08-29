'use server'

import jsonBlog from '@/data/blog.json'
import jsonContacts from '@/data/contacts.json'
import jsonCurriculum from '@/data/curriculum.json'
import jsonHistory from '@/data/history.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonProjects from '@/data/projects.json'
import jsonQuiz from '@/data/quiz.json'
import jsonSkills from '@/data/skills.json'
import {
  Blog,
  Contact,
  Curriculum,
  History,
  Info,
  Language,
  Project,
  QuizQuestion,
  Skills,
  StoreLink,
} from '@/types'

export async function getLinks() {
  return jsonLinks as StoreLink[]
}

export async function getInfo() {
  return jsonInfo as Info
}

export async function getContacts(language: Language) {
  return jsonContacts[language] as Contact
}

export async function getSkills() {
  return jsonSkills as Skills
}

export async function getCV(language: Language) {
  return jsonCurriculum[language] as Curriculum
}

export async function getHistory() {
  return jsonHistory.history as History
}

export async function getProjects(language: Language) {
  return jsonProjects.projects[language] as Project[]
}

export async function getBlog(language: Language) {
  return jsonBlog[language] as Blog
}

export async function getQuiz() {
  return jsonQuiz as { quiz: QuizQuestion[] }
}
