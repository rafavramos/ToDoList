import styles from './NewTask.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export default function NewTask({
  content,
  isChecked,
  onDelete
}: {
  content: string
  isChecked: any
  onDelete: any
}) {
  const [checked, setChecked] = useState(false)

  const handleDelete = () => {
    onDelete(content)
  }

  const handleChangeCheck = (event: {target: HTMLInputElement}) => {
    setChecked(event.target.checked)
  }


  const handleCheck = () => {
    isChecked(checked)
  }

  return (
    <div className={styles.newTask}>
      <div className={styles.round}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleChangeCheck}
          onClick={handleCheck}
        />
      </div>
      <p className={checked ? styles.contentDone : styles.content}>{content}</p>
      <button
        onClick={handleDelete}>
        <Trash size={16} />
      </button>
    </div>
  )
}
