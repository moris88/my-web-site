'use client'

import { Dictionary } from '@/app/dictionaries'
import { ModalMessage, SectionHero } from '@/components/UI'

interface PageCookiesProps {
  dict: Dictionary
  page: `cookies` | `privacy`
}

function Page({ dict, page }: PageCookiesProps) {
  return (
    <SectionHero subtitle={dict[page].content} title={dict[page].title}>
      <div className="flex flex-col items-center justify-center gap-2">
        <ModalMessage dict={dict} />
      </div>
    </SectionHero>
  )
}

export default Page
