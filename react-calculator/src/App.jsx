import logo from './logo.svg'
import './App.css'
import Calculator from './component/calculator';
import {useState, useEffect} from 'react';
import UseState from './component/useState/useState';
import Ue1 from './component/useEffect/ue1';
import UseMemo from './component/UseMemo';
import Reverse from './component/Reverse';

function App() {
  // const [mouseTimer, setMouseTimer] = useState()
  // const[myVar,setMyVar] = useState(false)

  // function mouseDown(e) { 
   
  // }

  // function myFunction(){ }

  // function removeTimer(){
    
    
  // }

  // useEffect(()=>{
  //   document.addEventListener("keydown", (e)=> {
  //     if(e.code == "Space") {
  //       console.log("space pressed")
  //       setMouseTimer(window.setTimeout(setMyVar(true),500))
  
  //     }
  //   })
  //   document.body.addEventListener("keyup", (e)=> {
  //     if(e.code == "Space"){
  //       if(myVar) console.log("a");  
  //   if (mouseTimer) window.clearTimeout(mouseTimer);
  //   setMyVar(false)
  //     }
  //   });  
  // },[])

  return (
    <>
      {/* <UseState/> */}
      {/* <Ue1/> */}
      {/* <UseMemo/> */}
      <Reverse/>
    </>
  )
}

export default App
