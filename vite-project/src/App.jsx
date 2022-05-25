import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Feature/Counter/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter/>
    </div>
  )
}

export default App