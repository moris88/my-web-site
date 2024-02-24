'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CakeIcon } from '@heroicons/react/24/outline'
import { Button, Modal } from 'flowbite-react'
import moment from 'moment'
import Blur from '@/components/Blur'
import { Contact } from '@/utils/types'
import FormEmail from './FormEmail'

interface MyInfoProps {
  data?: {
    contact: Contact
  }
}

function MyInfo({ data }: MyInfoProps) {
  const route = useRouter()
  const [showEmailForm, setShowEmailForm] = React.useState<boolean>(true)
  const [showForm, setShowForm] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  return (
    <section className="p-5">
      {data?.contact && (
        <>
          <div className="flex flex-col items-center justify-center rounded-lg !bg-slate-400 p-5">
            <h3 className="mb-5 w-full select-none border-b border-gray-800 text-center">
              <b>Contact</b>
            </h3>
            <p className="select-none">
              <b>FirstName</b>: {data?.contact?.firstName ?? ''}
            </p>
            <p className="select-none">
              <b>LastName</b>: {data?.contact?.lastName ?? ''}
            </p>
            <p className="select-none">
              <b>Age</b>: {data?.contact?.age ?? ''}
            </p>
            <p className="select-none">
              <span className="flex items-center gap-1">
                <CakeIcon className="h-5 w-5" />
                <b>Birth Date</b>:{' '}
                {moment(data?.contact?.birthDate ?? '').format('DD/MM/YYYY')}
              </span>
            </p>
            <p className="select-none">
              <b>Nazionality</b>: {data?.contact?.nazionality ?? ''}
            </p>
            <p className="select-none">
              <b>Job</b>: {data?.contact?.job ?? ''}
            </p>
            <p className="select-none">
              <b>Company</b>: {data?.contact?.company ?? ''}
            </p>
            <p className="select-none">
              <b>Email</b>:{' '}
              <a href={`mailto:${data?.contact?.email ?? ''}`}>
                {data?.contact?.email ?? ''}
              </a>
            </p>
            <p className="select-none">
              <b>Phone</b>: <Blur text={data?.contact?.phone} />
            </p>
            <p className="select-none">
              <b>Address</b>: <Blur text={data?.contact?.address} />
            </p>
            <p className="select-none">
              <b>Website</b>:{' '}
              <Link href="https://mauriziotolomeo.it">
                {data?.contact?.website ?? ''}
              </Link>
            </p>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Button
              color="blue"
              onClick={() => route.push(data?.contact?.curriculum)}
            >
              C.V. on Linkedin
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center">
            {showEmailForm && (
              <Button
                color="blue"
                onClick={() => {
                  setShowForm(true)
                  setShowEmailForm(false)
                }}
              >
                Send a message
              </Button>
            )}
            {showForm && (
              <Modal
                show={showForm}
                onClose={() => {
                  setShowEmailForm(true)
                  setShowForm(false)
                }}
              >
                <Modal.Header>Send a message</Modal.Header>
                <Modal.Body>
                  <FormEmail
                    onClose={() => {
                      setShowEmailForm(true)
                      setShowForm(false)
                    }}
                    onError={(m) => {
                      setError(m)
                      setSuccess(false)
                      setShowEmailForm(false)
                      setShowForm(false)
                    }}
                    onSuccess={() => {
                      setSuccess(true)
                      setShowEmailForm(false)
                      setShowForm(false)
                    }}
                  />
                </Modal.Body>
              </Modal>
            )}
            {success && !error && (
              <p className="select-none text-center text-3xl text-white">
                Thank you for your message!!!
              </p>
            )}
            {!success && error && (
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

export default MyInfo
