'only server'

import jsonContact from '@/data/contact.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonSkills from '@/data/skills.json'
import { Contact, Info, Links, Skills } from '@/types/global.d'

export async function getLinks() {
  return jsonLinks.links as unknown as Links
}

export async function getInfo() {
  return jsonInfo as unknown as Info
}

export async function getContact() {
  return jsonContact.contact as unknown as Contact
}

export async function getSkills() {
  return jsonSkills.skills as unknown as Skills
}
