'use client'

import React, { ChangeEvent, Suspense } from 'react'
import { HiArrowDownTray } from 'react-icons/hi2'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Checkbox, Divider, Skeleton } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components/UI'
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
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setAccept(event.currentTarget.checked)
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
              className="cursor-pointer rounded-lg max-h-96 h-full max-w-32 w-full"
              src={`/${image}.webp`}
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
              <ModalBody className='w-full flex items-center justify-center'>
                <img
                  alt={selectedImage}
                  className="py-8 w-3/4 h-5/6 object-cover object-center"
                  src={`/${selectedImage}.webp`}
                />
              </ModalBody>
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
          onPress={() => setShowDownload(true)}
        >
          {dict.application.download}
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
                  <ModalHeader>{dict.application.download}</ModalHeader>
                  <Divider className="mb-3" />
                  <ModalBody>
                    <div className="flex w-full items-center justify-center">
                      <p>{dict.application.terms}</p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <Checkbox
                        defaultSelected={accept}
                        onChange={handleCheckboxChange}
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
