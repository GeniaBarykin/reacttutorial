import logo from './logo.svg';
import './App.css';
import {Planet} from './Planet';

function App() {
  const age = 18;
  const isGreen = true;
  const names = [
    { name: "Mars", isGas: false}, 
    { name:"Earth", isGas: false}, 
    { name:"Jupiter", isGas: true},
  ];

    return (    
      <div className="App">
      {names.map((planet, key) => {      
         if (planet.isGas) return <Planet name={planet.name}></Planet>
      })}
      {/* {age >= 18 ? <h1> Over age </h1> : <h1> Under age</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>
      {isGreen && <button>Button</button>} */}
    </div>);
  
}

export default App;
