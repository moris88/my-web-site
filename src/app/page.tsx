import { HomePage } from '@/components'
import { getInfo } from '@/lib'
import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()
  const info = await getInfo()
  return <HomePage dict={dict} info={info} />
}
