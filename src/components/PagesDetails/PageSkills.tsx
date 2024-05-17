'use client'

import React from 'react'
import { Card } from 'flowbite-react'
import { SkillElement, Skills } from '@/types/global'
import { getLevel } from '@/utils/utils'

interface SkillsProps {
  skills: Skills
  dict: any
}

export default function PageSkills({ skills, dict }: SkillsProps) {
  const mappa = {
    0: dict.skills.languages,
    1: dict.skills.frontends,
    2: dict.skills.frameworks_frontend,
    3: dict.skills.backends,
    4: dict.skills.frameworks_backend,
    5: dict.skills.tools,
    6: dict.skills.soft,
  }
  return (
    <section className="mb-20 flex flex-col justify-center px-24">
      <h1 className="my-5 text-center text-3xl font-bold">
        {dict.skills.title}
      </h1>
      {skills &&
        Object.keys(skills).map((key, i) => (
          <React.Fragment key={`skill-${skills[key].title}`}>
            <h2 className="my-5 text-center text-xl font-bold">
              {mappa[i as keyof typeof mappa]}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {skills[key].values.map((skill: SkillElement) => {
                return (
                  <Card
                    key={`my-card-${skill.title}`}
                    className="max-w-sm bg-slate-300 shadow-md shadow-slate-300 transition-all duration-100 ease-in-out hover:scale-105"
                    href={skill.link || ''}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {skill.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{`${dict.skills.card.level}: ${key === 'soft' ? getLevel(skill.level, 'soft', dict) : getLevel(skill.level, 'hard', dict)}`}</p>
                  </Card>
                )
              })}
            </div>
          </React.Fragment>
        ))}
    </section>
  )
}
