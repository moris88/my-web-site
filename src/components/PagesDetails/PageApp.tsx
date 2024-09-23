'use client'

import React from 'react'
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal'
import { Image } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import { listImagesApp } from '@/utils'

interface PageCVProps {
  dict: Dictionary
}

function PageApp({ dict }: PageCVProps) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)
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
          <Image
            key={image}
            alt={`${image}`}
            className="cursor-pointer rounded-lg"
            height={150}
            src={`/${image}.webp`}
            width={150}
            onClick={() => handleClickOpen(image)}
          />
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
      <p className="text-center">{dict.application.privacy}</p>
      <div className="flex items-center justify-center">
        <DownloadFile pathFile="/mauriziotolomeo.apk">
          {dict.application.download}
        </DownloadFile>
      </div>
    </SectionHero>
  )
}

export default PageApp
