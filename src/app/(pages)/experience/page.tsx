import React from 'react'

import { getDictionary } from '@/app/dictionaries'
import { PageHistory } from '@/components'
import { getHistory } from '@/lib'

export default async function BlogsPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const history = await getHistory()
  return <PageHistory history={history} language={language} />
}
