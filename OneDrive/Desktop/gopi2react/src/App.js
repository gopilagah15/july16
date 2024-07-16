import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <h1>iNotebook</h1>
      <Routes>
      <Route exact path='/home' element={<Home/>} /> 
      <Route exact path='/about' element={<About />} /> 
          </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
