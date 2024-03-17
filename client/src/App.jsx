import { React, StrictMode, useState } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'
import Nav from './components/pages/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
function App() {

  return (
    <>
     <StrictMode>
      <Outlet />
      <Home />
     </StrictMode>
    </>
  )
}

export default App;
