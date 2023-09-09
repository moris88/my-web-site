'use client'

import Blur from '@/components/Blur'
import { Button } from '@/components/Button'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFetch } from 'usehooks-ts'

interface Contact {
  firstName: string
  lastName: string
  age: number
  birthDate: string
  nazionality: string
  job: string
  company: string
  email: string
  phone: string
  address: string
  website: string
  curriculum: string
}

export default function Contact() {
  const route = useRouter()
  const { data, error } = useFetch<{ contact: Contact }>('./api/contact')
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <section className="p-5 min-h-screen">
      {data?.contact && (
        <>
          <div className="flex flex-col justify-center items-center rounded-lg p-5 bg-slate-400">
            <h3 className="border-b border-gray-800 w-full text-center mb-5">
              <b>Contact</b>
            </h3>
            <p>
              <b>FirstName</b>: {data?.contact?.firstName ?? ''}
            </p>
            <p>
              <b>LastName</b>: {data?.contact?.lastName ?? ''}
            </p>
            <p>
              <b>Age</b>: {data?.contact?.age ?? ''}
            </p>
            <p>
              <b>Birth Date</b>:{' '}
              {moment(data?.contact?.birthDate ?? '').format('DD/MM/YYYY')}
            </p>
            <p>
              <b>Nazionality</b>: {data?.contact?.nazionality ?? ''}
            </p>
            <p>
              <b>Job</b>: {data?.contact?.job ?? ''}
            </p>
            <p>
              <b>Company</b>: {data?.contact?.company ?? ''}
            </p>
            <p>
              <b>Email</b>: {data?.contact?.email ?? ''}
            </p>
            <p>
              <b>Phone</b>: <Blur text={data?.contact?.phone} />
            </p>
            <p>
              <b>Address</b>: <Blur text={data?.contact?.address} />
            </p>
            <p>
              <b>Website</b>:{' '}
              <Link href="https://mauriziotolomeo.it">
                {data?.contact?.website ?? ''}
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button
              title="Curriculum Vitae"
              onClick={() => route.push(data?.contact?.curriculum)}
            />
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
