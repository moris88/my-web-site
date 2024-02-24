import MySkills from '@/components/MySkills'
import { getSkills } from '@/data/data'

export default async function SkillsPage() {
  const skills = await getSkills().then((data) => {
    return data as unknown as { skills: any }
  })
  return <MySkills data={skills} />
}
