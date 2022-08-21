import React from 'react';
import styles from "../styles/Info_row.module.css";

type Props = {
  src_img_front: string, 
  alt_img_front: string, 
  description: string, 
  src_img_back: string  
  alt_img_back: string, 
}

const Info_row: React.FC<Props> = (props) => {
  return (
    <div className={styles.info_row}>
      <img className={styles.image} src={props.src_img_front} alt={props.alt_img_front} />
      <h2 className={styles.text}>{props.description}</h2>
      <img className={styles.image} src={props.src_img_back} alt={props.alt_img_back} />
    </div>
  )
}

export default Info_row
