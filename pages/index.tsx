import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Le maglie di Antonello | homepage</title>
        <meta name="description" content="La collezione personale di maglie da calcio di Antonello Falsini" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>

      <Footer />
    </>
  )
}

export default Home
