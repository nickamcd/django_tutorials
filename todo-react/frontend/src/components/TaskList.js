import Task from './Task'

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={ task.id } task={ task } onDelete={ onDelete } onToggle={ onToggle }/>
      })}
    </>
  )
}

export default TaskList
