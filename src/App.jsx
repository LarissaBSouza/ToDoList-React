import React, {useState} from 'react'
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

  const handTaskAddition = (taskTitle) => {
    const newTasks = [
    ... tasks, 
    {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    },
  ]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
      {/* <button onClick={() => setMessage('Hello Larissa')}> Mudar Mensagem </button>*/}
    </>
  )
}

export default App;