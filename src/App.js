
import './App.css';
import About from './components/About';
import Inputbox from './components/Inputbox';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert,Setalert]=useState(null);
  const [mode,Setmode]=useState("light");
  const togllemode=()=>{

  } 
   const showalert=(message ,type)=>
   {
     Setalert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
     Setalert(null);},1500);
   }
  return (
    <>
    <Navbar />
    <Alert alert={alert} />

<div className="container" ><Inputbox heading="Enter Text below" showalert={showalert} /></div>
{/* <div className="container"><About/> */}
{/* </div> */}

</>
  );
}

export default App;
