import React from 'react'
import { HiArrowDownTray } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@heroui/react'

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
          <Button className="flex gap-2" color="primary" variant="flat" onPress={() => {
            const link = document.getElementById('download-link')
            link?.click()
          }}>
            {children ?? 'Download'}
            <HiArrowDownTray className="h-5 w-5" />
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
          <HiArrowDownTray className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}

export default DownloadFile
