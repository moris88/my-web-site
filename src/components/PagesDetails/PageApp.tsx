'use client'

import { Dictionary } from '@/app/dictionaries'
import { DownloadFile, SectionHero } from '@/components'
import { Image } from '@nextui-org/react'

interface PageCVProps {
  dict: Dictionary
}

function PageApp({ dict }: PageCVProps) {
  return (
    <SectionHero title={dict.application.title}>
      <p className="text-center text-base lg:text-xl">{dict.application.description}</p>
      <div className="flex items-center justify-center p-4 md:p-0 gap-4">
        <Image
          alt="screen_app"
          className="rounded-lg"
          height={150}
          src="/screen_app.webp"
          width={150}
        />
        <Image
          alt="screen_app_2"
          className="rounded-lg"
          height={150}
          src="/screen_app_2.webp"
          width={150}
        />
        <Image
          alt="screen_app_3"
          className="rounded-lg"
          height={150}
          src="/screen_app_3.webp"
          width={150}
        />
      </div>
      <p className="text-center">
        <b>{dict.application.requirements}:</b> {dict.application.compatibility}
      </p>
      <div className="flex items-center justify-center">
        <DownloadFile pathFile="/mauriziotolomeo.apk">
          {dict.application.download}
        </DownloadFile>
      </div>
    </SectionHero>
  )
}

export default PageApp
