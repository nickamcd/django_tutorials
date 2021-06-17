import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "title": "Task one",
      "description": "description one",
      "completed": false
    },
    {
      "id": 2,
      "title": "task two updated",
      "description": "description two updated",
      "completed": false
    },
    {
      "id": 3,
      "title": "task three",
      "description": "description three",
      "completed": false
    },
    {
      "id": 4,
      "title": "task four",
      "description": "description four",
      "completed": false
    }
  ])

  // Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
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
  );
}

export default App;
