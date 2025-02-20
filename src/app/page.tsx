import { HomePage } from '@/components'
import { getInfo } from '@/lib'
import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()
  const info = await getInfo()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  return <HomePage dict={dict} info={info} language={language} />
}
