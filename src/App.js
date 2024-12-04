import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects'; 
import Achie from './components/Achie'; 
import Certi from './components/Certi'; 
import Home from './components/Home'; 

function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path="/Portfolio/" element={<Home />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Achievements" element={<Achie />}/>
      <Route path="/Certifications" element={<Certi />}/>
      </Routes>
    
    </div>
  );
}

export default App;
