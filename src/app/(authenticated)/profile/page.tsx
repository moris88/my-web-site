'use server'

import { getDictionary } from '@/app/dictionaries'
import { SectionHero, FormUser } from '@/components'
import { getUser } from '@/lib/supabase/supabase'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const dict = await getDictionary()
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <SectionHero title={'Profile'}>
      <FormUser dict={dict} user={user} />
    </SectionHero>
  )
}
