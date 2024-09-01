import { PagePortfolio } from '@/components/PagesDetails'
import { getPortfolio } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const portfolio = await getPortfolio()
  const dict = await getDictionary()
  return <PagePortfolio dict={dict} portfolio={portfolio} />
}
