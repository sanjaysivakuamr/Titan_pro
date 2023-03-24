
import './App.css';
import Create from "./components/Create.js";
import Read from "./components/Read.js";
import Update from "./components/Update.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="main">
      
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}/>

      <Route exact path="/Create" element={<Create />}/>
      <Route exact path="/Read" element={<Read />}/>
      <Route exact path="/Update" element={<Update />}/>
      
      <Route exact path="/About" element={<About />}/>
      
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
