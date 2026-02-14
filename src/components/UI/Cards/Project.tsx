'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardImage, Chip } from '@/components'
import type { Project } from '@/types'

interface CardProjectProps {
  project: Project
  onClick?: (_project: Project) => void
}

function CardProject({ project, onClick }: CardProjectProps) {
  const { title, image, tags, description } = project
  const handleOnClick = () => {
    onClick?.(project)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full w-full cursor-pointer"
      onClick={handleOnClick}
    >
      <Card>
        <CardImage src={image?.src ?? ''} alt={image?.alt ?? ''} />
        <CardContent title={title}>
          <p className="line-clamp-4 text-gray-500 text-sm dark:text-gray-400">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {tags.length <= 3 &&
            tags.map((tag) => (
              <Chip key={`tag-${tag}`} size="sm">
                {tag}
              </Chip>
            ))}
          {tags.length > 3 && (
            <>
              {tags.slice(0, 3).map((tag) => (
                <Chip key={`tag-${tag}`} size="sm">
                  {tag}
                </Chip>
              ))}
              <Chip size="sm">{`+${tags.length - 3}`}</Chip>
            </>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default CardProject
