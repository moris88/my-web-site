import { Card } from 'flowbite-react'

interface MyCardProps {
  title: string
  description: string
  link?: string
}

function MyCard({ title, description, link }: MyCardProps) {
  return (
    <Card
      className="max-w-sm shadow-md shadow-white transition-all duration-100 ease-in-out hover:scale-105"
      href={link || ''}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  )
}

export default MyCard
