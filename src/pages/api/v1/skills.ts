// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { skills } from '@/utils/metadata'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!skills) throw new Error('skills not found')
    return res.status(200).json({ message: 'OK', response: skills })
  } catch (error) {
    return res.status(500).json({ message: 'ERROR', error: 'bad request', response: error})
  }
}
