'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  CakeIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import moment from 'moment'
import { FormContact } from '@/components/Forms'
import { Contact } from '@/types/global'

const listButtons = ['linkedin', 'facebook', 'github']

interface PageInfoProps {
  contacts: Contact
  dict: any
}

export default function PageInfo({ contacts, dict }: PageInfoProps) {
  const route = useRouter()
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
                    <span className="flex items-center gap-1">
                      <b>{dict.contacts.birthDate}</b>
                      <CakeIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    {moment(contacts?.birthDate ?? '').format('DD/MM/YYYY')}
                  </div>
                  <div>
                    <b>{dict.contacts.nazionality}</b>
                  </div>
                  <div>{contacts?.nazionality ?? ''}</div>
                  <div>
                    <span className="flex items-center gap-1">
                      <b>{dict.contacts.job}</b>
                      <BriefcaseIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>{contacts?.job ?? ''}</div>
                  <div>
                    <span className="flex items-center gap-1">
                      <b>{dict.contacts.company}</b>
                      <BuildingOfficeIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>{contacts?.company ?? ''}</div>
                  <div>
                    <span className="flex items-center gap-1">
                      <b>{dict.contacts.email}</b>
                      <EnvelopeIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    <Link href={`mailto:${contacts?.email ?? ''}`}>
                      {contacts?.email ?? ''}
                    </Link>
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <b>{dict.contacts.website}</b>
                      <GlobeEuropeAfricaIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    <Link href={contacts?.website || '#'}>
                      {contacts?.website ?? ''}
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 gap-y-1 md:flex-row">
            {listButtons.map((b) => (
              <Button
                key={b}
                color="primary"
                variant="flat"
                onClick={() => route.push(contacts[b])}
              >
                {dict.contacts.buttons[b]}
              </Button>
            ))}
          </div>
          <div className="mb-52 mt-5 flex items-center justify-center">
            {show.button && (
              <Button
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
