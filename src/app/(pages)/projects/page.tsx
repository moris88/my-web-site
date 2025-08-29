import React from 'react'

import { getDictionary } from '@/app/dictionaries'
import { PageProjects } from '@/components'
import { getProjects } from '@/lib'

export default async function ProjectsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const projects = await getProjects(language)
  return <PageProjects dict={dict} projects={projects} />
}
