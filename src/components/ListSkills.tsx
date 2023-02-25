import React from 'react'
import cls from 'classnames'
import Button from './MiniComponents/Button'
import LogoBtn from './MiniComponents/LogoBtn'
import { linkGitHub, linkLinkedin, linkTwitter } from '../utils/metadata'
import { Tooltip } from 'flowbite-react'
import Link from 'next/link'

const ListSkills = () => {
  const [show, setShow] = React.useState<boolean>(true)
  const [skills, SetSkills] = React.useState<Object>({})
  const onClickhandler = React.useCallback(async () => {
    SetSkills(await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/skills`)
      .then((request) => {
        if (request.status !== 200) {
          alert(`Error! ${request.statusText}`)
        } else {
          return request.json()
        }
      })
      .then((request) => {
        setShow((s) => !s)
        return request.response
      })
      .catch((err) => console.error(err)))
  }, [])

  return (
    <div className="component flex flex-col jusify-center pt-5">
      <div className="glass">
        <div
          className={cls([
            'row',
            'justify-center',
            'items-center',
            'pt-5',
            'pb-5',
            'lineaBottom',
          ])}
        >
          <div className={cls(['row'])}>
            <p
              className={cls([
                'text-4xl',
                'hover:text-6xl',
                'font-extrabold',
                'transition-all',
                'ease-in-out',
                'text-[#4a00e0]',
                'cursor-pointer',
                'duration-1000',
                'p-5',
              ])}
            >
              <Tooltip
                animation="duration-1000"
                content="For friends I am MORIS!"
              >
                {'WEB DEVELOPER MAURIZIO TOLOMEO'}
              </Tooltip>
            </p>
          </div>
        </div>
        <div
          className={cls([
            'row',
            'md:justify-evenly',
            'justify-center',
            'items-center',
          ])}
        >
          {show && <p>click button for skills</p>}
          {!show && <pre>{JSON.stringify(skills, null, 3)}</pre>}
        </div>
        <div
          className={cls([
            'flex',
            'justify-center',
            'items-center',
            'pt-5',
            'pb-5',
            'lineaTop',
          ])}
        >
          <Button
            name="Show My Skills"
            onClick={() => onClickhandler()}
            icon={<LogoBtn />}
          />
        </div>
        <div className={cls(['flex', 'justify-center', 'items-center'])}>
          <Link href={linkGitHub} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-github fa-2x', 'icona'])}></i>
          </Link>
          <Link href={linkTwitter} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-twitter fa-2x', 'icona'])}></i>
          </Link>
          <Link href={linkLinkedin} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-linkedin fa-2x', 'icona'])}></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListSkills
