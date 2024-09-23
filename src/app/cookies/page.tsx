import { getDictionary } from '../dictionaries'

export default async function SkillsPage() {
  const dict = await getDictionary()
  return (
    <div className="container flex flex-col gap-10 p-20">
      <h2 className="text-center text-lg lg:text-3xl">Cookies</h2>
      <p className="text-center">{dict.cookies}</p>
    </div>
  )
}
