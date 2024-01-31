'use client'

import React from 'react'
import MyCard from './MyCard'
import { Skills } from '@/utils/types'

interface SkillsProps {
  data?: {
    skills: Skills
  }
}

const Skills = ({ data }: SkillsProps) => {
  const skills = data?.skills
  const languages = skills?.languages || []
  const frontends = skills?.frontends || []
  const framewoks_frontend = skills?.frameworks_frontend || []
  const backends = skills?.backends || []
  const framewoks_backend = skills?.frameworks_backend || []
  const tools = skills?.tools || []
  const soft = skills?.soft || []
  return (
    <section className="min-h-screen flex flex-col justify-center px-24">
      <h1 className="text-3xl font-bold my-5 text-center">My Skills</h1>
      <h2 className="text-xl font-bold my-5 text-center">Languages</h2>
      <div className="grid grid-cols-4 gap-4">
        {languages.map((language) => {
          return (
            <MyCard
              key={`my-card-${language.title}`}
              title={language.title}
              description={'Level: ' + language.level}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Frontend</h2>
      <div className="grid grid-cols-4 gap-4">
        {frontends.map((frontend) => {
          return (
            <MyCard
              key={`my-card-${frontend.title}`}
              title={frontend.title}
              description={'Level: ' + frontend.level}
              link={frontend.link}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Framework Frontend</h2>
      <div className="grid grid-cols-4 gap-4">
        {framewoks_frontend.map((framework) => {
          return (
            <MyCard
              key={`my-card-${framework.title}`}
              title={framework.title}
              description={'Level: ' + framework.level}
              link={framework.link}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Backend</h2>
      <div className="grid grid-cols-4 gap-4">
        {backends.map((backend) => {
          return (
            <MyCard
              key={`my-card-${backend.title}`}
              title={backend.title}
              description={'Level: ' + backend.level}
              link={backend.link}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Framework Backend</h2>
      <div className="grid grid-cols-4 gap-4 mb-5">
        {framewoks_backend.map((framework) => {
          return (
            <MyCard
              key={`my-card-${framework.title}`}
              title={framework.title}
              description={'Level: ' + framework.level}
              link={framework.link}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Tools</h2>
      <div className="grid grid-cols-4 gap-4 mb-5">
        {tools.map((tool) => {
          return (
            <MyCard
              key={`my-card-${tool.title}`}
              title={tool.title}
              description={'Level: ' + tool.level}
              link={tool.link}
            />
          )
        })}
      </div>
      <h2 className="text-xl font-bold my-5 text-center">Soft Skills</h2>
      <div className="grid grid-cols-4 gap-4 mb-5">
        {soft.map((s) => {
          return (
            <MyCard
              key={`my-card-${s.title}`}
              title={s.title}
              description={'Level: ' + s.level}
              link={s.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Skills
