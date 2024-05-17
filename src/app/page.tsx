import PageHome from '@/components/PagesDetails/PageHome'
import { getInfo } from '@/lib/request'
import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()
  const info = await getInfo()
  return <PageHome info={info} dict={dict} />
}
