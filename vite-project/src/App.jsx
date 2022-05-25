import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Feature/Counter/Index'
import Calculator from './Feature/Calculator/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter/> */}
      <Calculator/>
    </div>
  )
}

export default App
