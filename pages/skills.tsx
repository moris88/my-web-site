import type { NextPage } from 'next'
import MainIndex from '../components/MainIndex'
import Title from '../components/Title/Title'
import cls from 'classnames'
import ListSkills from '../components/ListSkills'

const Home: NextPage = () => {
    return (
        <>
            <Title text={'Jr. Web Developer MAURIZIO TOLOMEO'} />
            <div
                className={cls([
                    'component',
                    'flex',
                    'flex-col',
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
