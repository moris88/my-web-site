import PageSkills from '@/components/PagesDetails/PageSkills'
import { getSkills } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const skills = await getSkills()
  const dict = await getDictionary()
  return <PageSkills dict={dict} skills={skills} />
}
