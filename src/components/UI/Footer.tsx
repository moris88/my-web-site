import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from '@heroui/link'
import { StoreLink } from '@/types'
import { generateUniqueId } from '@/utils'

interface MyFooterProps {
  links: StoreLink[]
}

function MyFooter({ links }: MyFooterProps) {
  const getYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  const copyRight = `©${getYear()}-Moris™`
  return (
    <footer className="z-50 flex w-full select-none items-center justify-between rounded-lg bg-gray-300 p-5 dark:bg-slate-800">
      <div className="flex flex-wrap text-sm lg:text-base gap-4 gap-y-1">
        <span className="dark:text-gray-400">{copyRight}</span>
        <Link href="/cookies">
          <span className="text-sm font-semibold text-black hover:text-blue-600 dark:text-gray-400 lg:text-base">
            Cookies Policy
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link key={generateUniqueId()} href={link.url}>
            {link.name === 'facebook' && (
              <FaFacebook className="h-6 w-6 text-black dark:text-white" />
            )}
            {link.name === 'github' && (
              <FaGithub className="h-6 w-6 text-black dark:text-white" />
            )}
            {link.name === 'linkedin' && (
              <FaLinkedin className="h-6 w-6 text-black dark:text-white" />
            )}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default MyFooter
