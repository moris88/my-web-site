import type { NextPage } from 'next'
import Title from '../components/Title/Title'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const MainIndex = dynamic(() => import('../components/MainIndex'), { ssr: false })
  return (
    <>
      <Title text={'My Description'} />
      <MainIndex />
    </>
  )
}

export default Home
