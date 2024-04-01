import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Browse from './components/Browse'
import Chats from './components/Chats'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Pricing' element={<Pricing/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Browse' element={<Browse/>}/>
          <Route path='/Chats' element={<Chats/>}/>
        </Routes>
    </>
  )
}

export default App
