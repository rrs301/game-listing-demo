import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <Header/>
        <Home/>
    </div>
  )
}

export default App
