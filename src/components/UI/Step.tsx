'use client'

import React from 'react'
import { Education, Experience } from '@/types'
import { MdOutlineWork, MdSchool } from 'react-icons/md'
import { Link } from '@heroui/react'
import { generateUniqueId } from '@/utils'

interface StepProps {
  educations?: Education[]
  experiences?: Experience[]
}

function Step({ educations = [], experiences = [] }: StepProps) {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="lg:py-6 lg:pr-16">
        {experiences.map((experience, index) => {
          return (
            <div key={generateUniqueId()} className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                    <MdOutlineWork className="h-6 w-6" />
                  </div>
                </div>
                {index !== experiences.length - 1 && (
                  <div className="h-full w-px bg-gray-300" />
                )}
              </div>
              <div className="pb-8 pt-1">
                <p className="mb-2 text-lg font-bold">
                  <Link
                    isExternal
                    showAnchorIcon
                    className={
                      experience.link ? 'hover:underline' : 'cursor-not-allowed'
                    }
                    color="foreground"
                    href={experience.link ?? ''}
                  >
                    {experience.company}
                  </Link>
                </p>
                <p className="flex flex-col gap-2 text-gray-400 md:flex-row">
                  <span>
                    <i>{experience.role}</i>
                  </span>
                  <span>
                    {experience.start} {'->'} {experience.end ?? 'present'}
                  </span>
                </p>
                <p className="mt-2 text-gray-400">{experience.description}</p>
              </div>
            </div>
          )
        })}
        {educations.map((education, index) => {
          return (
            <div key={generateUniqueId()} className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                    <MdSchool className="h-6 w-6" />
                  </div>
                </div>
                {index !== educations.length - 1 && (
                  <div className="h-full w-px bg-gray-300" />
                )}
              </div>
              <div className="pb-8 pt-1">
                <p className="mb-2 text-lg font-bold">
                  <Link
                    isExternal
                    showAnchorIcon
                    className={
                      education.link ? 'hover:underline' : 'cursor-not-allowed'
                    }
                    color="foreground"
                    href={education.link ?? ''}
                  >
                    {education.institution}
                  </Link>
                </p>
                <p className="flex flex-col gap-2 text-gray-400 md:flex-row">
                  <span>
                    <i>{education.role}</i>
                  </span>
                  <span>
                    {education.start} {'->'} {education.end ?? 'present'}
                  </span>
                </p>
                <p className="mt-2 text-gray-400">{education.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Step
