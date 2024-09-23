'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
  EnvelopeIcon,
  IdentificationIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { FormContact } from '@/components/Forms'
import { Contact } from '@/types/global'

const listButtons = ['linkedin', 'facebook', 'github']

interface PageInfoProps {
  contacts: Contact
  dict: Dictionary
}

export default function PageInfo({ contacts, dict }: PageInfoProps) {
  const route = useRouter()
  const [storeLink, setStoreLink] = React.useState<{
    link: string
    label: string
  } | null>(null)
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
    <section className="p-0 lg:p-5">
      {contacts && (
        <>
          <div className="flex flex-col items-center justify-center">
            <Card className="w-full bg-slate-700 p-4 md:max-w-xl">
              <CardHeader className="flex gap-3">
                <h3 className="w-full select-none text-center">
                  <span className="flex items-center justify-center gap-1">
                    <UserIcon className="h-5 w-5" />
                    <b>{dict.contacts.title}</b>
                  </span>
                </h3>
              </CardHeader>
              <Divider className="my-2" />
              <CardBody>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <b>{dict.contacts.firstName}</b>
                  </div>
                  <div>{contacts?.firstName ?? ''}</div>
                  <div>
                    <b>{dict.contacts.lastName}</b>
                  </div>
                  <div>{contacts?.lastName ?? ''}</div>
                  <div>
                    <b>{dict.contacts.age}</b>
                  </div>
                  <div>{moment().diff(contacts?.birthDate, 'years') ?? ''}</div>
                  <div>
                    <b>{dict.contacts.birthDate}</b>
                  </div>
                  <div>
                    {moment(contacts?.birthDate ?? '').format('DD/MM/YYYY')}
                  </div>
                  <div>
                    <b>{dict.contacts.nazionality}</b>
                  </div>
                  <div>{contacts?.nazionality ?? ''}</div>
                  <div>
                    <b>{dict.contacts.job}</b>
                  </div>
                  <div>{contacts?.job ?? ''}</div>
                  <div>
                    <b>{dict.contacts.email}</b>
                  </div>
                  <div>
                    <Link href={`mailto:${contacts?.email ?? ''}`}>
                      {contacts?.email ?? ''}
                    </Link>
                  </div>
                  <div>
                    <b>{dict.contacts.website}</b>
                  </div>
                  <div>
                    <Link href={contacts?.website || '#'}>
                      {contacts?.website?.replace('https://www.', '') ?? ''}
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <h3 className="mt-5 w-full select-none text-center">
            <span className="flex items-center justify-center gap-1">
              <IdentificationIcon className="h-5 w-5" />
              <b>{dict.contacts.social}</b>
            </span>
          </h3>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 gap-y-1 md:flex-row">
            {listButtons.map((b) => (
              <Button
                key={b}
                color="primary"
                variant="flat"
                onClick={() =>
                  setStoreLink({
                    link: contacts[b],
                    label: dict.contacts.buttons[
                      b as keyof typeof dict.contacts.buttons
                    ] as string,
                  })
                } //route.push(contacts[b])}
              >
                {
                  dict.contacts.buttons[
                    b as keyof typeof dict.contacts.buttons
                  ] as string
                }
              </Button>
            ))}
          </div>
          <p className="py-5 text-center">---</p>
          <div className="flex items-center justify-center">
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
                        <p>{dict.contacts.modal.content}</p>
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
              <p className="select-none text-center text-3xl text-white">
                {error}
              </p>
            )}
          </div>
        </>
      )}
    </section>
  )
}
