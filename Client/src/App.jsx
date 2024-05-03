import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Browse from './components/Browse'
import Chats from './components/Chats'
import Settings from './components/Settings'
import GenreRoom from "./components/GenreRoom"

function App() {
  const genres = [
    { name: 'Hiphop', displayName: 'Hip Hop' },
    { name: 'Pop', displayName: 'Pop' },
    { name: 'Classical', displayName: 'Classical' },
    { name: 'Rock', displayName: 'Rock' },
    { name: 'EDM', displayName: 'EDM' },
    { name: 'R&B', displayName: 'R&B' },
    { name: 'Kpop', displayName: 'K-Pop' },
    { name: 'Jazz', displayName: 'Jazz' },
    { name: 'Metal', displayName: 'Metal' },
    { name: 'Punk', displayName: 'Punk' },
    { name: 'Folk', displayName: 'Folk' },
    { name: 'Lo-Fi', displayName: 'Lo-Fi' }
];
  return (
    <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Browse' element={<Browse/>}/>
          <Route path='/Chats' element={<Chats/>}/>
          <Route path='/Settings' element={<Settings/>}/>
          {genres.map((genre, index) => (
        <Route
          key={`genre${index + 1}`}
          path={`/${genre.name}`}
          element={<GenreRoom name={genre.displayName} />}
        />
      ))}
        </Routes>
    </>
  )
}

export default App
