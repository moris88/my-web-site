'use server'

import jsonContacts from '@/data/contacts.json'
import jsonCurriculum from '@/data/curriculum.json'
import jsonHistory from '@/data/history.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonProjects from '@/data/projects.json'
import jsonQuiz from '@/data/quiz.json'
import jsonSkills from '@/data/skills.json'
import type {
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

// Campi testuali: stringa unica (uguale per tutte le lingue) o oggetto { it, en }
type Localized = string | Record<Language, string>

const localize = (value: Localized, language: Language) =>
	typeof value === 'string' ? value : value[language]

export async function getProjects(language: Language): Promise<Project[]> {
	return jsonProjects.projects.map((p) => ({
		...p,
		title: localize(p.title as Localized, language),
		description: localize(p.description as Localized, language),
		image: { ...p.image, alt: localize(p.image.alt as Localized, language) },
		badges: (p as { badges?: { icon: string; label: Localized }[] }).badges?.map(
			(b) => ({ icon: b.icon, label: localize(b.label, language) }),
		),
	})) as Project[]
}

export async function getQuiz() {
	return jsonQuiz as { quiz: QuizQuestion[] }
}
