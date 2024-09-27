import { Page } from '@/components'
import { getDictionary } from '../../dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return <Page dict={dict} page="privacy" />
}
