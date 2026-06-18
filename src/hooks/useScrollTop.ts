import React from 'react'

export default function useScrollTop(threshold = 400) {
	const [showScrollTop, setShowScrollTop] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > threshold)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [threshold])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return { showScrollTop, scrollToTop }
}
