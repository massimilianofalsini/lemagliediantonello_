import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Le maglie di Antonello | homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gradient}/>
        <nav className={styles.navbar}>
          <Link href='/'>
            <a>A</a>
          </Link>
          <Link href='/'>
            <a>B</a>
          </Link>
          <Link href='/'>
            <a>C</a>
          </Link>
        </nav>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
