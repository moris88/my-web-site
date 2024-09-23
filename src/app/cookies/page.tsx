import { ModalMessage, SectionHero } from '@/components'
import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return (
    <SectionHero subtitle={dict.cookies.content} title={dict.cookies.title}>
      <div className="flex items-center justify-center">
        <ModalMessage dict={dict} />
      </div>
    </SectionHero>
  )
}
