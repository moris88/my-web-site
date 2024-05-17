'only server'

import jsonBlog from '@/data/blog.json'
import jsonContacts from '@/data/contacts.json'
import jsonInfo from '@/data/info.json'
import jsonLinks from '@/data/links.json'
import jsonSkills from '@/data/skills.json'
import { Blog, Contacts, Info, Links, Skills } from '@/types/global.d'

export async function getLinks() {
  return jsonLinks.links as unknown as Links
}

export async function getInfo() {
  return jsonInfo as unknown as Info
}

export async function getContacts() {
  return jsonContacts.contacts as unknown as Contacts
}

export async function getSkills() {
  return jsonSkills.skills as unknown as Skills
}

export async function getBlog() {
  return jsonBlog.blog as unknown as Blog
}
