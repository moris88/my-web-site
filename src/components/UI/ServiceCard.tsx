'use client'

import { Card, CardBody, CardHeader } from '@heroui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: Readonly<ServiceCardProps>) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className="h-full border-2 border-transparent bg-white/50 shadow-lg backdrop-blur-md hover:border-primary dark:bg-slate-800/50 dark:shadow-slate-900/50">
        <CardHeader className="flex gap-3">
          <div className="flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
            {icon}
          </div>
          <div className="flex flex-col">
            <p className="text-md font-bold">{title}</p>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-500">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default ServiceCard
