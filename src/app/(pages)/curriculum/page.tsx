import React from 'react'
import { PageCV } from '@/components'
import { getCV } from '@/lib'
import { getDictionary } from '@/app/dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const curriculum = await getCV(language)
  return <PageCV curriculum={curriculum} dict={dict} />
}
