import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

const page404 = () =>{
  console.log("here")
  return <h1>Page not found</h1>
}

function App() {
  

  return (    
    <div className="App">      
      <Router>
        <div>NAVBAR
          <Link to="/">Home</Link> 
          <Link to="/Menu" >Menu</Link> 
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="*" element={page404()} />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
