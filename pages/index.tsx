import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maurizio Tolomeo</title>
        <meta name="description" content="Web site by Maurizio Tolomeo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline bg-red-700">
          Hello world!
        </h1>
        <p>main</p>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Home
