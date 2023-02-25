import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Maurizio Tolomeo</title>
        <meta name="description" content="Web site by Maurizio Tolomeo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
