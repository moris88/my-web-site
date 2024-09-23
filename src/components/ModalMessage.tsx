'use client'

import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Dictionary } from '@/app/dictionaries'
import { FormContact } from '@/components'

export interface StoreLink {
  link: string
  label: string
}
interface ModalMessageProps {
  dict: Dictionary
}
function ModalMessage({ dict }: ModalMessageProps) {
  const [show, setShow] = React.useState<{
    form: boolean
    button: boolean
    success: boolean
    error: boolean
  }>({
    form: false,
    button: true,
    success: false,
    error: false,
  })
  const [error, setError] = React.useState<string | null>(null)
  const handleClickClose = () => {
    setShow({
      form: false,
      button: true,
      success: false,
      error: false,
    })
  }
  return (
    <>
      {show.button && (
        <Button
          className="flex gap-2"
          color="default"
          variant="flat"
          onClick={() => {
            setShow({
              form: true,
              button: false,
              success: false,
              error: false,
            })
          }}
        >
          {dict.contacts.buttons.sendEmail}
          <EnvelopeIcon className="h-5 w-5" />
        </Button>
      )}
      {show.form && (
        <Modal
          isDismissable={false}
          isOpen={show.form}
          size="md"
          onClose={handleClickClose}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {dict.contacts.modal.title}
                </ModalHeader>
                <ModalBody>
                  <p>
                    {dict.contacts.modal.content}&nbsp;
                    <Link href="/privacy">
                      <i className="whitespace-nowrap font-semibold text-white">
                        {'Privacy Policy'}
                      </i>
                    </Link>
                  </p>
                  <FormContact
                    dict={dict}
                    onClose={onClose}
                    onError={(m) => {
                      setError(m)
                      setShow({
                        form: false,
                        button: true,
                        success: false,
                        error: true,
                      })
                    }}
                    onSuccess={() => {
                      setShow({
                        form: false,
                        button: false,
                        success: true,
                        error: false,
                      })
                    }}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      {show.success && (
        <p className="select-none text-center text-3xl text-white">
          {dict.contacts.modal.message}
        </p>
      )}
      {show.error && error && (
        <p className="select-none text-center text-3xl text-white">{error}</p>
      )}
    </>
  )
}

export default ModalMessage
