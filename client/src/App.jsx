import { React, StrictMode, useState } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'
import Nav from './components/pages/Nav'
function App() {

  return (
    <>
     <StrictMode>
      <Outlet />
      <Nav/>
     </StrictMode>
     <Footer />
    </>
  )
}

export default App;
