import styles from './App.module.css'
import './global.css'
import Header from './components/Header'
import TaskBar from './components/TaskBar'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  const handlelistData = (task: string) => {
    let list = [...tasks, task]
    setTasks(list)
  }

  const deleteTask = (taskTodelete: string) => {
    const newTaskListWithoutDeletedOne = tasks.filter(task => {
      return task !== taskTodelete
    })
    setTasks(newTaskListWithoutDeletedOne)
  }

  return (
    <div className="App">
      <Header activeTaskBoard={handlelistData} />
      <TaskBar data={tasks} taskTodelete={deleteTask}/>
    </div>
  )
}

export default App
