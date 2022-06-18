import type { NextPage } from 'next'
import MainIndex from '../components/MainIndex'
import Title from '../components/Title'

const Home: NextPage = () => {
  return (
    <>
      <Title text={'Jr. Web Developer MAURIZIO TOLOMEO'} />
      <MainIndex />
    </>
  )
}

export default Home
