import { getDefaultStore, useAtom } from 'jotai'
import React from 'react'
import { themeAtom } from '../../store/atoms'
import style from './Home.module.css'
import classnames from 'classnames'
import { myInfo } from '../../utils/metadata'
import { MyCarousel, MyMain } from '../../components'

interface HomeProps { }

const Home = (props: HomeProps) => {
    const defaultStore = getDefaultStore()
    const theme = defaultStore.get(themeAtom)
    return (<MyMain>
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
