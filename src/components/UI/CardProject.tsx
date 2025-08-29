'use client'

import { Chip } from '@heroui/react'
import React from 'react'

import { Project } from '@/types'

interface CardProjectProps {
  project: Project
  onClick?: (_project: Project) => void
}

function CardProject({ project, onClick }: CardProjectProps) {
  const { title, image, tags } = project
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.(project)
  }
  return (
    <article
      className="w-full cursor-pointer rounded-lg bg-gray-200 p-4 text-black transition-all duration-100 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700"
      onClick={handleOnClick}
    >
      <div className="flex min-h-20 flex-col items-start gap-y-2">
        {image?.src ? (
          <img
            alt={image.alt}
            className="h-40 w-full rounded-lg object-cover object-top"
            src={image.src}
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gray-300">
            <p className="text-4xl text-gray-500">{'No-Image'}</p>
          </div>
        )}
        <h2 className="line-clamp-1 text-xl font-bold text-black select-none dark:text-gray-300">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 gap-y-1">
          {tags.map((tag, index) => (
            <Chip key={`tag-${index}`} color="primary">
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  )
}

export default CardProject
