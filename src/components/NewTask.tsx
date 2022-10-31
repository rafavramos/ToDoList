import styles from './NewTask.module.css'
import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function NewTask({ content }: { content: string }) {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className={styles.newTask}>
      <div className={styles.round}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleCheck}
        />
      </div>
      <p className={checked ? styles.contentDone : styles.content}>{content}</p>
      <button>
        <Trash size={16} />
      </button>
    </div>
  )
}
