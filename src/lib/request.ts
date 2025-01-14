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

const { COOKIE_VALUE } = process.env

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

export const isAuthenticated = async () => {
  if (!COOKIE_VALUE) return false
  const cookieStore = cookies()
  const cookie = cookieStore.get(`auth_jwt`)
  const cookieValue = cookie?.value ?? null
  return cookieValue === COOKIE_VALUE ? true : false
}

export const logout = async () => {
  cookies().delete(`auth_jwt`)
}

export const login = async (jwt: string) => {
  cookies().set(`auth_jwt`, jwt, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    path: `/`,
  })
}
