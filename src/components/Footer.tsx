import { Link } from '@nextui-org/link'
import { Icon } from '@/components/icons'
import { Links } from '@/types/global'
import { listButtons } from '@/utils/utils'

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
      <div className="flex flex-wrap">
        <span className="text-gray-400">©</span>
        <span className="text-gray-400">{getYear()}</span>
        <span className="text-gray-400">{'-Moris™'}</span>
        &nbsp;
        <Link href="/cookies">
          <span className="font-semibold text-gray-400">Cookies policy</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {listButtons.map((button) => (
          <Link key={button.name} href={links[button.name]}>
            <Icon
              className="w-6 text-white transition-all duration-300 ease-in-out hover:text-gray-400"
              labelIcon={button.name}
              pathD={button.pathD}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MyFooter
