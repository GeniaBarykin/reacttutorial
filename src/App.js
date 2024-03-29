import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
      <SalaryComponent sal={10000} pos="DevOps"/>
    </div>
  );
}

const SalaryComponent = (p) =>{
  return (
    <div> 
      <h1>{p.sal}</h1>
      <h2>{p.pos}</h2>
    </div>
  );
}

export default App;
