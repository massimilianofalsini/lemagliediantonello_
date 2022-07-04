import type { NextPage } from 'next'
import Template from '../components/template'
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Template title='Le maglie di Antonello | homepage' meta_desctiption='La collezione personale di maglie da calcio di Antonello Falsini'>
      <img className={styles.image} src='https://via.placeholder.com/108x192' alt='placeholer' />
    </Template>
  )
}

export default Home
