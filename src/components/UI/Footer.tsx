import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from '@nextui-org/link'
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
  return (
    <footer className="fixed bottom-0 z-50 flex w-full select-none items-center justify-between rounded-lg bg-gray-300 p-5 dark:bg-slate-800">
      <div className="flex flex-wrap text-sm lg:text-base">
        <span className="dark:text-gray-400">©</span>
        <span className="dark:text-gray-400">{getYear()}</span>
        <span className="dark:text-gray-400">{'-Moris™'}</span>
        &nbsp;
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
