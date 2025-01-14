import { redirect } from 'next/navigation'
import { getDictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import FormArticles from '@/components/Forms/FormArticles'
import { isAuthenticated } from '@/lib'

export default async function DashboardPage() {
  const dict = await getDictionary()
  const isAuth = await isAuthenticated()
  if (!isAuth) {
    return redirect('/login')
  }
  return (
    <SectionHero title={dict.dashboard.form.title}>
      <div className="flex flex-col items-center justify-center">
        <FormArticles dict={dict} />
      </div>
    </SectionHero>
  )
}
