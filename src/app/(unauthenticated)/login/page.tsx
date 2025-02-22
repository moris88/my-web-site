import React from 'react'
import { FormLogin } from '@/components'
import { getDictionary } from '@/app/dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return (
    <div className="container flex items-center justify-center">
      <section className="max-w-60 py-10 md:py-52">
        <FormLogin dict={dict} />
      </section>
    </div>
  )
}
