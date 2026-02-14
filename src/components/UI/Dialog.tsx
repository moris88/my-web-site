'use client'

import { X } from 'lucide-react'
import React from 'react'

interface DialogProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
	isDismissible?: boolean
	position?: 'center' | 'top' | 'bottom'
}

export const Dialog = ({
	isOpen,
	onClose,
	title,
	children,
	isDismissible = true,
	position = 'center',
}: DialogProps) => {
	const dialogRef = React.useRef<HTMLDialogElement>(null)

	// Mappatura posizionamento verticale
	const positionClasses = {
		center: 'm-auto',
		top: 'mb-auto mt-10 mx-auto',
		bottom: 'mt-auto mb-10 mx-auto',
	}

	React.useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) return

		if (isOpen) {
			dialog.showModal()
			document.body.style.overflow = 'hidden'
		} else {
			dialog.close()
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	const handleCancel = (e: React.SyntheticEvent) => {
		if (!isDismissible) e.preventDefault()
	}

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (isDismissible && e.target === dialogRef.current) onClose()
	}

	return (
		<dialog
			ref={dialogRef}
			onClose={onClose}
			onCancel={handleCancel}
			onClick={handleBackdropClick}
			onKeyDown={(e) => {
				if (isDismissible && e.key === 'Escape') onClose()
			}}
			className={`inset-0 w-[90vw] max-w-md rounded-xl border-none bg-white p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm md:w-full md:min-w-100 dark:bg-slate-900 ${positionClasses[position]}
      `}
		>
			<div className="flex flex-col p-6">
				{/* HEADER */}
				<div className="mb-4 flex items-center justify-between">
					{title && (
						<h2 className="font-bold text-lg text-slate-900 dark:text-white">
							{title}
						</h2>
					)}

					{isDismissible && (
						<button
							type="button"
							onClick={onClose}
							className="rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
						>
							<X size={18} />
						</button>
					)}
				</div>

				{/* CONTENT */}
				<div className="text-slate-600 text-sm dark:text-slate-300">
					{children}
				</div>
			</div>
		</dialog>
	)
}
