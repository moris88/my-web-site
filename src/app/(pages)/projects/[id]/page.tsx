import React from 'react'

import { ErrorPage, PageProject } from '@/components'
import { getProjects } from '@/lib'

import { getDictionary } from '../../../dictionaries'

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const projects = await getProjects(language)
  const project = projects.find((project) => project.id === +id)
  if (!project) {
    return <ErrorPage err={new Error('Project not found')} />
  }
  return <PageProject dict={dict} project={project} />
}
