'use client'

import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi2'
import { Link } from "@heroui/link"
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@heroui/react"
import moment from 'moment'
import { motion } from 'framer-motion'
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
  const iconMap: Record<string, JSX.Element> = {
    facebook: <FaFacebook className="h-6 w-6" />,
    github: <FaGithub className="h-6 w-6" />,
    linkedin: <FaLinkedin className="h-6 w-6" />,
  }

  const linkMap = links.reduce(
    (acc, link) => {
      acc[link.name.toLowerCase()] = link
      return acc
    },
    {} as Record<string, (typeof links)[0]>,
  )

  return (
    <section className="container">
      {contacts && (
        <>
          <div className="w-full flex flex-col items-center justify-center gap-4 xl:flex-row">
            <motion.div
              animate={{ opacity: 1, translateX: 0 }}
              initial={{ opacity: 0, translateX: -50 }}
              className='w-full lg:max-w-lg max-w-full'
              transition={{
                duration: 2,
              }}
            >
              <Card className="w-full bg-gray-200 p-4 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700">
                <CardHeader className="flex gap-3">
                  <h3 className="w-full select-none text-center">
                    <span className="flex items-center justify-center gap-1">
                      <HiIdentification className="h-5 w-5" />
                      <b>{dict.contacts.social}</b>
                    </span>
                  </h3>
                </CardHeader>
                <Divider className="my-2" />
                <CardBody>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <>
                      {[
                        {
                          label: dict.contacts.firstName,
                          value: contacts?.firstName ?? '',
                        },
                        {
                          label: dict.contacts.lastName,
                          value: contacts?.lastName ?? '',
                        },
                        {
                          label: dict.contacts.birthDate,
                          value: moment(contacts?.birthDate ?? '').format(
                            'DD/MM/YYYY',
                          ),
                        },
                        {
                          label: dict.contacts.nazionality,
                          value: contacts?.nazionality ?? '',
                        },
                        {
                          label: dict.contacts.job,
                          value: contacts?.job ?? '',
                        },
                        {
                          label: dict.contacts.specialization,
                          value: contacts?.specialization ?? '',
                        },
                        {
                          label: dict.contacts.email,
                          value: (
                            <Link href={`mailto:${contacts?.email ?? ''}`}>
                              {contacts?.email ?? ''}
                            </Link>
                          ),
                        },
                        {
                          label: dict.contacts.website,
                          value: (
                            <Link href={contacts?.website || '#'}>
                              {contacts?.website?.replace('https://www.', '') ??
                                ''}
                            </Link>
                          ),
                        },
                      ].map(({ label, value }) => (
                        <React.Fragment key={generateUniqueId()}>
                          <div>
                            <b>{label}</b>
                          </div>
                          <div>
                            <i>{value}</i>
                          </div>
                        </React.Fragment>
                      ))}
                      <Divider className="my-2 sm:col-span-2 col-span-1" />
                      <div className="sm:col-span-2 col-span-1 flex w-full justify-center">
                        <ButtonGroup className="sm:flex flex-row justify-center w-full hidden">
                          {contacts.links.map((button) => {
                            const buttonLower = button.toLowerCase()
                            const storeLink = linkMap[buttonLower]
                            return (
                              <Button
                                key={buttonLower}
                                color="primary"
                                variant="flat"
                                onPress={() => (
                                  storeLink && setStoreLink(storeLink)
                                )}
                              >
                                <span className="flex items-center gap-2">
                                  {iconMap[buttonLower]}
                                  {
                                    dict.contacts.buttons[
                                    button as keyof typeof dict.contacts.buttons
                                    ] as string
                                  }
                                </span>
                              </Button>
                            )
                          })}
                        </ButtonGroup>
                        <div className="sm:hidden w-full flex flex-col gap-2 justify-start">
                          {contacts.links.map((button) => {
                            const buttonLower = button.toLowerCase()
                            const storeLink = linkMap[buttonLower]
                            return (
                              <Button
                                key={buttonLower}
                                color="primary"
                                variant="flat"
                                onPress={() => (
                                  storeLink && setStoreLink(storeLink)
                                )}
                              >
                                <span className="flex items-center gap-2">
                                  {iconMap[buttonLower]}
                                  {
                                    dict.contacts.buttons[
                                    button as keyof typeof dict.contacts.buttons
                                    ] as string
                                  }
                                </span>
                              </Button>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, translateX: 0 }}
              initial={{ opacity: 0, translateX: 50 }}
              transition={{
                duration: 2,
              }}
            >
              <ModalMessage dict={dict} modal={false} />
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonsGroupSocial
              dict={dict}
              setStoreLink={setStoreLink}
              storeLink={storeLink}
            />
          </div>
        </>
      )}
    </section>
  )
}
