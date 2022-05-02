import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="container">
       <div className="inputBox">
         <input type="search" name="" id="" />
       </div>
       <img src={logo} alt="logo" className="logo" />
       <div className="weatherBox">BLOSH TECH</div>
     </div>
    </div>
  )
}

export default App
