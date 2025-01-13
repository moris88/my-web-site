import { SectionHero } from '@/components/UI'
import { History, Language } from '@/types'

interface PageHistoryProps {
  language: Language
  history: History
}

function PageHistory({ language, history }: PageHistoryProps) {
  return (
    <>
      <SectionHero title={history.title[language]}>
        <>
          {history[language].map((item, index) => (
            <div key={index} className="flex flex-col gap-4 px-0 lg:px-10">
              <h3 className="text-lg lg:text-2xl">{item.title}</h3>
              <hr />
              <p>{item.description}</p>
            </div>
          ))}
        </>
      </SectionHero>
    </>
  )
}

export default PageHistory
