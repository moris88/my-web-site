import { myInfo } from '@/utils/metadata'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const MyMain = dynamic(() => import('../components/MyMain/MyMain'), {
    ssr: false,
  })
  const MyCarousel = dynamic(
    () => import('../components/common/MyCarousel/MyCarousel'),
    { ssr: false }
  )

  return (
    <MyMain>
      <MyCarousel className="mt-2 p-2" />
      <div className="flex flex-col xl:flex-row gap-1 mt-3 bg-white">
        <div className="basis-1/4 flex justify-center items-center lg:pl-20">
          <img
            className="rounded-lg w-32 h-32 mt-3"
            src="./avatar.png"
            alt="moris avatar"
          />
        </div>
        <div className="basis">
          <p className="p-5 xl:pt-20 xl:pb-20 xl:pr-20">{myInfo}</p>
        </div>
      </div>
      <p className="text-center mt-12 italic">
        This web site is work in progress...!!!
      </p>
    </MyMain>
  )
}

export default Home
