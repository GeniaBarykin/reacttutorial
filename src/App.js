import logo from './logo.svg';
import './App.css';
import {Task} from "./Task"
import {useState} from "react"
import Axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [catFact, setCatFact] = useState("");
  
  useEffect(() => {
    fetchCatFact()
  },[])

  const fetchCatFact = () =>{
    Axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      setCatFact(res.data.fact)
    })
  }

  return (    
    <div className="App">
      <button onClick={fetchCatFact}>Generate catfact</button>
      <p>{catFact}</p>
    </div>
  );
  
}

export default App;
