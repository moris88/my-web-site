'use client'

import Link from 'next/link'
import type React from 'react'
import { HiArrowDownTray } from 'react-icons/hi2'
import { Button } from './Button'

interface DownloadFileProps {
	pathFile: string
	children?: React.ReactNode
	disabled?: boolean
}

function DownloadFile({ pathFile, children, disabled }: DownloadFileProps) {
	return (
		<>
			{!disabled ? (
				<Link download href={pathFile} id="download-link">
					<Button
						className="flex gap-2"
						onClick={() => {
							const link = document.getElementById('download-link')
							link?.click()
						}}
					>
						{children ?? 'Download'}
						<HiArrowDownTray className="h-5 w-5" />
					</Button>
				</Link>
			) : (
				<Button disabled className="flex cursor-not-allowed gap-2">
					{children ?? 'Download'}
					<HiArrowDownTray className="h-5 w-5" />
				</Button>
			)}
		</>
	)
}

export default DownloadFile
