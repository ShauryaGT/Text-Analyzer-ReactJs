import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,  
  Route,
  Link,
} from "react-router-dom";
import Alert from './components/Alert';

let alertid = 0;
var timeoutid = null;
function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode == "dark"){
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode set.");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode set.");
    }    
  };  
  const [alert, setAlert] = useState([]);  
  let showAlert = (mes) => {
    setAlert([{
      message : (mes),
      id : alertid
    }, ...alert]);
    alertid++;
    clearTimeout(timeoutid);
    if (document.getElementById("alertbanner") != null){
      document.getElementById("alertbanner").style.display = "block";
    }
    timeoutid = setTimeout(() => {
      document.getElementById("alertbanner").scrollTop = 0;
      document.getElementById("alertbanner").style.display = "none";
    }, 3000);
  };
  return (    
    <BrowserRouter basename='/Text-Analyzer'>
      <div>
        <Navbar title="Text Analytics" changeMode={changeMode} mode={mode}/>     
        {/* <div className="container my-3">
          <About mode={mode}/>
        </div> */}        
        <Alert message={alert}/>
        <Routes> 
          <Route exact path='/' element={< TextForm heading="Enter the Text to analyse below" mode={mode} setalert={showAlert}/>}></Route> 
          <Route exact path='/about' element={< About mode={mode}/>}></Route> 
        </Routes>
        {/* <div className="container my-3">                     
          <TextForm heading="Enter the Text to analyse below" mode={mode}/>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
