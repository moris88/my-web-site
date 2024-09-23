'use client'

import Link from 'next/link'
import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import { Curriculum } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageCVProps {
  curriculum: Curriculum
  dict: Dictionary
}

function PageCV({ curriculum, dict }: PageCVProps) {
  return (
    <SectionHero title={dict.curriculum.title}>
      <p className="text-base lg:text-xl">{dict.curriculum.experiences}</p>
      <ul className="cursor-pointer rounded-lg bg-slate-600 p-1 hover:shadow-lg hover:shadow-slate-500 md:p-5">
        {curriculum.experiences.map((exp) => (
          <li key={generateUniqueId()}>
            <p>
              <b>
                <Link href={exp.link ?? ''}>{exp.company}</Link>
              </b>{' '}
              <i>{exp.role}</i> {exp.start} {'->'} {exp.end ?? 'present'})
            </p>
            <p>description: {exp.description}</p>
            <br />
          </li>
        ))}
      </ul>
      <p className="text-base lg:text-xl">{dict.curriculum.education}</p>
      <ul className="cursor-pointer rounded-lg bg-slate-600 p-1 hover:shadow-lg hover:shadow-slate-500 md:p-5">
        {curriculum.education.map((exp) => (
          <li key={generateUniqueId()}>
            <p>
              <b>
                <Link href={exp.link ?? ''}>{exp.institution}</Link>
              </b>{' '}
              <i>{exp.role}</i> {exp.start} {'->'} {exp.end ?? 'present'})
            </p>
            <p>description: {exp.description}</p>
            <br />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <DownloadFile pathFile="/cv_maurizio_tolomeo.pdf">
          {dict.curriculum.download}
        </DownloadFile>
      </div>
    </SectionHero>
  )
}

export default PageCV
