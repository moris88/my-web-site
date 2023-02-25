import type { NextPage } from 'next'
import Title from '../components/Title/Title'
import cls from 'classnames'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
    const ListSkills = dynamic(() => import('../components/ListSkills'), { ssr: false })
    return (
        <>
            <Title text={'My Skills'} />
            <div
                className={cls([
                    'component',
                    'jusify-center',
                    'pt-5',
                ])}
            >
                <ListSkills />
            </div>
        </>
    )
}

export default Home
