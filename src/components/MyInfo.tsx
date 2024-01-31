'use client'

import React from 'react'
import Blur from '@/components/Blur'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Contact } from '@/utils/types'
import FormEmail from './FormEmail'
import { Button } from 'flowbite-react'

interface MyInfoProps {
  data?: {
    contact: Contact
  }
}

const MyInfo = ({ data }: MyInfoProps) => {
  const route = useRouter()
  const [showForm, setShowForm] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)
  return (
    <section className="p-5 min-h-screen">
      {data?.contact && (
        <>
          <div className="flex flex-col justify-center items-center rounded-lg p-5 !bg-slate-400">
            <h3 className="border-b border-gray-800 w-full text-center mb-5 select-none">
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
              <b>Birth Date</b>:{' '}
              {moment(data?.contact?.birthDate ?? '').format('DD/MM/YYYY')}
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
              <b>Email</b>: {data?.contact?.email ?? ''}
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
          <div className="flex justify-center items-center mt-5">
            <Button
              color="blue"
              onClick={() => route.push(data?.contact?.curriculum)}
            >
              My C.V. on Linkedin
            </Button>
          </div>
          <div className="flex justify-center items-center mt-5">
            {showForm && (
              <FormEmail
                onSuccess={() => setShowForm(false)}
                onError={(m) => {
                  setError(m)
                  setShowForm(false)
                }}
              />
            )}
            {!showForm && !error && (
              <p className="text-3xl text-center text-white select-none">
                Thank you for your message!!!
              </p>
            )}
            {!showForm && error && (
              <p className="text-3xl text-center text-white select-none">
                {error}
              </p>
            )}
          </div>
        </>
      )}
      <div
        className="badge-base LI-profile-badge"
        data-locale="it_IT"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="maurizio-tolomeo"
        data-version="v1"
      ></div>
    </section>
  )
}

export default MyInfo
