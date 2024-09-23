'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Dictionary } from '@/app/dictionaries'

interface ButtonsGroupSocialProps {
  storeLink: { link: string; label: string } | null
  setStoreLink: React.Dispatch<
    React.SetStateAction<{ link: string; label: string } | null>
  >
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
                    onClick={() => route.push(storeLink.link)}
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
