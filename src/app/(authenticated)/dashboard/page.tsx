'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import FormArticles from '@/components/Forms/FormArticles'

export default async function DashboardPage() {
  const dict = await getDictionary()
  return (
    <SectionHero title={dict.dashboard.form.title}>
      <div className="flex flex-col items-center justify-center">
        <FormArticles dict={dict} />
      </div>
    </SectionHero>
  )
}
