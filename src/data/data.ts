'only server'

import contact from '../data/contact.json'
import info from '../data/info.json'
import links from '../data/links.json'
import skills from '../data/skills.json'

export async function getLinks() {
  return links
}

export async function getInfo() {
  return info
}

export async function getContact() {
  return contact
}

export async function getSkills() {
  return skills
}
