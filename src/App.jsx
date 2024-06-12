import React from 'react'
import './App.css'
import Header from './components/Pages/Header/Header'
import SignupPage from './components/Pages/SignUpPage'
import { Router } from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <SignupPage/>
    </>
  )
}

export default App
