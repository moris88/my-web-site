'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { createStore, Provider } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { themeAtom } from '@/atoms'
import { Footer, Header } from '@/components'
import { Links, Theme } from '@/types'
import { setThemeDocument } from '@/utils'

const atomStore = createStore()

interface UIWrapperProps {
  children: React.ReactNode
  dict: Dictionary
  links: Links
}

export default function UIWrapper({ children, dict, links }: UIWrapperProps) {
  const [inizializate, setInizializate] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!inizializate) {
      const theme = window.localStorage.getItem('theme') as Theme
      atomStore.set(themeAtom, theme)
      setInizializate(true)
      if (theme) setThemeDocument(theme)
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
