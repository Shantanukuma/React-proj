import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import RegisterProfile from './components/RegisterProfile'
import ContactDetails from './components/ContactDetails'
import ContactProfile from './components/ContactProfile'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Register/>
      <ContactDetails/>
      <ContactProfile/>
      <RegisterProfile/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
