import Link from 'next/link'
import React from 'react'
import cls from 'classnames'
import { linkGitHub, linkLinkedin, linkTwitter } from '@/utils/metadata'

interface LinksProps { }

const Links = (props: LinksProps) => {
    return (
        <div className={cls(['flex', 'justify-center', 'items-center'])}>
            <div className="p-2">
                <Link href={linkGitHub} target={'_blank'} rel="noreferrer">
                    <i className={cls(['fa fa-github fa-2x', 'icona'])}></i>
                </Link>
            </div>
            <div className="p-2">
                <Link href={linkTwitter} target={'_blank'} rel="noreferrer">
                    <i className={cls(['fa fa-twitter fa-2x', 'icona'])}></i>
                </Link>
            </div>
            <div className="p-2">
                <Link href={linkLinkedin} target={'_blank'} rel="noreferrer">
                    <i className={cls(['fa fa-linkedin fa-2x', 'icona'])}></i>
                </Link>
            </div>
        </div>
    )
}

export default Links
