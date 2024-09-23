import { PagePortfolio } from '@/components'
import { getPortfolio } from '@/lib'
import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const portfolio = await getPortfolio()
  const dict = await getDictionary()
  return (
    <div className="container">
      <PagePortfolio dict={dict} portfolio={portfolio} />
    </div>
  )
}
