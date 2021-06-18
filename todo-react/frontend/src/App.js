import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTaskList = async () => {
      const tasksFromServer = await fetchTaskList()
      setTasks(tasksFromServer)
    }

    getTaskList()
  }, [])

  // fetch tasks from backend
  const fetchTaskList = async () => {
    const response = await fetch('http://localhost:8000/api/todos/')
    const data = await response.json()

    return data
  }

  // Add tasks
  const addTask = async (task) => {
    const response = await fetch('http://localhost:8000/api/todos/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })

    const data = await response.json()

    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/api/todos/${id}/`, { method: 'DELETE' })

    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Complete
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAddTask={ showAddTask } />
      { showAddTask ? <AddTask onAdd={ addTask } /> : '' }
      { tasks.length > 0 ? (
          <TaskList tasks={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/>
        ) : (
          'No tasks'
      )} 
    </div>
  )
}

export default App
