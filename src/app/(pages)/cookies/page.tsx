import { Page } from '@/components'
import { getDictionary } from '@/app/dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return <Page dict={dict} page="cookies" />
}
