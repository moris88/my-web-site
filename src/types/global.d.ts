export interface Info {
  description: {
    it: string
    en: string
  }
}

export interface Links {
  [key: string]: string
  github: string
  linkedin: string
  twitter: string
  email: string
}

export interface Contacts {
  it: Contact
  en: Contact
}

export interface Contact {
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
  curriculum: string
}

export interface Skills {
  [key: string]: any
  languages: Skill[]
  frontends: Skill[]
  frameworks_frontend: Skill[]
  backends: Skill[]
  frameworks_backend: Skill[]
  tools: Skill[]
  soft: {
    title: {
      it: string
      en: string
    }
    values: SkillElement[]
  }
}

export interface Skill {
  title: string
  values: SkillElement[]
}

export interface SkillElement {
  title: string
  level: number
  link: string
}

export interface Blog {
  [key: string]: { articles: Article[] }
  it: {
    articles: Article[]
  }
  en: {
    articles: Article[]
  }
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

export interface Portfolio {
}
