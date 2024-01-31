import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface MyFooterProps {
  data: {
    links: {
      github: string
      linkedin: string
      telegram: string
    }
  }
}

const MyFooter = ({ data }: MyFooterProps) => {
  const getYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  return (
    <div className="sticky bottom-0 flex justify-between items-center rounded-lg p-5 bg-slate-800 select-none">
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
