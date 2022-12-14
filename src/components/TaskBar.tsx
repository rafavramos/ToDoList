import styles from './TaskBar.module.css'
import {useEffect, useState } from 'react'
import NewTask from './NewTask'
import { ClipboardText } from 'phosphor-react'

export default function TaskBar({ data, taskTodelete}: { data: any, taskTodelete: any}) {
  const [active, setActive] = useState(false)
  const [listChecked, setListChecked] = useState([])
  const [countDone, setCountDone] = useState(0)

  useEffect(() => {
    data.length > 0 ? setActive(true) : false
    setCountDone(listChecked.filter( check => check === false).length)  
  })

  const onDeleteTask = (data: any) => {
    taskTodelete(data)
  }

  const handleCheck = (check: boolean) => {
    if(!check){
      setListChecked([...listChecked, check])
    } else {
      listChecked.pop()
      setListChecked([...listChecked])
    }
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          Tarefas Criadas <span>{data.length}</span>
        </div>
        <div className={styles.doneTasks}>
          Concluídas <span>{`${countDone} de ${data.length}`}</span>
        </div>
      </header>
      <article className={styles.taskBoard}>
        {!active && (
          <div className={styles.taskBoardEmpty}>
            <div className={styles.ClipboardText}>
              <ClipboardText
                size={100}
                color="var(--gray-400)"
                weight="light"
              />
            </div>
            <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.p2}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
        {data.map((task: string) => {
          return (
            <NewTask
              content={task}
              isChecked={handleCheck}
              onDelete={onDeleteTask}
            />
          )
        })}
      </article>
    </>
  )
}
