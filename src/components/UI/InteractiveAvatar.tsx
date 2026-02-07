'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface InteractiveAvatarProps {
	src: string
	alt: string
	className?: string
}

function InteractiveAvatar({
	src,
	alt,
	className,
}: InteractiveAvatarProps) {
	const ref = React.useRef<HTMLDivElement>(null)
	const [rotateX, setRotateX] = React.useState(0)
	const [rotateY, setRotateY] = React.useState(0)

	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!ref.current) return

			const rect = ref.current.getBoundingClientRect()
			const centerX = rect.left + rect.width / 2
			const centerY = rect.top + rect.height / 2

			const x = e.clientX - centerX
			const y = e.clientY - centerY

			// Calculate rotation based on distance from center
			// Limit the rotation to avoid extreme angles
			const rotationX = Math.max(
				-20,
				Math.min(20, (y / window.innerHeight) * -40),
			)
			const rotationY = Math.max(
				-20,
				Math.min(20, (x / window.innerWidth) * 40),
			)

			setRotateX(rotationX)
			setRotateY(rotationY)
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<motion.div
			ref={ref}
			className={`perspective-1000 relative ${className}`}
			style={{
				perspective: 1000,
			}}
		>
			<motion.img
				alt={alt}
				animate={{
					rotateX,
					rotateY,
				}}
				className="h-full w-full rounded-full object-cover shadow-xl"
				src={src}
				style={{
					transformStyle: 'preserve-3d',
				}}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 20,
				}}
			/>
		</motion.div>
	)
}

export default InteractiveAvatar
