import styles from './NewTask.module.css'
import { Trash } from 'phosphor-react'

export default function NewTask({ content }: { content: string }) {
  return (
    <div className={styles.newTask}>
      <div className={styles.round}>
        <input type="checkbox" name="checkbox" id="checkbox" />
      </div>
      <p>{content}</p>
      <button>
        <Trash size={16} />
      </button>
    </div>
  )
}
