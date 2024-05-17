'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  CakeIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button, Modal } from 'flowbite-react'
import moment from 'moment'
import FormContact from '@/components/Forms/FormContact'
import { Contact } from '@/types/global'

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
  return (
    <section className="p-5">
      {contacts && (
        <>
          <div className="flex flex-col items-center justify-center rounded-lg !bg-slate-400 p-5">
            <h3 className="mb-5 w-full select-none border-b border-gray-600 pb-2 text-center">
              <span className="flex items-center justify-center gap-1">
                <UserIcon className="h-5 w-5" />
                <b>{dict.contacts.title}</b>
              </span>
            </h3>
            <p className="select-none">
              <b>{dict.contacts.firstName}</b>: {contacts?.firstName ?? ''}
            </p>
            <p className="select-none">
              <b>{dict.contacts.lastName}</b>: {contacts?.lastName ?? ''}
            </p>
            <p className="select-none">
              <b>{dict.contacts.age}</b>:{' '}
              {moment().diff(contacts?.birthDate, 'years') ?? ''}
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <CakeIcon className="h-5 w-5" />
                <b>{dict.contacts.birthDate}</b>:{' '}
                {moment(contacts?.birthDate ?? '').format('DD/MM/YYYY')}
              </span>
            </p>
            <p className="select-none">
              <b>{dict.contacts.nazionality}</b>: {contacts?.nazionality ?? ''}
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <BriefcaseIcon className="h-5 w-5" />
                <b>{dict.contacts.job}</b>: {contacts?.job ?? ''}
              </span>
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <BuildingOfficeIcon className="h-5 w-5" />
                <b>{dict.contacts.company}</b>: {contacts?.company ?? ''}
              </span>
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <EnvelopeIcon className="h-5 w-5" />
                <b>{dict.contacts.email}</b>:{' '}
                <a href={`mailto:${contacts?.email ?? ''}`}>
                  {contacts?.email ?? ''}
                </a>
              </span>
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <GlobeEuropeAfricaIcon className="h-5 w-5" />
                <b>{dict.contacts.website}</b>:{' '}
                <Link href={contacts?.website || '#'}>
                  {contacts?.website ?? ''}
                </Link>
              </span>
            </p>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Button
              color="blue"
              onClick={() => route.push(contacts?.curriculum)}
            >
              {dict.contacts.buttons.downloadCurriculum}
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center">
            {show.button && (
              <Button
                color="blue"
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
                show={show.form}
                onClose={() => {
                  setShow({
                    form: false,
                    button: true,
                    success: false,
                    error: false,
                  })
                }}
              >
                <Modal.Header>{dict.contacts.modal.title}</Modal.Header>
                <Modal.Body>
                  <FormContact
                    onClose={() => {
                      setShow({
                        form: false,
                        button: true,
                        success: false,
                        error: false,
                      })
                    }}
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
                </Modal.Body>
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
