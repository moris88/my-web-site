'only server'

import jsonBlog from '@/data/blog.json'
import jsonContacts from '@/data/contacts.json'
import jsonCurriculum from '@/data/curriculum.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonSkills from '@/data/skills.json'
import {
  Blog,
  Contact,
  Curriculum,
  Info,
  Language,
  Links,
  Skills,
} from '@/types'

export async function getLinks() {
  return jsonLinks as Links
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

export async function getBlog(language: Language) {
  return jsonBlog[language] as Blog
}

export async function getCV(language: Language) {
  return jsonCurriculum[language] as Curriculum
}
