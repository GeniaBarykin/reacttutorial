import logo from './logo.svg';
import './App.css';
import {Planet} from './Planet';
import {useState} from "react"


function App() {
  const [number, setAge] = useState(0);
  const [text,setText] = useState("");
  const increaseNumber = () => {
    setAge(number+1);
  }

  const changeText = (e) =>{
    setText(e.target.value)
  }

    return (    
      <div className="App">
        {number}
      <button onClick={increaseNumber}> Click</button>
      <input type= "text" onChange={changeText}></input>
      {text}
    </div>);
  
}

export default App;
