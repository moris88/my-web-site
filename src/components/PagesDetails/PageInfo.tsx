'use client'

import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiIdentification, HiMiniUser } from 'react-icons/hi2'
import { Link } from '@nextui-org/link'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from '@nextui-org/react'
import moment from 'moment'
import * as motion from 'motion/react-client'
import { Dictionary } from '@/app/dictionaries'
import { ButtonsGroupSocial, ModalMessage } from '@/components/UI'
import { Contact, StoreLink } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageInfoProps {
  contacts: Contact
  links: StoreLink[]
  dict: Dictionary
}

export default function PageInfo({ contacts, links, dict }: PageInfoProps) {
  const [storeLink, setStoreLink] = React.useState<StoreLink | null>(null)
  return (
    <section className="container">
      {contacts && (
        <>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: -50 }}
              transition={{
                duration: 1,
              }}
            >
              <Card className="w-full bg-gray-200 p-4 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700 md:max-w-xl">
                <CardHeader className="flex gap-3">
                  <h3 className="w-full select-none text-center">
                    <span className="flex items-center justify-center gap-1">
                      <HiMiniUser className="h-5 w-5" />
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
                    <div>
                      <i>{contacts?.firstName ?? ''}</i>
                    </div>
                    <div>
                      <b>{dict.contacts.lastName}</b>
                    </div>
                    <div>
                      <i>{contacts?.lastName ?? ''}</i>
                    </div>
                    <div>
                      <b>{dict.contacts.birthDate}</b>
                    </div>
                    <div>
                      <i>
                        {moment(contacts?.birthDate ?? '').format('DD/MM/YYYY')}
                      </i>
                    </div>
                    <div>
                      <b>{dict.contacts.nazionality}</b>
                    </div>
                    <div>
                      <i>{contacts?.nazionality ?? ''}</i>
                    </div>
                    <div>
                      <b>{dict.contacts.job}</b>
                    </div>
                    <div>
                      <i>{contacts?.job ?? ''}</i>
                    </div>
                    <div>
                      <b>{dict.contacts.email}</b>
                    </div>
                    <div>
                      <Link
                        className="italic"
                        href={`mailto:${contacts?.email ?? ''}`}
                      >
                        {contacts?.email ?? ''}
                      </Link>
                    </div>
                    <div>
                      <b>{dict.contacts.website}</b>
                    </div>
                    <div>
                      <Link className="italic" href={contacts?.website || '#'}>
                        {contacts?.website?.replace('https://www.', '') ?? ''}
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
          <motion.div
            animate={{ opacity: 1 }}
            className="flex flex-col gap-4 px-0 lg:px-10"
            initial={{ opacity: 0 }}
            transition={{
              duration: 2,
            }}
          >
            <h3 className="mt-5 w-full select-none text-center">
              <span className="flex items-center justify-center gap-1">
                <HiIdentification className="h-5 w-5" />
                <b>{dict.contacts.social}</b>
              </span>
            </h3>
            <div className="mt-5 flex w-full justify-center">
              <ButtonGroup>
                {contacts.links.map((button) => (
                  <Button
                    key={generateUniqueId()}
                    color="primary"
                    variant="flat"
                    onClick={() => {
                      const storeLink = links.filter(
                        (link) => link.name === button,
                      )[0]
                      if (storeLink) setStoreLink(storeLink)
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {button.toLowerCase() === 'facebook' && (
                        <FaFacebook className="h-6 w-6" />
                      )}
                      {button.toLowerCase() === 'github' && (
                        <FaGithub className="h-6 w-6" />
                      )}
                      {button.toLowerCase() === 'linkedin' && (
                        <FaLinkedin className="h-6 w-6" />
                      )}
                      {
                        dict.contacts.buttons[
                          button as keyof typeof dict.contacts.buttons
                        ] as string
                      }
                    </span>
                  </Button>
                ))}
              </ButtonGroup>
            </div>
            <div className="flex w-full justify-center">
              <Divider className="my-10 max-w-10" />
            </div>
            <div className="flex items-center justify-center">
              <ButtonsGroupSocial
                dict={dict}
                setStoreLink={setStoreLink}
                storeLink={storeLink}
              />
              <ModalMessage dict={dict} modal={false} />
            </div>
          </motion.div>
        </>
      )}
    </section>
  )
}
