import React from 'react'
import cls from 'classnames'
import Button from './MiniComponents/Button'
import LogoBtn from './MiniComponents/LogoBtn'
import { Tooltip } from 'flowbite-react'
import Links from './Links/Links'

const ListSkills = () => {
  const [show, setShow] = React.useState<boolean>(true)
  const [skills, SetSkills] = React.useState<Object>({})
  const onClickhandler = React.useCallback(async () => {
    if (show === true)
      SetSkills(await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/skills`)
        .then((request) => {
          if (request.status !== 200) {
            alert(`Error! ${request.statusText}`)
          } else {
            return request.json()
          }
        })
        .then((request) => {
          setShow(false)
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
        {!show && <div
          className={cls([
            'row',
            'md:justify-evenly',
            'justify-center',
            'items-center',
          ])}
        >
          <pre>{JSON.stringify(skills, null, 3)}</pre>
        </div>}
        {show && <div
          className={cls([
            'flex',
            'justify-center',
            'items-center',
            'pt-5',
            'pb-5',
          ])}
        >
          <Tooltip content="Work in progress!" animation="duration-1000">
            <Button
              name="Show My Skills"
              onClick={() => onClickhandler()}
              icon={<LogoBtn />}
            />
          </Tooltip>
        </div>}
        <Links />
      </div>
    </div>
  )
}

export default ListSkills
