import type { NextPage } from 'next'
import Info_row from '../components/info_row';
import Template from '../components/template'
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Template title='Le maglie di Antonello | homepage' meta_desctiption='La collezione personale di maglie da calcio di Antonello Falsini'>
      <Info_row 
        src_img_front='https://via.placeholder.com/108x192'
        alt_img_front='palceholder'
        description='description'
        src_img_back='https://via.placeholder.com/108x192'
        alt_img_back='palceholder'
      />
    </Template>
  )
}

export default Home
