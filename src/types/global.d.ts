export type Language = 'it' | 'en'

export interface Info {
  name: string
  job: string
  description: {
    it: string
    en: string
  }
}

export interface Links extends Record<string, string> {
  github: string
  linkedin: string
  facebook: string
  email: string
}

export interface Contact extends Record<string, any> {
  firstName: string
  lastName: string
  age: number
  birthDate: string
  nazionality: string
  job: string
  company: string
  email: string
  phone: string
  address: string
  website: string
  linkedin: string
  facebook: string
  github: string
}

export interface Skills extends Record<string, Skill[]> {
  languages: Skill[]
  frontends: Skill[]
  frameworks_frontend: Skill[]
  backends: Skill[]
  frameworks_backend: Skill[]
  tools: Skill[]
  soft: Skill[]
}

export interface Skill {
  title: string | { it: string; en: string }
  level: number
  link?: string
}

export interface Blog {
  articles: Article[]
}

export interface Article {
  id: number
  title: string
  subtitle?: string
  content: string
  date: string
  link?: string
  image?: string
}

export interface Curriculum {
  education: Education[]
  experiences: Experience[]
}

export interface Education {
  institution: string
  role: string
  start: string
  end: string | null
  description: string
  link: string | null
}

export interface Experience {
  company: string
  role: string
  start: string
  end: string | null
  description: string
  link: string | null
}
