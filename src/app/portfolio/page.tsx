import { getPortfolio } from '@/lib/request'
import { getDictionary } from '../dictionaries'
import PagePortfolio from '@/components/PagesDetails/PagePortfolio'

export default async function SkillsPage() {
  const portfolio = await getPortfolio()
  const dict = await getDictionary()
  return <PagePortfolio portfolio={portfolio} dict={dict} />
}
