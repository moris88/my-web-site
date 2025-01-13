export type Language = 'it' | 'en'
export type Theme = 'light' | 'dark'

export interface Info {
  name: string
  job: string
  description: {
    it: string
    en: string
  }
}

export interface StoreLink {
  label: string
  name: string
  url: string
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
  links: string[]
}

export interface Skills extends Record<string, Skill[]> {
  languages: Skill[]
  frontends: Skill[]
  frameworks_frontend: Skill[]
  database: Skill[]
  frameworks_backend: Skill[]
  tools: Skill[]
  platforms: Skill[]
  soft: Skill[]
}

export interface Skill {
  title: string | { it: string; en: string }
  description?: { it: string; en: string }
  level: number
  link?: string
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
  content: string
  date: string
  link?: string
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

export interface History {
  title: {
    it: string
    en: string
  }
  it: {
    title: string | null
    description: string
  }[]
  en: {
    title: string | null
    description: string
  }[]
  lastUpdate: string
}
