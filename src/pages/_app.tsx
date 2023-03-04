import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'font-awesome/css/font-awesome.min.css'
import dynamic from 'next/dynamic'
import { Provider } from 'jotai'
import { myStore } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  const Footer = dynamic(() => import('../components/MyFooter/MyFooter'), { ssr: false })
  const Header = dynamic(() => import('../components/MyHeader/MyHeader'), { ssr: false })

  return (
    <>
      <Head>
        <title>Maurizio Tolomeo</title>
        <meta name="description" content="Web site by Maurizio Tolomeo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={myStore}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
