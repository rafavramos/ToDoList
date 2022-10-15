import styles from './Header.module.css'
import logo from '../assets/rocket.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} />
        <strong className={styles.str1}>to</strong>
        <strong className={styles.str2}>do</strong>
      </div>
    </header>
  )
}
