import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/About';


function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)
  function showAlert(code,message){

    setAlert({
      code:code,
      message:message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  function toggle(){
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("success","dark mode has been enabled")
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("success","light mode has been enabled")

    }
  }
  return (
    <>
     
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} togglemode={toggle}/>
      <Alert alerts={alert}/>
      <Routes>
  
      <Route exact path='/' element={ <div className="container">
    <Form mode={mode} alertfunc={showAlert}/>
    </div>}/>
      <Route exact path='/about' element={ <div className="container">
    <About/>
    </div>}/>


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
