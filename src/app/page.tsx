import { PageHome } from '@/components/PagesDetails'
import { getInfo } from '@/lib/request'
import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()
  const info = await getInfo()
  return <PageHome dict={dict} info={info} />
}
