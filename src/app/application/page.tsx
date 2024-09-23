import { PageApp } from '@/components'
import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return <PageApp dict={dict} />
}
