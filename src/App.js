import logo from './logo.svg';
import './App.css';
import {Planet} from './Planet';
import {useState} from "react"


function App() {
  const [number, setNumber] = useState(0);
  const [text,setText] = useState("");
  const [showText, setShow] = useState(true);
  const increaseNumber = () => {
    setNumber(number+1);
  }

  const changeText = (e) =>{
    setText(e.target.value)
  }

    return (    
      <div className="App">
        {showText && <h1>{number}</h1>}
      <button onClick={increaseNumber}> Click</button>
      <input type= "text" onChange={changeText}></input>
        {showText && <h1>{text}</h1>}
      <button onClick={() => {setShow(!showText); }}> Clear</button>
    </div>);
  
}

export default App;
