import PageSkills from '@/components/PagesDetails/PageSkills'
import { getSkills } from '@/lib/request'

export default async function SkillsPage() {
  const skills = await getSkills()
  return <PageSkills skills={skills} />
}
