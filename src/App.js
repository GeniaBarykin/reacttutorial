import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { useState, createContext } from 'react';
import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const page404 = () =>{
  return <h1>Page not found</h1>
}

export const AppContext = createContext();

function App() {
const client = new QueryClient();
  const [username, setUsername] = useState("Evgeny")
  return (    
    <div className="App">  
      <QueryClientProvider client={client}> 
        <AppContext.Provider value={{username, setUsername}}>   
          <Router>
            <Navbar />
            <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/menu" element={<Menu />}/>
              <Route path="*" element={page404()} />
            </Routes>
          </Router>
        </AppContext.Provider> 
      </QueryClientProvider> 
    </div>
  );
  
}

export default App;
