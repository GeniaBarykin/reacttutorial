import logo from './logo.svg';
import './App.css';
import {Task} from "./Task"
import {useState} from "react"



function App() {
  const [list, setList] = useState([]);
  const [newTask, setnewTask] = useState("");
  const handleChange = (e) => {
    setnewTask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: list.length ===0 ? 1 : list[list.length - 1].id + 1,
      name: newTask,
      completed: false,
    }
    const newArray = [...list, task]
    setList(newArray);
  }

  const deleteTask = (id) =>{
    const newArray = list.filter((task) => {
      return task.id !== id;
    })
    setList(newArray)
  }

  const updateTask = (id) => {
    setList(
      list.map((task)=>{
        if (task.id === id){
          return {...task, completed: !task.completed}
        } else {
          return task;
        }
      })
    )
  }
  
  return (    
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        {list.map((task, i) => {
          return <Task name={task.name} id = {task.id} completed={task.completed} deleteTask={deleteTask} updateTask={updateTask}/>
        })}
      </div>
    </div>
  );
  
}

export default App;
