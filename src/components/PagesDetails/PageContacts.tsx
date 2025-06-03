'use client'

import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi2'
import { Button, ButtonGroup, Link } from '@heroui/react'
import { motion } from 'framer-motion'
import { Dictionary } from '@/app/dictionaries'
import { ButtonsGroupSocial, ModalMessage } from '@/components/UI'
import { Contact, StoreLink } from '@/types'

interface PageContactsProps {
  contacts: Contact
  links: StoreLink[]
  dict: Dictionary
}

export default function PageContacts({
  contacts,
  links,
  dict,
}: Readonly<PageContactsProps>) {
  const [storeLink, setStoreLink] = React.useState<StoreLink | null>(null)
  const iconMap: Record<string, React.ReactNode> = {
    facebook: <FaFacebook className="h-6 w-6" />,
    github: <FaGithub className="h-6 w-6" />,
    linkedin: <FaLinkedin className="h-6 w-6" />,
  }

  const linkMap = links.reduce(
    (acc, link) => {
      acc[link.name.toLowerCase()] = link
      return acc
    },
    {} as Record<string, (typeof links)[0]>
  )

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h3 className="w-full select-none py-4 text-center text-xl">
        <span className="flex items-center justify-center gap-1">
          <HiIdentification className="h-5 w-5" />
          <b>{dict.contacts.social}</b>
        </span>
      </h3>
      {contacts && (
        <div className="my-4 flex w-full flex-col items-center justify-around gap-4 bg-gray-200 dark:bg-slate-700 md:my-4 md:flex-row">
          <motion.div
            animate={{ opacity: 1, translateY: 0 }}
            className="flex w-full flex-col items-center justify-center gap-4 p-14 md:w-1/2"
            initial={{ opacity: 0, translateY: -50 }}
            transition={{
              duration: 2,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                alt="avatar"
                className="block h-24 w-24 rounded-full drop-shadow-xl md:h-[200px] md:w-[200px]"
                src="/avatar_2.webp"
              />
              <div>
                <p className="text-center text-xl font-bold">
                  {contacts?.firstName + ' ' + contacts?.lastName}
                </p>
                <p className="text-center text-lg font-semibold italic text-gray-400">
                  {contacts?.job ?? ''}
                </p>
                <p className="text-center text-lg font-semibold italic text-gray-400">
                  {contacts?.specialization ?? ''}
                </p>
              </div>
              <Link
                showAnchorIcon
                className="italic hover:text-primary"
                href={`mailto:${contacts?.email ?? ''}`}
              >
                {contacts?.email ?? ''}
              </Link>
            </div>
            <div className="flex w-full justify-center">
              <ButtonGroup className="hidden w-full flex-row justify-center lg:flex">
                {contacts.links.map((button) => {
                  const buttonLower = button.toLowerCase()
                  const storeLink = linkMap[buttonLower]
                  return (
                    <Button
                      key={buttonLower}
                      color="primary"
                      variant="flat"
                      onPress={() => storeLink && setStoreLink(storeLink)}
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
              <div className="flex w-full flex-col justify-start gap-2 lg:hidden">
                {contacts.links.map((button) => {
                  const buttonLower = button.toLowerCase()
                  const storeLink = linkMap[buttonLower]
                  return (
                    <Button
                      key={buttonLower}
                      color="primary"
                      variant="flat"
                      onPress={() => storeLink && setStoreLink(storeLink)}
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
          </motion.div>
          <motion.div
            animate={{ opacity: 1, translateY: 0 }}
            className="w-full p-14 md:w-1/2"
            initial={{ opacity: 0, translateY: 50 }}
            transition={{
              duration: 2,
            }}
          >
            <ModalMessage
              className="flex flex-col items-center justify-center gap-2"
              dict={dict}
              modal={false}
            />
          </motion.div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <ButtonsGroupSocial
          dict={dict}
          setStoreLink={setStoreLink}
          storeLink={storeLink}
        />
      </div>
    </div>
  )
}
