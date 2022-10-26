import styles from './TaskBar.module.css'
import NewTask from './NewTask'
import { ClipboardText } from 'phosphor-react'

export default function TaskBar() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span>0</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas <span>1 de 2</span>
        </div>
      </header>
      <article className={styles.taskBoard}>
        <div className={styles.taskBoardEmpty}>
          <NewTask />
          <div className={styles.ClipboardText}>
            <ClipboardText size={100} color="var(--gray-400)" weight="light" />
          </div>
          <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.p2}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </article>
    </>
  )
}
