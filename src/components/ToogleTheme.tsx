import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Switch } from '@nextui-org/react'
import { useStore } from 'jotai'
import { themeAtom } from '@/atoms'
import { Theme } from '@/types'
import { setThemeDocument } from '@/utils'

interface ToogleThemeProps {
  children?: React.ReactNode
}

function ToogleTheme({ children }: ToogleThemeProps) {
  const atomStore = useStore()
  const theme = atomStore.get(themeAtom)
  return (
    <Switch
      color="primary"
      defaultSelected={theme === 'light'}
      endContent={<SunIcon />}
      size="sm"
      startContent={<MoonIcon />}
      onChange={(e) => {
        const myTheme: Theme = e.target.checked ? 'light' : 'dark'
        atomStore.set(themeAtom, myTheme)
        setThemeDocument(myTheme)
      }}
    >
      {children}
    </Switch>
  )
}

export default ToogleTheme
