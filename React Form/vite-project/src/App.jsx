import logo from './logo.svg'
import React,{createContext,useState} from 'react'
import Form from './components/Form/form';
import FunctionalForm from './components/Form/functional-form';
import Types from './components/UseEffect/Types';
import LifecycleV1 from './components/Lifecycle Method/LifeCycle';
import Level3 from './components/UseEffect/classLvl3';
import GoogleForm from './components/Form/GoogleForm';
import Parent from './components/Context/Parent';
import UseMemo from './components/UseMemo/UseMemo';
export const GlobalContext = createContext()
function App() {
  const [color, setColor] = useState('red')
  return (
    <>
    {/* <Form/> */}
    {/* <FunctionalForm/> */}
{/* <Parent/> */}
    {/* <Types/> */}
    {/* <LifecycleV1/> */}
    {/* <Level3/> */}
    {/* <GoogleForm/> */}
    {/* <GlobalContext.Provider value={{color:color}}>
      <Parent/>
    </GlobalContext.Provider> */}
    <UseMemo/>
    </>
  )
}

export default App
