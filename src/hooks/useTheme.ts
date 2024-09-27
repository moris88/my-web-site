import React from 'react'

const useTheme = () => {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])

  return {
    theme,
    setTheme: (theme: string) => {
      setTheme(theme)
      window.localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
      if (theme === 'light') {
        document.documentElement.classList.remove('dark')
      }
    },
  }
}

export default useTheme
