import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Eat a carrot',
      day: '1/1/3000',
      reminder: false,
    },
    {
      id: 2,
      text: 'Selling carrots',
      day: '1/2/3000',
      reminder: false,
    },
    {
      id: 3,
      text: 'Buying carrots',
      day: 'Always',
      reminder: true,
    }]
  );

    // ADD TASK FUNCTION

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

    // DELETE TASK FUNCTION

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // TOGGLE REMINDER FUNCTION

    const toggleRemidner = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemidner}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
