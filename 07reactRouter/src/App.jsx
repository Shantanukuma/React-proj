import { useEffect, useState } from 'react'

import './App.css'

// import Home from './components/home/Home'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

 

function App() {

  
  return (
    <div>
      {/* <Routes>
        <Route path='/' element= {<Home/>} />
        
      </Routes> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
