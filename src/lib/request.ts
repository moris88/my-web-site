'use server'

import { cookies } from 'next/headers'
import jsonContacts from '@/data/contacts.json'
import jsonCurriculum from '@/data/curriculum.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonSkills from '@/data/skills.json'
import { Contact, Curriculum, Info, Language, Links, Skills } from '@/types'

const { COOKIE_VALUE } = process.env

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

export async function getCV(language: Language) {
  return jsonCurriculum[language] as Curriculum
}

export const isAuthenticated = async () => {
  if (!COOKIE_VALUE) return false
  const cookieStore = cookies()
  const cookie = cookieStore.get('auth_jwt')
  const cookie_value = cookie?.value ?? null
  return cookie_value === COOKIE_VALUE ? true : false
}

export const logout = async () => {
  cookies().delete('auth_jwt')
}

export const login = async (jwt: string) => {
  debugger
  cookies().set('auth_jwt', jwt, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    path: '/',
  })
}
