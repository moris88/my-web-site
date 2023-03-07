// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { lang },
  } = req
  try {
    if (!lang || typeof lang !== 'string') {
      throw new Error('invalid query params')
    }

    if (lang === 'IT' || lang === 'EN') {
      await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/cv_${lang.toLowerCase().trim()}.pdf`
      )
        .then(async (rispostaServer) => {
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
            return res.status(rispostaServer.status).json({
              message: 'ERROR',
              error: 'status error file',
              response: rispostaServer.statusText,
            })
        })
        .catch((error) => {
          return res
            .status(404)
            .json({ message: 'ERROR', error: 'error file', response: error })
        })
    } else {
      return res
        .status(404)
        .json({ message: 'ERROR', error: 'no lang param', response: '' })
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'ERROR', error: 'bad request', response: error })
  }
}
