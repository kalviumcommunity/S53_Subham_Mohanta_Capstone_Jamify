import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import About from './components/About'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
        {/* <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Pricing' element={<Pricing/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes> */}
        <Dashboard/>
    </>
  )
}

export default App
