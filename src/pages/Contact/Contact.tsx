import React from 'react'
import { MyForm, MyMain } from '../../components'
import { linkLinkedin, myEmail } from '../../utils/metadata'
import style from './Contact.module.css'
import classnames from 'classnames'

interface ContactProps { }

const Contact = (props: ContactProps) => {
    return (
        <MyMain>
            <h1 className="text-2xl font-bold text-center pb-4">My Contacts</h1>
            <div className='flex flex-row  p-10 bg-slate-50 rounded-lg m-5'>
                <div className="">
                    <p>
                        <b>First Name:</b> <i>Maurizio</i>
                    </p>
                    <p>
                        <b>Last Name:</b> <i>Tolomeo</i>
                    </p>
                    <p>
                        <b>Email:</b>{' '}
                        <i>
                            <a href={`mailto:${myEmail}`}>{myEmail}</a>
                        </i>
                    </p>
                    <p>---</p>
                    <p>You can find my curriculum vitae on my <a className={style.icon} href={linkLinkedin}>LinkedIn profile</a></p>
                </div>
            </div>
            <MyForm />
        </MyMain>
    )
}

export default Contact
