import { PageSkills } from '@/components'
import { getSkills } from '@/lib'
import { getDictionary } from '../../dictionaries'

export default async function SkillsPage() {
  const skills = await getSkills()
  const dict = await getDictionary()
  return (
    <div className="container">
      <PageSkills dict={dict} skills={skills} />
    </div>
  )
}
