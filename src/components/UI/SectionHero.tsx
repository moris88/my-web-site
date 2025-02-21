import React from 'react'

interface SectionHeroProps {
  title: string
  subtitle?: string
  image?: string
  content?: React.ReactNode
  children?: React.ReactNode
}

function SectionHero({
  title,
  subtitle,
  children,
  content,
  image,
}: SectionHeroProps) {
  return (
    <section className="container flex flex-col gap-10 overflow-x-hidden">
      {image && (
        <img
          alt={'imgae of article'}
          className="h-96 w-full rounded-lg object-cover object-center"
          src={image}
        />
      )}
      <h2 className="text-center text-lg lg:text-3xl">{title}</h2>
      {subtitle && (
        <p>
          <i>{subtitle}</i>
        </p>
      )}
      {content ?? children}
    </section>
  )
}

export default SectionHero
