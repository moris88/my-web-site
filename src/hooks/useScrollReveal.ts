'use client'

import { useEffect } from 'react'

/**
 * Hook per replicare il comportamento di AOS usando Intersection Observer.
 * Cerca elementi con l'attributo `data-reveal` e aggiunge la classe `active`
 * quando entrano nel viewport.
 */
export function useScrollReveal() {
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1, // L'elemento deve essere visibile al 10%
		}

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal-active')
					// Opzionale: smetti di osservare dopo la prima animazione
					// observer.unobserve(entry.target);
				}
			}
		}, observerOptions)

		const elements = document.querySelectorAll('[data-reveal]')
		for (const el of elements) {
			observer.observe(el)
		}

		return () => {
			for (const el of elements) {
				observer.unobserve(el)
			}
		}
	}, [])
}
