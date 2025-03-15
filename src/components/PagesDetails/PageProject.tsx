'use client'

import React from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import { Button, Link } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import { Project } from '@/types'
import { useRouter } from 'next/navigation'

interface PageProjectProps {
  dict: Dictionary
  project: Project
}

function PageProject({ dict, project }: PageProjectProps) {
  const router = useRouter()
  return (
    <>
      {project && (
        <SectionHero title={project.title}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              {project.image.src ? (
                <img
                  alt={project.image.alt}
                  className="h-full w-full rounded-lg border border-gray-300"
                  src={project.image.src}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
                  <p className="text-4xl text-gray-500">{'No-Image'}</p>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <p>{project.description}</p>
              {project.url && (
                <Link isExternal showAnchorIcon href={project.url}>
                  {dict.projects.project.link}
                </Link>
              )}
              {project.github && (
                <Link isExternal showAnchorIcon href={project.github}>
                  {dict.projects.project.github}
                </Link>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              className="flex gap-2"
              color="primary"
              variant="ghost"
              onPress={() => router.back()}
            >
              <HiArrowLeft className="h-5 w-5" />
              {dict.projects.project.buttons.back}
            </Button>
          </div>
        </SectionHero>
      )}
    </>
  )
}

export default PageProject
