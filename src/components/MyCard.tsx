import { Card } from 'flowbite-react'
import React from 'react'

interface MyCardProps {
  title: string
  description: string
  link?: string
}

const MyCard = ({ title, description, link }: MyCardProps) => {
  return (
    <Card
      href={link || ''}
      className="max-w-sm hover:scale-105 shadow-md shadow-white transition-all ease-in-out duration-100"
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
