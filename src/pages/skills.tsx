import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Skills: NextPage = () => {
  const MyMain = dynamic(() => import('../components/MyMain/MyMain'), {
    ssr: false,
  })

  return (
    <MyMain>
      <p className="text-center pt-10">coming soon...</p>
    </MyMain>
  )
}

export default Skills
