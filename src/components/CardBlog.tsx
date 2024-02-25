import Image from 'next/image'
import { Article } from '@/types/global'
import { formatDate, truncateString } from '@/utils/utils'

interface CardBlogProps {
  id: number
  image?: string
  title: string
  date: string
  content: string
  subtitle?: string
  link?: string
  onClick?: (article: Article) => void
}

function CardBlog({
  id,
  image,
  title,
  date,
  content,
  subtitle,
  link,
  onClick,
}: CardBlogProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.({
      id,
      image,
      title,
      date,
      content,
      subtitle,
      link,
    })
  }
  return (
    <article
      className="w-full cursor-pointer rounded-lg bg-slate-300 p-4 text-black shadow-lg shadow-slate-300 transition-all duration-100 ease-in-out hover:-translate-y-2"
      onClick={handleOnClick}
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="w-3/12">
          {image ? (
            <Image alt={title} height={150} src={image} width={150} />
          ) : (
            <div className="w-12 rounded-lg border-2 border-white bg-slate-400 shadow-lg">
              <p className="select-none text-center text-2xl">{title[0]}</p>
            </div>
          )}
        </div>
        <div className="w-9/12">
          <h2 className="select-none text-xl font-bold">{title}</h2>
          <p className="select-none border-b text-lg italic">
            {truncateString(content, 50)}
          </p>
          <small className="select-none">{formatDate(date)}</small>
        </div>
      </div>
    </article>
  )
}

export default CardBlog
