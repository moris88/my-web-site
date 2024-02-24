import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import 'font-awesome/css/font-awesome.min.css'

interface MyFooterProps {
  data: {
    links: {
      github: string
      linkedin: string
      telegram: string
    }
  }
}

function MyFooter({ data }: MyFooterProps) {
  const getYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  return (
    <div className="fixed bottom-0 flex w-full select-none items-center justify-between rounded-lg bg-slate-800 p-5">
      <div className="flex">
        <span className="text-gray-400">©</span>
        <span className="text-gray-400">{getYear()}</span>
        <span className="text-gray-400">{'-Moris™'}</span>
      </div>
      <div className="">
        <Link className="mr-2" href={data?.links?.github ?? ''}>
          <i
            className={twMerge(
              'fa fa-github fa-2x',
              'hover:text-gray-400 text-white transition-all ease-in-out duration-300'
            )}
          ></i>
        </Link>
        <Link className="mr-2" href={data?.links?.linkedin ?? ''}>
          <i
            className={twMerge(
              'fa fa-linkedin fa-2x',
              'hover:text-gray-400 text-white transition-all ease-in-out duration-300'
            )}
          ></i>
        </Link>
        <Link className="mr-2" href={data?.links?.telegram ?? ''}>
          <i
            className={twMerge(
              'fa fa-telegram fa-2x',
              'hover:text-gray-400 text-white transition-all ease-in-out duration-300'
            )}
          ></i>
        </Link>
      </div>
    </div>
  )
}

export default MyFooter
