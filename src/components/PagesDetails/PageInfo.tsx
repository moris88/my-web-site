'use client'

import React from 'react'
import { IdentificationIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { ButtonsGroupSocial, ModalMessage, StoreLink } from '@/components'
import { Contact } from '@/types'
import { generateUniqueId, listButtons } from '@/utils'

interface PageInfoProps {
  contacts: Contact
  dict: Dictionary
}

export default function PageInfo({ contacts, dict }: PageInfoProps) {
  const [storeLink, setStoreLink] = React.useState<StoreLink | null>(null)
  const listTitleButtons = listButtons.map((b) => b.name)
  return (
    <section className="container">
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
            {listTitleButtons.map((button) => (
              <Button
                key={generateUniqueId()}
                color="primary"
                variant="flat"
                onClick={() =>
                  setStoreLink({
                    link: contacts[button],
                    label: dict.contacts.buttons[
                      button as keyof typeof dict.contacts.buttons
                    ] as string,
                  })
                }
              >
                {
                  dict.contacts.buttons[
                    button as keyof typeof dict.contacts.buttons
                  ] as string
                }
              </Button>
            ))}
          </div>
          <p className="py-5 text-center">---</p>
          <div className="flex items-center justify-center">
            <ButtonsGroupSocial
              dict={dict}
              setStoreLink={setStoreLink}
              storeLink={storeLink}
            />
            <ModalMessage dict={dict} />
          </div>
        </>
      )}
    </section>
  )
}
