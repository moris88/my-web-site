'use server'

import { cookies } from 'next/headers'
import jsonContacts from '@/data/contacts.json'
import jsonCurriculum from '@/data/curriculum.json'
import jsonHistory from '@/data/history.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonSkills from '@/data/skills.json'
import {
  Contact,
  Curriculum,
  History,
  Info,
  Language,
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
