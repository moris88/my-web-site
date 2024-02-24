import HomePage from '@/components/Home'
import { getInfo } from '@/data/data'

export default async function Home() {
  const info = await getInfo()
  return <HomePage data={info} />
}
