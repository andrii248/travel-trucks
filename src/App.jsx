import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
    <AppHeader/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="campers" element={<CatalogPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
