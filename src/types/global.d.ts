export type Language = 'it' | 'en'
export type Theme = 'light' | 'dark'

export interface Info {
	name: string
	job: string
	whoAmIDescription: {
		it: string
		en: string
	}
	whatIDoDescription: {
		it: string
		en: string
	}
	secondary_skills: {
		it: string
		en: string
	}
	primary_skills: {
		link: {
			url: string
		}
		img: {
			src: string
			alt: string
		}
	}[]
	services: {
		title: {
			it: string
			en: string
		}
		description: {
			it: string
			en: string
		}
		icon: string
	}[]
}

export interface StoreLink {
	label: string
	name: string
	url: string
}

export interface Contact extends Record<string, string | string[]> {
	firstName: string
	lastName: string
	job: string
	specialization: string
	email: string
	website: string
	links: string[]
}

export interface Skills extends Record<string, ListSkills> {
	languages: ListSkills
	frontends: ListSkills
	frameworks_frontend: ListSkills
	database: ListSkills
	frameworks_backend: ListSkills
	tools: ListSkills
	platforms: ListSkills
	soft: ListSkills
}

export interface ListSkills {
	list: Skill[]
	description: {
		it: string
		en: string
	}
}

export interface Skill {
	title: string | { it: string; en: string }
	description?: { it: string; en: string }
	level: number
	link?: string
	icon?: string
}

export interface Err {
	error: string
	message: string
}

export interface Blog extends Partial<Err> {
	articles: Article[]
}

export interface Article {
	id: string
	title: string
	summary: string
	content: string
	created_at: string
	updated_at: string
	published_at: string
	published: 'true' | 'false'
	link?: string
	image?: string
	alt?: string
	author?: string
}

export interface Curriculum {
	educations: Education[]
	experiences: Experience[]
}

export interface Experience {
	type: 'work'
	company: string
	role: string
	start: string
	end?: string
	description: string
	link?: string
}

export interface Education {
	type: 'education'
	institution: string
	role: string
	start: string
	end?: string
	description: string
	link?: string
}

export interface History {
	title: {
		it: string
		en: string
	}
	it: {
		id: string
		title: string | null
		description: string
		image?: string
		alt?: string
	}[]
	en: {
		id: string
		title: string | null
		description: string
		image?: string
		alt?: string
	}[]
	lastUpdate: string
}

export interface Project {
	id: number
	title: string
	description: string
	url: string
	github: string
	image: {
		src: string
		alt: string
	}
	public: boolean
	tags: string[]
}

export type DeveloperCategory =
	| 'frontend'
	| 'backend'
	| 'fullstack'
	| 'desktop'
	| 'mobile'
	| 'database'

export interface DeveloperProfile {
	title: string
	shortLabel: string
	description: string
	reasons: string[]
}

export interface QuizQuestion {
	question: {
		it: string
		en: string
	}
	answers: {
		text: {
			it: string
			en: string
		}
		points: Partial<Record<DeveloperCategory, number>>
	}[]
}
