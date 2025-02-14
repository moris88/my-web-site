'use client'

import { SectionHero } from '@/components/UI'
import { History, Language } from '@/types'
import React from 'react'
import { useScreenDimensions } from '@/hooks'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface PageHistoryProps {
  language: Language
  history: History
}

function PageHistory({ language, history }: PageHistoryProps) {
  const { isMobile } = useScreenDimensions()

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <SectionHero title={history.title[language]}>
      <>
        {history[language].map((item, index) => {
          const isEven = index % 2 === 0
          if (index === 0 || index === history[language].length - 1) {
            return (
              <>
                <h3 className="text-lg lg:text-2xl px-0 lg:px-10">{item.title}</h3>
                <p>{item.description}</p>
              </>
            )
          }
          return (
            <div data-aos="zoom-in-up" className="flex md:flex-row flex-col items-center justify-center gap-4 md:py-10 py-2">
              {isEven ? (<>
                {item?.image && (
                  <img
                    className="rounded-lg drop-shadow-lg max-w-96 min-w-96 object-cover object-center"
                    src={item.image}
                    alt={item.alt}
                  />
                )}
                <div className="flex-col flex gap-4 md:w-1/2 w-full">
                  <h3 className="text-lg lg:text-2xl md:text-start text-center">{item.title}</h3>
                  <hr />
                  <p className="md:text-start text-start">{item.description}</p>
                </div>
                {isMobile && (<p className="mt-5">---</p>)}
              </>) : (
                <>
                  <div className="flex-col flex gap-4 md:w-1/2 w-full">
                    <h3 className="text-lg lg:text-2xl md:text-end text-center">{item.title}</h3>
                    <hr />
                    <p className="md:text-end text-start">{item.description}</p>
                  </div>
                  {item?.image && (
                    <img
                      className="rounded-lg drop-shadow-lg max-w-96 min-w-96 object-cover object-center"
                      src={item.image}
                      alt={item.alt}
                    />
                  )}
                  {isMobile && (<p className="mt-5">---</p>)}
                </>
              )}
            </div>
          )
        })}
      </>
    </SectionHero>
  )
}

export default PageHistory
