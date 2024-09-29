'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Checkbox } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import { Curriculum } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageCVProps {
  curriculum: Curriculum
  dict: Dictionary
}

function PageCV({ curriculum, dict }: PageCVProps) {
  const [accept, setAccept] = React.useState<boolean>(false)
  const [showDownload, setShowDownload] = React.useState<boolean>(false)
  return (
    <SectionHero title={dict.curriculum.title}>
      <p className="text-base lg:text-xl">{dict.curriculum.experiences}</p>
      <ul className="rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
        {curriculum.experiences.map((exp) => (
          <li
            key={generateUniqueId()}
            className="lg:test-base text-wrap text-sm"
          >
            <p>
              <b>
                <Link href={exp.link ?? ''}>{exp.company}</Link>
              </b>{' '}
              <i>{exp.role}</i> {exp.start} {'->'} {exp.end ?? 'present'}
            </p>
            <p>description: {exp.description}</p>
            <br />
          </li>
        ))}
      </ul>
      <p className="text-base lg:text-xl">{dict.curriculum.education}</p>
      <ul className="cursor-pointer rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
        {curriculum.education.map((exp) => (
          <li
            key={generateUniqueId()}
            className="lg:test-base text-wrap text-sm"
          >
            <p>
              <b>
                <Link href={exp.link ?? ''}>{exp.institution}</Link>
              </b>{' '}
              <i>{exp.role}</i> {exp.start} {'->'} {exp.end ?? 'present'}
            </p>
            <p>description: {exp.description}</p>
            <br />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Button
          className="flex gap-2"
          color="default"
          variant="flat"
          onClick={() => setShowDownload(true)}
        >
          {dict.curriculum.download}
          <ArrowDownTrayIcon className="h-5 w-5" />
        </Button>
        {showDownload && (
          <Modal
            isDismissable={false}
            isOpen={showDownload}
            size="md"
            onClose={() => setShowDownload(false)}
          >
            <ModalContent>
              {() => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {dict.curriculum.download}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex w-full items-center justify-center">
                      <p>{dict.curriculum.terms}</p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <Checkbox
                        defaultSelected={accept}
                        onChange={(e) => setAccept(e.currentTarget.checked)}
                      >
                        {'Accept terms'}
                      </Checkbox>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2">
                      <Button
                        className="flex gap-2"
                        color="default"
                        variant="flat"
                        onClick={() => setShowDownload(false)}
                      >
                        {dict.curriculum.cancel}
                      </Button>
                      <DownloadFile
                        disabled={!accept}
                        pathFile="/cv_maurizio_tolomeo.pdf"
                      >
                        {dict.curriculum.download}
                      </DownloadFile>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
    </SectionHero>
  )
}

export default PageCV
