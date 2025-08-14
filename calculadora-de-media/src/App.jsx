import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from '../src/assets/img/Logo.png'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src={Logo} alt="logo" />          
      </div>

      <div className='container'>
        <h1>Aqui é nois</h1>
      </div>
    </>
  )
}

export default App
