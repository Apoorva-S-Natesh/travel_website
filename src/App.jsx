import React from 'react'
import './app.css';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App