import React from 'react'
import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'

interface DownloadFileProps {
  pathFile: string
  children?: React.ReactNode
  disabled?: boolean
}

function DownloadFile({ pathFile, children, disabled }: DownloadFileProps) {
  return (
    <>
      {!disabled ? (
        <Link download href={pathFile}>
          <Button className="flex gap-2" color="primary" variant="flat">
            {children ?? 'Download'}
            <ArrowDownTrayIcon className="h-5 w-5" />
          </Button>
        </Link>
      ) : (
        <Button
          isDisabled
          className="flex cursor-not-allowed gap-2"
          color="primary"
          variant="flat"
        >
          {children ?? 'Download'}
          <ArrowDownTrayIcon className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}

export default DownloadFile
