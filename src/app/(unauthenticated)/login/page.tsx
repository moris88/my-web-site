import { redirect } from 'next/navigation'
import { FormLogin } from '@/components'
import { isAuthenticated } from '@/lib'
import { getDictionary } from '../../dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  const isAuth = await isAuthenticated()
  if (isAuth) return redirect(`/dashboard`)
  return (
    <div className="container flex items-center justify-center">
      <section className="max-w-60 py-10 md:py-52">
        <FormLogin dict={dict} />
      </section>
    </div>
  )
}
