import { Links } from '@/types/global'
import { Link } from "@nextui-org/link"
import Linkedin from './icons/Linkedin'
import Github from './icons/Github'
import Telegram from './icons/Telegram'

interface MyFooterProps {
  links: Links
}

function MyFooter({ links }: MyFooterProps) {
  const getYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  return (
    <div className="fixed bottom-0 z-50 flex w-full select-none items-center justify-between rounded-lg bg-slate-800 p-5">
      <div className="flex">
        <span className="text-gray-400">©</span>
        <span className="text-gray-400">{getYear()}</span>
        <span className="text-gray-400">{'-Moris™'}</span>
      </div>
      <div className="flex items-center gap-4">
        <Link  href={links?.github ?? ''}>
          <Github className="w-6 hover:text-gray-400 text-white transition-all ease-in-out duration-300" />
        </Link>
        <Link href={links?.linkedin ?? ''}>
          <Linkedin className="w-6 hover:text-gray-400 text-white transition-all ease-in-out duration-300" />
        </Link>
        <Link href={links?.telegram ?? ''}>
          <Telegram className="w-6 hover:text-gray-400 text-white transition-all ease-in-out duration-300" />
        </Link>
      </div>
    </div>
  )
}

export default MyFooter
