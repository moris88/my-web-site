'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { createStore, Provider } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { themeAtom } from '@/atoms'
import { Footer, Header } from '@/components/UI'
import { StoreLink, Theme } from '@/types'
import { setThemeDocument } from '@/utils'

const atomStore = createStore()

interface UIWrapperProps {
  children: React.ReactNode
  dict: Dictionary
  links: StoreLink[]
}

export default function UIWrapper({ children, dict, links }: UIWrapperProps) {
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
      <NextUIProvider>
        <Header dict={dict} />
        {children}
        <Footer links={links} />
      </NextUIProvider>
    </Provider>
  )
}
