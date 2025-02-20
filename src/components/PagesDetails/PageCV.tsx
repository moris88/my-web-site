'use client'

import React from 'react'
import { HiArrowDownTray } from 'react-icons/hi2'
import { Modal, ModalBody, ModalContent, ModalHeader, Checkbox, Divider, Link } from '@heroui/react'
import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
        }}
      >
        <p className="text-base lg:text-xl">{dict.curriculum.experiences}</p>
      </motion.div>
      <motion.div
        animate={{ translateX: 0 }}
        initial={{ translateX: -1000 }}
        transition={{
          duration: 1,
        }}
      >
        <ul className="rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
          {curriculum.experiences.map((exp) => (
            <li
              key={generateUniqueId()}
              className="lg:test-base text-wrap text-sm"
            >
              <p className="flex gap-2 select-none flex-col md:flex-row">
                <b>
                  <Link
                    isExternal
                    showAnchorIcon
                    color="foreground"
                    className={
                      exp.link ? 'hover:underline' : 'cursor-not-allowed'
                    }
                    href={exp.link ?? ''}
                  >
                    {exp.company}
                  </Link>
                </b>{' '}
                <i>{exp.role}</i>
                <span>{exp.start} {'->'} {exp.end ?? 'present'}</span>
              </p>
              <p className="select-none">description: {exp.description}</p>
              <br />
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
        }}
      >
        <p className="text-base lg:text-xl">{dict.curriculum.education}</p>
      </motion.div>
      <motion.div
        animate={{ translateX: 0 }}
        initial={{ translateX: 1000 }}
        transition={{
          duration: 1,
        }}
      >
        <ul className="rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
          {curriculum.education.map((exp) => (
            <li
              key={generateUniqueId()}
              className="lg:test-base text-wrap text-sm"
            >
              <p className="flex gap-2 select-none flex-col md:flex-row">
                <b>
                  <Link
                    isExternal
                    showAnchorIcon
                    color="foreground"
                    className={
                      exp.link ? 'hover:underline' : 'cursor-not-allowed'
                    }
                    href={exp.link ?? ''}
                  >
                    {exp.institution}
                  </Link>
                </b>{' '}
                <i>{exp.role}</i>
                <span>{exp.start} {'->'} {exp.end ?? 'present'}</span>
              </p>
              <p className="select-none">description: {exp.description}</p>
              <br />
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center">
          <Button
            className="flex gap-2"
            color="default"
            variant="flat"
            onPress={() => setShowDownload(true)}
          >
            {dict.curriculum.download}
            <HiArrowDownTray className="h-5 w-5" />
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
                    <ModalHeader>{dict.curriculum.download}</ModalHeader>
                    <Divider className="mb-3" />
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
                          onPress={() => setShowDownload(false)}
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
      </motion.div>
    </SectionHero>
  )
}

export default PageCV
