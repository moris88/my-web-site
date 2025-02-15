'use server'

// import { getDictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import { getUser } from '@/lib/supabase/supabase'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  // const dict = await getDictionary()
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <SectionHero title={'Profile'}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center">{user?.email}</h1>
        <a className="hover:text-primary" href="https://supabase.com/dashboard/project/psgaxddqtxofwhtzfxiw">Supabase Dashboard</a>
        <pre className='text-sm'>{JSON.stringify(user.identities?.[0], null, 3)}</pre>
      </div>
    </SectionHero>
  )
}
