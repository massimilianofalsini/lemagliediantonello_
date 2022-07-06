import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Template.module.css'

type Props = {
  title: string, 
  meta_desctiption: string, 
  headline: string,
  children: ReactNode
}

const Template: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.meta_desctiption} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h2 className={styles.text}>{props.headline}</h2>
        {props.children}
      </main>

      <Footer />
    </>
  )
}

export default Template
