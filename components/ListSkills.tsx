import React from 'react'
import cls from 'classnames'
import Button from './MiniComponents/Button'
import LogoBtn from './MiniComponents/LogoBtn'
import { linkGitHub, linkLinkedin, linkTwitter } from '../utils/metadata'
import { Accordion } from 'flowbite-react'

const ListSkills = () => {
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
            <h2
              className={cls([
                'text-xl',
                'text-black',
                'font-extrabold',
                'p-5',
              ])}
            >
              My Skills
            </h2>
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
          <Accordion collapseAll={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <p className='text-black'>Programming languages</p>
              </Accordion.Title>
              <Accordion.Content>
                TEST
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className='text-black'>Programming languages</p>
              </Accordion.Title>
              <Accordion.Content>
                TEST
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
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
          <>TEST</>
        </div>
        <div className={cls(['flex', 'justify-center', 'items-center'])}>
          <a href={linkGitHub} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-github fa-2x', 'icona'])}></i>
          </a>
          <a href={linkTwitter} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-twitter fa-2x', 'icona'])}></i>
          </a>
          <a href={linkLinkedin} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-linkedin fa-2x', 'icona'])}></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ListSkills
