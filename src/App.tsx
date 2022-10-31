import styles from './App.module.css'
import './global.css'
import Header from './components/Header'
import TaskBar from './components/TaskBar'
import { useState } from 'react'
import { List } from 'phosphor-react'

function App() {
  const [tasks, setTasks] = useState([])

  const handlelistData = (task: string) => {
    let list = [...tasks, task]
    setTasks(list)
  }

  return (
    <div className="App">
      <Header activeTaskBoard={handlelistData} />
      <TaskBar data={tasks} />
    </div>
  )
}

export default App
