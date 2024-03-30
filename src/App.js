import logo from './logo.svg';
import './App.css';
import {User} from './User';

function App() {
  const age = 18;
  const isGreen = true;
  const names = [
    { name: "Jenia", age: 21}, { name:"Sergey", age: 23}, { name:"Casha", age: 25},];

    return (    
      <div className="App">
      {names.map((value, key) => {
        return <User key={key} name={value.name} age={value.age}></User> 
      })}
      {/* {age >= 18 ? <h1> Over age </h1> : <h1> Under age</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>
      {isGreen && <button>Button</button>} */}
    </div>);
  
}

export default App;
