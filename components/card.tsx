import Image from "next/image"
import styles from "../styles/Card.module.css";

const Card: React.FC<{ name:string }> = (props) => {
  return <>
    <div className={styles.card}>
      <img className={styles.image} src='https://via.placeholder.com/108x192' alt={props.name}/>
    </div>
  </>
}

export default Card