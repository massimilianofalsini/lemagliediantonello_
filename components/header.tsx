import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return <>
    <div className={styles.gradient}/>
    <nav className={styles.navbar}>
      <Link href='/'>
        <a>Homepage</a>
      </Link>
      <Link href='/anni_50'>
        <a>Anni 50</a>
      </Link>
      <Link href='/'>
        <a>C</a>
      </Link>
    </nav> 
  </>
}

export default Header