import type { NextPage } from 'next'
import Title from '../components/Title/Title'
import cls from 'classnames'
import dynamic from 'next/dynamic'
import Contacts from '@/components/Contacts'

const Home: NextPage = () => {
    const ListSkills = dynamic(() => import('../components/ListSkills'), { ssr: false })
    return (
        <>
            <Title text={'My Contacts'} />
            <div
                className={cls([
                    'component',
                    'jusify-center',
                    'pt-5',
                ])}
            >
                <Contacts />
            </div>
        </>
    )
}

export default Home