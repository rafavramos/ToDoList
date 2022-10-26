import styles from './NewTask.module.css'
import { Trash } from 'phosphor-react'

export default function NewTask() {
  return (
    <div className={styles.newTask}>
      <div className={styles.round}>
        <input type="checkbox" name="checkbox" id="checkbox" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        iusto labore velit quis provi cupiditate vero dolor incidunt distinctio
        cumque!
      </p>
      <button>
        <Trash size={16} />
      </button>
    </div>
  )
}
