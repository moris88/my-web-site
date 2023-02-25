// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const skills = {
      frontend: {},
      backend: {},
    }
    return res.status(200).json({ message: 'OK', response: skills })
  } catch (error) {
    return res.status(400).json({ message: 'ERROR', error: 'bad request'})
  }
}
