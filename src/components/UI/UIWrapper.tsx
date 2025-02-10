'use client'

import React from 'react'
import { HeroUIProvider } from '@heroui/system'
import { createStore, Provider } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { themeAtom } from '@/atoms'
import { Footer, Header } from '@/components/UI'
import { StoreLink, Theme } from '@/types'
import { setThemeDocument } from '@/utils'
import { User } from '@supabase/supabase-js'

const atomStore = createStore()

interface UIWrapperProps {
  children: React.ReactNode
  dict: Dictionary
  links: StoreLink[]
  user: User | null
}

export default function UIWrapper({
  children,
  dict,
  links,
  user,
}: UIWrapperProps) {
  const [inizializate, setInizializate] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!inizializate) {
      const theme = window.localStorage.getItem('theme') as Theme
      if (!theme) window.localStorage.setItem('theme', 'light')
      atomStore.set(themeAtom, theme || 'light')
      setThemeDocument(theme || 'light')
      setInizializate(true)
      return
    }
  }, [inizializate])

  if (!inizializate) return <></>

  return (
    <Provider store={atomStore}>
      <HeroUIProvider>
        <Header dict={dict} user={user} />
        <div className="min-h-[86vh] lg:min-h-[84vh]">{children}</div>
        <Footer links={links} />
      </HeroUIProvider>
    </Provider>
  )
}
