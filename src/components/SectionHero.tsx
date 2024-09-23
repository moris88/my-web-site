import React from 'react'

interface SectionHeroProps {
  title: string
  subtitle: string
  content?: React.ReactElement
  children?: React.ReactElement
}

function SectionHero({ title, subtitle, children, content }: SectionHeroProps) {
  return (
    <section className="container flex flex-col gap-10 p-20">
      <h2 className="text-center text-lg lg:text-3xl">{title}</h2>
      <p className="text-center">{subtitle}</p>
      {content ?? children}
    </section>
  )
}

export default SectionHero
