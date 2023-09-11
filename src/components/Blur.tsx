import React from 'react'

interface BlurProps {
  text: string | null
}

const Blur = ({ text }: BlurProps) => {
  return (
    <span className={`${text ? '' : 'blur'} select-none text-white`}>
      {text ?? 'Loremipsumdolorsitamet'}
    </span>
  )
}

export default Blur
