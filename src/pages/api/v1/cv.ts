// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { HOST } = process.env

  const {
    query: { lang },
  } = req
  try {
    if (!lang || typeof lang !== 'string') {
      throw new Error('Invalid query params')
    }

    console.log('CIAO')
    if (lang === 'IT' || lang === 'EN') {
      const hostname =
        HOST
          ? HOST
          : 'https://mauriziotolomeo.vercel.app'
      await fetch(`${hostname}/cv_${lang.toLowerCase().trim()}.pdf`)
        .then(async (rispostaServer) => {
          console.log(rispostaServer);
          if (rispostaServer.status === 200) {
            const resBlob = await rispostaServer.blob()
            const resBufferArray = await resBlob.arrayBuffer()
            const resBuffer = Buffer.from(resBufferArray)
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader(
              'Content-Disposition',
              'attachment; filename=cv_maurizio_tolomeo.pdf'
            )
            res.write(resBuffer, 'binary')
            res.end()
          } else
            return res.status(400).json({
              error: 'error file',
              response: rispostaServer.statusText,
            })
        })
        .catch((error) => {
          return res.status(400).json({ error: 'error file', response: error })
        })
    } else {
      return res.status(400).json({ error: 'no lang support', response: '' })
    }
  } catch (error) {
    return res.status(400).json({ error: 'bad request', response: '' })
  }
}
