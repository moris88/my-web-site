import { Carousel } from 'flowbite-react'
import React from 'react'
import cls from 'classnames'

interface MyCarouselProps {
  className?: string
}

const MyCarousel = ({ className }: MyCarouselProps) => {
  return (
    <div className={cls(['h-56 sm:h-64 xl:h-80 2xl:h-96', className ?? ''])}>
      <Carousel>
        <img src="./carousel1.png" alt="carousel1.png" />
        <img src="./carousel2.png" alt="carousel2.png" />
        <img src="./carousel3.png" alt="carousel3.png" />
        <img src="./carousel4.png" alt="carousel4.png" />
        <img src="./carousel5.png" alt="carousel5.png" />
      </Carousel>
    </div>
  )
}

export default MyCarousel
