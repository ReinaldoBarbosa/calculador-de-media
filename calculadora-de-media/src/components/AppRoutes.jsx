import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../templates/Home'
import App from '../App'
import FormCalculo from '../templates/FormCalculo'
import { CalculosProvider } from '../context/CalculosContext'

const AppRoutes = () => {
  return (
    <CalculosProvider>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/novo-calculo' element={<FormCalculo/>}></Route>
      </Routes>
    </CalculosProvider>
  )
}

export default AppRoutes
