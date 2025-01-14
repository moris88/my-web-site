'use client'

import * as motion from 'motion/react-client'
import { SectionHero } from '@/components/UI'
import { History, Language } from '@/types'

interface PageHistoryProps {
  language: Language
  history: History
}

function PageHistory({ language, history }: PageHistoryProps) {
  let duration = 2
  return (
    <SectionHero title={history.title[language]}>
      <>
        {history[language].map((item, index) => {
          duration += 0.2
          return (
            <motion.div
              key={index}
              animate={{ opacity: 1, translateY: 0 }}
              className="flex flex-col gap-4 px-0 lg:px-10"
              initial={{ opacity: 0, translateY: -50 }}
              transition={{
                duration: duration,
              }}
            >
              <h3 className="text-lg lg:text-2xl">{item.title}</h3>
              {index !== 0 ? <hr /> : null}
              <p>{item.description}</p>
            </motion.div>
          )
        })}
      </>
    </SectionHero>
  )
}

export default PageHistory
