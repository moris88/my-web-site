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
  languages: Skill[]
  frontends: Skill[]
  frameworks_frontend: Skill[]
  backends: Skill[]
  frameworks_backend: Skill[]
  tools: Skill[]
  soft: Skill[]
}

export interface Skill {
  title: string
  level?: number
  link?: string
}
