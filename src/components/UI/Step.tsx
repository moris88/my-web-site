'use client'

import React from 'react'
import { Education, Experience } from '@/types'
import { MdOutlineWork, MdSchool } from "react-icons/md"
import { Link } from '@heroui/react'
import { generateUniqueId } from '@/utils'

interface StepProps {
    educations?: Education[]
    experiences?: Experience[]
}

const Step = ({ educations = [], experiences = [] }: StepProps) => {
    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="lg:py-6 lg:pr-16">
                {experiences.map((experience, index) => {
                    return (
                        <div className="flex" key={generateUniqueId()}>
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <MdOutlineWork className="w-6 h-6" />
                                    </div>
                                </div>
                                {index !== experiences.length - 1 && (<div className="w-px h-full bg-gray-300" />)}
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        className={
                                            experience.link ? 'hover:underline' : 'cursor-not-allowed'
                                        }
                                        color="foreground"
                                        href={experience.link ?? ''}
                                    >
                                        {experience.company}
                                    </Link>
                                </p>
                                <p className="text-gray-400 flex gap-2 md:flex-row flex-col">
                                    <span><i>{experience.role}</i></span>
                                    <span>
                                        {experience.start} {'->'} {experience.end ?? 'present'}
                                    </span>
                                </p>
                                <p className="mt-2 text-gray-400">{experience.description}</p>
                            </div>
                        </div>
                    )
                })}
                {educations.map((education, index) => {
                    return (
                        <div className="flex" key={generateUniqueId()}>
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <MdSchool className="w-6 h-6" />
                                    </div>
                                </div>
                                {index !== educations.length - 1 && (<div className="w-px h-full bg-gray-300" />)}
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        className={
                                            education.link ? 'hover:underline' : 'cursor-not-allowed'
                                        }
                                        color="foreground"
                                        href={education.link ?? ''}
                                    >
                                        {education.institution}
                                    </Link>
                                </p>
                                <p className="text-gray-400 flex gap-2 md:flex-row flex-col">
                                    <span><i>{education.role}</i></span>
                                    <span>
                                        {education.start} {'->'} {education.end ?? 'present'}
                                    </span>
                                </p>
                                <p className="mt-2 text-gray-400">{education.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Step