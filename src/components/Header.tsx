import styles from './Header.module.css'
import logo from '../assets/rocket.svg'
import { PlusCircle } from 'phosphor-react'

export default function Header() {
  const handleClick = () => {
    console.log('Clicou')
  }

  return (
    <header className={styles.header}>
      <div>
        <img src={logo} />
        <strong className={styles.str1}>to</strong>
        <strong className={styles.str2}>do</strong>
      </div>
      <div className={styles.taskbar}>
        <input
          type="text"
          className={styles.inputNewTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="submit"
          onClick={handleClick}
          title="Criar"
          className={styles.buttonNewTask}
        >
          Criar <PlusCircle weight="bold" size={15.97} />
        </button>
      </div>
    </header>
  )
}
