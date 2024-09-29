'use client'

import React, { Suspense } from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Checkbox, Skeleton } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import { listImagesApp } from '@/utils'

interface PageCVProps {
  dict: Dictionary
}

function PageApp({ dict }: PageCVProps) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
  const [accept, setAccept] = React.useState<boolean>(false)
  const [showDownload, setShowDownload] = React.useState<boolean>(false)
  const handleClickOpen = (image: string) => {
    setSelectedImage(image)
  }
  const handleClickClose = () => {
    setSelectedImage(null)
  }
  return (
    <SectionHero title={dict.application.title}>
      <p className="text-center text-base lg:text-xl">
        {dict.application.description}
      </p>
      <div className="flex items-center justify-center gap-4 p-4 md:p-0">
        {listImagesApp.map((image) => (
          <Suspense
            key={image}
            fallback={<Skeleton className="h-24 rounded-lg" />}
          >
            <Image
              alt={`${image}`}
              className="cursor-pointer rounded-lg"
              height={150}
              src={`/${image}.webp`}
              width={150}
              onClick={() => handleClickOpen(image)}
            />
          </Suspense>
        ))}
        {selectedImage && (
          <Modal
            isDismissable={true}
            isOpen={selectedImage !== null}
            size="md"
            onClose={handleClickClose}
          >
            <ModalContent>
              {() => (
                <>
                  <ModalBody>
                    <div className="flex w-full items-center justify-center">
                      <Image
                        alt={selectedImage}
                        className="rounded-lg"
                        height={100}
                        src={`/${selectedImage}.webp`}
                        width={300}
                      />
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
      <p className="text-center">
        <b>{dict.application.requirements}:</b> {dict.application.compatibility}
      </p>
      <div className="flex items-center justify-center">
        <Button
          className="flex gap-2"
          color="default"
          variant="flat"
          onClick={() => setShowDownload(true)}
        >
          {dict.application.download}
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
                    {dict.application.download}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex w-full items-center justify-center">
                      <p>{dict.application.terms}</p>
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
                        {dict.application.cancel}
                      </Button>
                      <DownloadFile
                        disabled={!accept}
                        pathFile="/mauriziotolomeo.apk"
                      >
                        {dict.application.download}
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

export default PageApp
