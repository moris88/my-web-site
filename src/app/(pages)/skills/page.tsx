import React from 'react'
import { PageSkills } from '@/components'
import { getSkills } from '@/lib'
import { getDictionary } from '@/app/dictionaries'

export default async function SkillsPage() {
  const skills = await getSkills()
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  return (
    <div className="container">
      <PageSkills dict={dict} language={language} skills={skills} />
    </div>
  )
}
