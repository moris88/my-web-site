import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { myEmail } from '../utils/metadata'

const Contact: NextPage = () => {
  const MyMain = dynamic(() => import('../components/MyMain/MyMain'), {
    ssr: false,
  })
  const MyForm = dynamic(() => import('../components/common/MyForm/MyForm'), {
    ssr: false,
  })

  return (
    <MyMain>
      <div className="p-10 bg-slate-50 rounded-lg m-5">
        <h1 className="text-2xl font-bold text-center pb-4">My Contacts</h1>
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
        <p>...</p>
      </div>
      <MyForm />
    </MyMain>
  )
}

export default Contact
