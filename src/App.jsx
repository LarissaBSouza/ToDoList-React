import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tasks from './components/Tasks'

import './App.css'
import AddTask from './components/AddTask'

const App = () => {
  //const message = 'Hello World!'

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if (task.id == taskId) return { ...task, completed: !task.completed}

      return task
    })

    setTasks(newTasks)
  }


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
    ... tasks, 
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        
        <AddTask handleTaskAddition = {handleTaskAddition}/>
        <Tasks 
        tasks={tasks} 
        handleTaskClick = {handleTaskClick}
        handleTaskDeletion = {handleTaskDeletion}
        />

      </div>

      {/* <button onClick={() => setMessage('Hello Larissa')}> Mudar Mensagem </button>*/}
    </>
  )
}

export default App;