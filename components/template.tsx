import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Template.module.css'

const Template: React.FC<{ title: string, meta_desctiption: string, children: ReactNode }> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.meta_desctiption} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        {props.children}
      </main>

      <Footer />
    </>
  )
}

export default Template
