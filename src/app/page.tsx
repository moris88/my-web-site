import { Image, Link } from '@nextui-org/react'
import { Tooltip } from '@nextui-org/tooltip'
import { getInfo } from '@/lib'
import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()
  const info = await getInfo()
  return (
    <div className="container">
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center p-4 md:p-0">
          <Tooltip
            color={'secondary'}
            content={dict.home.message}
            placement="bottom"
          >
            <Image
              alt="avatar"
              className="rounded-full"
              height={150}
              src="/avatar.webp"
              width={150}
            />
          </Tooltip>
        </div>
        <h1 className="text-lg md:text-3xl select-none">{info.name}</h1>
        <h2 className="text-base md:text-2xl select-none">{info.job}</h2>
        <p>---</p>
        <p>{dict.home.title}</p>
        <div className="max-w-full lg:max-w-[50%]">
          <p className="col-span-3 select-none rounded-lg bg-slate-600 p-1 md:p-5 hover:shadow-lg hover:shadow-slate-500">
            {info?.description?.[dict.language === 'Italiano' ? 'it' : 'en'] ??
              ''}
          </p>
        </div>
      </div>
    </div>
  )
}
