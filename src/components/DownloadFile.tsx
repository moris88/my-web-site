import React from 'react'
import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'

interface DownloadFileProps {
  pathFile: string
  children?: React.ReactNode
}

function DownloadFile({ pathFile, children }: DownloadFileProps) {
  return (
    <Link download href={pathFile}>
      <Button className="flex gap-2" color="default" variant="flat">
        {children ?? 'Download'}
        <ArrowDownTrayIcon className="h-5 w-5" />
      </Button>
    </Link>
  )
}

export default DownloadFile
