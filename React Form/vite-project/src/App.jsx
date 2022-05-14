import logo from './logo.svg'
import './App.css'
import Form from './components/Form/form';
import FunctionalForm from './components/Form/functional-form';
import Types from './components/UseEffect/Types';
import LifecycleV1 from './components/Lifecycle Method/LifeCycle';
import Level3 from './components/UseEffect/classLvl3';
import GoogleForm from './components/Form/GoogleForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/router/Home';
import About from './components/router/About';
import Get from './components/router/Get';
function App() {

  return (
    <>
    {/* <Form/> */}
    {/* <FunctionalForm/> */}
{/* <Parent/> */}
    {/* <Types/> */}
    {/* <LifecycleV1/> */}
    {/* <Level3/> */}
    {/* <GoogleForm/> */}
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/get' element={<Get/>}/>
        <Route path='/get/:id' element={<Get/>}/>
        <Route path='/get/:id/:name' element={<Get/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
