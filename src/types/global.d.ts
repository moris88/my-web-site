export type Language = 'it' | 'en'
export type Theme = 'light' | 'dark'

export interface Info {
  name: string
  job: string
  description1: {
    it: string
    en: string
  }
  description2: {
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
}

export interface StoreLink {
  label: string
  name: string
  url: string
}

export interface Contact extends Record<string, any> {
  firstName: string
  lastName: string
  job: string
  specialization: string
  email: string
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
  created_at: string
  updated_at: string
  link?: string
  image?: string
}

export interface Comment {
  id: string
  article_id: string
  content: string
  created_at: string
  username: string
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
    image?: string
    alt?: string
  }[]
  en: {
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
  tags: string[]
}
