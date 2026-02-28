'use client'

import { Download } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
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
						<Download className="h-5 w-5" />
					</Button>
				</Link>
			) : (
				<Button disabled className="flex cursor-not-allowed gap-2">
					{children ?? 'Download'}
					<Download className="h-5 w-5" />
				</Button>
			)}
		</>
	)
}

export default DownloadFile
