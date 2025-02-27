import React from 'react'
import { getDictionary } from '@/app/dictionaries'
import { SectionHero, FormArticles } from '@/components'
import { getLanguages } from '@/lib'

export default async function NewArticlePage() {
  const dict = await getDictionary()
  const response = await getLanguages()
  return (
    <SectionHero title={dict.edit_blog.form.section.new}>
      <FormArticles dict={dict} languages={response?.data} />
    </SectionHero>
  )
}
