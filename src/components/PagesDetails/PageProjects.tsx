'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Dictionary } from '@/app/dictionaries'
import { CardProject, SectionHero } from '@/components'
import { Project } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageProjectsProps {
  dict: Dictionary
  projects: Project[]
}

function PageProjects({ dict, projects }: PageProjectsProps) {
  const router = useRouter()

  const handleClickRow = (project: Project) => {
    router.push(`/projects/${project.id}`)
  }

  return (
    <SectionHero title={dict.projects.title}>
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <CardProject
            key={generateUniqueId()}
            project={project}
            onClick={handleClickRow}
          />
        ))}
      </div>
    </SectionHero>
  )
}

export default PageProjects
