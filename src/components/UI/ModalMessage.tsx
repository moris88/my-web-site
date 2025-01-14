'use client'

import React from 'react'
import { HiEnvelope } from 'react-icons/hi2'
import { RiMailSendFill } from 'react-icons/ri'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Divider } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { FormContact } from '@/components'

interface ModalMessageProps {
  dict: Dictionary
  modal?: boolean
}
function ModalMessage({ dict, modal = true }: ModalMessageProps) {
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
  React.useEffect(() => {
    if (show.success) {
      setTimeout(() => {
        setShow({
          form: false,
          button: true,
          success: false,
          error: false,
        })
      }, 5000)
    }
  }, [show.success])
  const handleClickClose = () => {
    setShow({
      form: false,
      button: true,
      success: false,
      error: false,
    })
  }
  if (!modal) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-gray-200 p-4 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700 md:max-w-xl">
        <h3 className="mt-5 w-full select-none text-center">
          <span className="flex items-center justify-center gap-1">
            <RiMailSendFill className="h-5 w-5" />
            <b>{dict.contacts.modal.title}</b>
          </span>
        </h3>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>
            {dict.contacts.modal.content}&nbsp;
            <Link href="/privacy">
              <i className="whitespace-nowrap font-semibold dark:text-white">
                {'Privacy Policy'}
              </i>
            </Link>
          </p>
          <FormContact
            dict={dict}
            onError={(m) => {
              setError(m)
              setShow({
                form: false,
                button: false,
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
        </div>
      </div>
    )
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
          <HiEnvelope className="h-5 w-5" />
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
                <ModalHeader>{dict.contacts.modal.title}</ModalHeader>
                <Divider className="mb-3" />
                <ModalBody>
                  <p>
                    {dict.contacts.modal.content}&nbsp;
                    <Link href="/privacy">
                      <i className="whitespace-nowrap font-semibold dark:text-white">
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
                        button: false,
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
        <p className="select-none text-center text-3xl text-green-600">
          {dict.contacts.modal.message}
        </p>
      )}
      {show.error && error && (
        <p className="select-none text-center text-3xl text-red-500">
          Error: {error}
        </p>
      )}
    </>
  )
}

export default ModalMessage
