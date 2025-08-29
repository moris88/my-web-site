'use client'

import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Dictionary } from '@/app/dictionaries'
import { StoreLink } from '@/types'

interface ButtonsGroupSocialProps {
  storeLink: StoreLink | null
  setStoreLink: React.Dispatch<React.SetStateAction<StoreLink | null>>
  dict: Dictionary
}

function ButtonsGroupSocial({
  dict,
  storeLink,
  setStoreLink,
}: ButtonsGroupSocialProps) {
  const route = useRouter()
  return (
    <>
      {storeLink && (
        <Modal
          isDismissable={false}
          isOpen={storeLink !== null}
          size="md"
          onClose={() => setStoreLink(null)}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {storeLink.label}
                </ModalHeader>
                <ModalBody>
                  {
                    dict.contacts.buttons.storeLink.content[
                      storeLink.label.toLowerCase() as keyof typeof dict.contacts.buttons.storeLink.content
                    ]
                  }
                  <Button
                    className="flex gap-2"
                    color="default"
                    variant="flat"
                    onPress={() => route.push(storeLink.url)}
                  >
                    {dict.contacts.buttons.storeLink.button}
                  </Button>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ButtonsGroupSocial
