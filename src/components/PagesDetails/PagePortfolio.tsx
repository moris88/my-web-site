'use client'

import { Portfolio } from '@/types/global'

interface PageBlogProps {
  portfolio: Portfolio
  dict: any
}

function PagePortfolio({ portfolio, dict }: PageBlogProps) {
  console.log(portfolio, dict)

  return (
    <section className="my-20 grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:p-14 xl:grid-cols-4">
      working in progress...
    </section>
  )
}

export default PagePortfolio
