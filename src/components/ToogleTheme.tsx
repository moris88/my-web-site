import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2'
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
      endContent={<HiMiniSun />}
      size="sm"
      startContent={<HiMiniMoon />}
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
