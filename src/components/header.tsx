import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return <>
    <div className={styles.gradient}/>
    <nav className={styles.navbar}>
      <Link href='/'>
        <a className={styles.text}>Home</a>
      </Link>
      <Link href='/'>
        <a className={styles.text}>Fiorentina</a>
      </Link>
      <Link href='/'>
        <a className={styles.text}>Avversare</a>
      </Link>
      <Link href='/'>
        <a className={styles.text}>Altro</a>
      </Link>
    </nav> 
  </>
}

export default Header