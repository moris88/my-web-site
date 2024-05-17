'use client'

import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/tabs'
import { motion } from 'framer-motion'
import { SkillElement, Skills } from '@/types/global'
import { getLevel } from '@/utils/utils'

interface SkillsProps {
  skills: Skills
  dict: any
}

export default function PageSkills({ skills, dict }: SkillsProps) {
  const hardSkills = Object.keys(skills).filter((key) => key !== 'soft')
  const softSkills = Object.keys(skills).filter((key) => key === 'soft')

  const mappa = {
    0: dict.skills.languages,
    1: dict.skills.frontends,
    2: dict.skills.frameworks_frontend,
    3: dict.skills.backends,
    4: dict.skills.frameworks_backend,
    5: dict.skills.tools,
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

  return (
    <section className="mb-20 flex flex-col justify-center p-2 md:p-14">
      <h1 className="my-5 text-center text-3xl font-bold">
        {dict.skills.title}
      </h1>
      <div className="block">
        <Tabs aria-label="Options" className="flex items-center justify-center">
          <Tab key="hard" title="Hard Skills">
            <motion.div
              animate="show"
              className="w-full"
              initial="hidden"
              variants={container}
            >
              {hardSkills &&
                hardSkills.map((key, i) => (
                  <Accordion
                    key={`skill-${skills[key].title}`}
                    className="!p-0"
                    variant="splitted"
                  >
                    <AccordionItem
                      key={i}
                      aria-label={mappa[i as keyof typeof mappa]}
                      title={mappa[i as keyof typeof mappa]}
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {skills[key].values.map((skill: SkillElement) => {
                          return (
                            <Card
                              key={`my-card-${skill.title}`}
                              className="max-w-sm bg-slate-700 shadow-md shadow-slate-500 transition-all duration-100 ease-in-out hover:scale-105"
                            >
                              <CardHeader className="flex gap-3">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-300">
                                  {skill.title}
                                </h5>
                              </CardHeader>
                              <CardBody>
                                <p className="font-normal text-gray-400">{`${dict.skills.card.level}: ${key === 'soft' ? getLevel(skill.level, 'soft', dict) : getLevel(skill.level, 'hard', dict)}`}</p>
                              </CardBody>
                            </Card>
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
                    key={`skill-${skills[key].title}`}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {skills[key].values.map((skill: SkillElement) => {
                      const title = (skill.title as any)[
                        dict.language === 'Italiano' ? 'it' : 'en'
                      ]
                      return (
                        <Card
                          key={`my-card-${skill.title}`}
                          className="max-w-sm bg-slate-700 shadow-md shadow-slate-500 transition-all duration-100 ease-in-out hover:scale-105"
                        >
                          <CardHeader className="flex gap-3">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-300">
                              {title}
                            </h5>
                          </CardHeader>
                          <CardBody>
                            <p className="font-normal text-gray-400">{`${dict.skills.card.level}: ${key === 'soft' ? getLevel(skill.level, 'soft', dict) : getLevel(skill.level, 'hard', dict)}`}</p>
                          </CardBody>
                        </Card>
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
