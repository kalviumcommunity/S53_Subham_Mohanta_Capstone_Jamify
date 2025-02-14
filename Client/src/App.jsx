import React from 'react'
import Home from './Home'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className='flex relative ml-2 mr-2 gap-1.5'>
        <LeftSidebar />
        <MainContainer />
      </div>
    </div>
  )
}

export default App