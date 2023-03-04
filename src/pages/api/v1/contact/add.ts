// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { data },
  } = req
  try {
    if (method !== 'POST') {
      return res.status(400).json({ message: 'ERROR', error: 'invalid method' })
    }
    if (!data) {
      return res.status(400).json({ message: 'ERROR', error: 'invalid body' })
    } else {
      if (!data.email || typeof data.email !== 'string') {
        return res.status(400).json({ message: 'ERROR', error: 'invalid data' })
      }
      if (!data.name || typeof data.name !== 'string') {
        return res.status(400).json({ message: 'ERROR', error: 'invalid data' })
      }
      if (!data.text || typeof data.text !== 'string') {
        return res.status(400).json({ message: 'ERROR', error: 'invalid data' })
      }
      const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'))
      db.data.push(data)
      console.log(data)
      fs.writeFileSync('./data/db.json', JSON.stringify(db), {
        encoding: 'utf8',
        flag: 'w',
      })
      return res
        .status(200)
        .json({ message: 'OK', response: 'Message sent successfully!' })
    }
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: 'ERROR', error: 'internal server error' })
  }
}
