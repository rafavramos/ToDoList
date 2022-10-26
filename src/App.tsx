import styles from './App.module.css'
import './global.css'
import Header from './components/Header'
import TaskBar from './components/TaskBar'

function App() {
  return (
    <div className="App">
      <Header />
      <TaskBar />
    </div>
  )
}

export default App
