import { useEffect, useState } from 'react'

function useScreenDimensions() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isDesktop: width > 1600,
    isLaptop: width > 1366 && width <= 1600,
    isTablet: width > 900 && width <= 1366,
    isMobile: width <= 900,
  }
}

export default useScreenDimensions
