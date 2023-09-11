import { getSkills } from '@/utils/server'

export default function Skills() {
  const data = getSkills()
  return (
    <section className="p-5 min-h-screen">
      <div className="flex justify-center items-center">
        <pre>{JSON.stringify(data, null, 5)}</pre>
      </div>
    </section>
  )
}
