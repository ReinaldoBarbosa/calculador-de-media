import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from '../src/assets/img/Logo.png'
import './App.css'
import { Link } from 'react-router-dom';
import Btn from './components/button/btn'
import Calculo from './components/calculo/Calculo'
import ListaMedias from './templates/ListaMedias'

function App() {
  return <ListaMedias/>;
}

export default App
