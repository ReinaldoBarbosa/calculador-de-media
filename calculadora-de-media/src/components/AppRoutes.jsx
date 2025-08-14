import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../templates/Home'
import App from '../App'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
