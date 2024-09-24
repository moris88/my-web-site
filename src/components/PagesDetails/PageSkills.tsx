'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Tab, Tabs } from '@nextui-org/tabs'
import { motion } from 'framer-motion'
import { Dictionary } from '@/app/dictionaries'
import { Skill, Skills } from '@/types'
import { generateUniqueId, getLevel } from '@/utils'

interface SkillsProps {
  skills: Skills
  dict: Dictionary
}

export default function PageSkills({ skills, dict }: SkillsProps) {
  const route = useRouter()
  const [skill, setSkill] = React.useState<{
    title: string
    description: string
  } | null>(null)
  const hardSkills = Object.keys(skills).filter((key) => key !== 'soft')
  const softSkills = Object.keys(skills).filter((key) => key === 'soft')
  const language = dict.language === 'Italiano' ? 'it' : 'en'

  const mappa = {
    0: dict.skills.languages,
    1: dict.skills.frontends,
    2: dict.skills.frameworks_frontend,
    3: dict.skills.frameworks_backend,
    4: dict.skills.database,
    5: dict.skills.tools,
    6: dict.skills.platforms,
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
      },
    },
  }

  const handleClickClose = () => {
    setSkill(null)
  }

  const handleClickOpen = (skill: Skill) => {
    setSkill({
      title:
        typeof skill.title === 'string' ? skill.title : skill.title[language],
      description: skill.description?.[language] ?? '',
    })
  }

  return (
    <section className="mb-20 flex flex-col justify-center p-2 md:p-14">
      <h1 className="my-5 text-center text-3xl font-bold">
        {dict.skills.title}
      </h1>
      <div className="block">
        {skill && (
          <Modal
            isDismissable={true}
            isOpen={skill !== null}
            size="md"
            onClose={handleClickClose}
          >
            <ModalContent>
              {() => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {skill.title}
                  </ModalHeader>
                  <ModalBody>
                    <p>{skill.description}</p>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
        <Tabs aria-label="Options" className="flex items-center justify-center">
          <Tab key="hard" title="Hard Skills">
            <motion.div
              animate="show"
              className="w-full"
              initial="hidden"
              variants={container}
            >
              {hardSkills &&
                hardSkills.map((key, index) => (
                  <Accordion key={generateUniqueId()} variant="splitted">
                    <AccordionItem
                      key={generateUniqueId()}
                      aria-label={mappa[index as keyof typeof mappa]}
                      className="my-2 !bg-slate-600"
                      title={mappa[index as keyof typeof mappa]}
                    >
                      <div className="my-4 grid grid-cols-1 gap-4 gap-y-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
                        {skills[key].map((skill: Skill) => {
                          return (
                            <button
                              key={generateUniqueId()}
                              disabled={skill === undefined}
                              onClick={() => {
                                if (skill.link) route.push(skill.link)
                              }}
                            >
                              <Card className="max-w-sm bg-slate-700 transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-slate-500">
                                <CardHeader className="flex gap-3">
                                  <p className="text-lg font-bold tracking-tight text-gray-300 lg:text-2xl">
                                    {skill.title as string}
                                  </p>
                                </CardHeader>
                                <CardBody>
                                  <p className="font-normal text-gray-400">{`${dict.skills.card.level}: ${key === 'soft' ? getLevel(skill.level, 'soft', dict) : getLevel(skill.level, 'hard', dict)}`}</p>
                                </CardBody>
                              </Card>
                            </button>
                          )
                        })}
                      </div>
                    </AccordionItem>
                  </Accordion>
                ))}
            </motion.div>
          </Tab>
          <Tab key="soft" title="Soft Skills">
            <motion.div animate="show" initial="hidden" variants={container}>
              {softSkills &&
                softSkills.map((key) => (
                  <div
                    key={generateUniqueId()}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {skills[key].map((skill: Skill) => {
                      return (
                        <button
                          key={generateUniqueId()}
                          onClick={() => handleClickOpen(skill)}
                        >
                          <Card className="max-w-sm cursor-pointer bg-slate-700 transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-slate-500">
                            <CardHeader className="flex gap-3">
                              <p className="text-lg font-bold tracking-tight text-gray-300 lg:text-2xl">
                                {typeof skill.title === 'string'
                                  ? skill.title
                                  : skill.title[language]}
                              </p>
                            </CardHeader>
                            <CardBody>
                              <p className="font-normal text-gray-400">{`${dict.skills.card.level}: ${key === 'soft' ? getLevel(skill.level, 'soft', dict) : getLevel(skill.level, 'hard', dict)}`}</p>
                            </CardBody>
                          </Card>
                        </button>
                      )
                    })}
                  </div>
                ))}
            </motion.div>
          </Tab>
        </Tabs>
      </div>
    </section>
  )
}
