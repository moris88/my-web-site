'use server'

// import { getDictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import { getUser } from '@/lib/supabase/supabase'

export default async function ProfilePage() {
  // const dict = await getDictionary()
  const response = await getUser()
  const user = response?.data?.user ?? null
  return (
    <SectionHero title={'Profile'}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center">{user?.email}</h1>
        <pre className='text-sm'>{JSON.stringify(user, null, 3)}</pre>
      </div>
    </SectionHero>
  )
}
