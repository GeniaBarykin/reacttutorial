export const Task = (props) => {
    return <div>
    <h1 >{props.name}</h1> <h2>{props.completed ? "completed" : "not completed"}</h2>
    <button onClick={() => props.deleteTask(props.id)}>X</button><button onClick={() => props.updateTask(props.id)}>Update</button>
  </div>
}