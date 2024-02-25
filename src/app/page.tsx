import PageHome from '@/components/PagesDetails/PageHome'
import { getInfo } from '@/lib/request'

export default async function Home() {
  const info = await getInfo()
  return <PageHome info={info} />
}
