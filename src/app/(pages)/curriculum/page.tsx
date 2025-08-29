import React from 'react'

import { getDictionary } from '@/app/dictionaries'
import { PageCV } from '@/components'
import { getCV } from '@/lib'

export default async function SkillsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const curriculum = await getCV(language)
  return <PageCV curriculum={curriculum} dict={dict} />
}
