import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import Function from './components/Function'
import Function2 from './components/Function2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Function/>
    <Function2/>
    </div>
  )
}

export default App
