'use client'

import { Dictionary } from '@/app/dictionaries'
import { Portfolio } from '@/types'

interface PageBlogProps {
  portfolio: Portfolio
  dict: Dictionary
}

function PagePortfolio({ portfolio, dict }: PageBlogProps) {
  console.log(portfolio, dict)

  return (
    <section className="my-20 grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:p-14 xl:grid-cols-4">
      <p className="text-center">working in progress...</p>
    </section>
  )
}

export default PagePortfolio
