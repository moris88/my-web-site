'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import FormArticles from '@/components/Forms/FormArticles'
import { getLanguages } from '@/lib'

export default async function NewArticlePage() {
  const dict = await getDictionary()
  const response = await getLanguages()
  return (
    <SectionHero title={dict.edit_blog.form.section.new}>
      <FormArticles
        languages={response?.data}
        dict={dict}
      />
    </SectionHero>
  )
}
