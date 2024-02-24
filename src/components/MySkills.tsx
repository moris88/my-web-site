import { Skills } from '@/utils/types'
import MyCard from './MyCard'

interface SkillsProps {
  data?: {
    skills: Skills
  }
}

const Skills = async ({ data }: SkillsProps) => {
  const skills = data?.skills
  const languages = skills?.languages || []
  const frontends = skills?.frontends || []
  const framewoks_frontend = skills?.frameworks_frontend || []
  const backends = skills?.backends || []
  const framewoks_backend = skills?.frameworks_backend || []
  const tools = skills?.tools || []
  const soft = skills?.soft || []
  return (
    <section className="mb-20 flex flex-col justify-center px-24">
      <h1 className="my-5 text-center text-3xl font-bold">My Skills</h1>
      <h2 className="my-5 text-center text-xl font-bold">Languages</h2>
      <div className="grid grid-cols-4 gap-4">
        {languages.map((language) => {
          return (
            <MyCard
              key={`my-card-${language.title}`}
              description={'Level: ' + language.level}
              link={language.link}
              title={language.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Frontend</h2>
      <div className="grid grid-cols-4 gap-4">
        {frontends.map((frontend) => {
          return (
            <MyCard
              key={`my-card-${frontend.title}`}
              description={'Level: ' + frontend.level}
              link={frontend.link}
              title={frontend.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Framework Frontend</h2>
      <div className="grid grid-cols-4 gap-4">
        {framewoks_frontend.map((framework) => {
          return (
            <MyCard
              key={`my-card-${framework.title}`}
              description={'Level: ' + framework.level}
              link={framework.link}
              title={framework.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Backend</h2>
      <div className="grid grid-cols-4 gap-4">
        {backends.map((backend) => {
          return (
            <MyCard
              key={`my-card-${backend.title}`}
              description={'Level: ' + backend.level}
              link={backend.link}
              title={backend.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Framework Backend</h2>
      <div className="mb-5 grid grid-cols-4 gap-4">
        {framewoks_backend.map((framework) => {
          return (
            <MyCard
              key={`my-card-${framework.title}`}
              description={'Level: ' + framework.level}
              link={framework.link}
              title={framework.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Tools</h2>
      <div className="mb-5 grid grid-cols-4 gap-4">
        {tools.map((tool) => {
          return (
            <MyCard
              key={`my-card-${tool.title}`}
              description={'Level: ' + tool.level}
              link={tool.link}
              title={tool.title}
            />
          )
        })}
      </div>
      <h2 className="my-5 text-center text-xl font-bold">Soft Skills</h2>
      <div className="mb-16 grid grid-cols-4 gap-4">
        {soft.map((s) => {
          return (
            <MyCard
              key={`my-card-${s.title}`}
              description={'Level: ' + s.level}
              link={s.link}
              title={s.title}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Skills
