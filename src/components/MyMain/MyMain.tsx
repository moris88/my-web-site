import React from 'react'
import style from './MyMain.module.css'

interface MyMainProps {
    className?: string
    children?: React.ReactNode
}

const MyMain = ({ children, className }: MyMainProps) => {
    return <div className={className ?? style.container}>
        {children}
    </div>
}

export default MyMain
