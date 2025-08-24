import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
   return <div className='w-full bg-[#121212] p-3 flex flex-col justify-between items-center min-h-screen'>
    <Header />
    <Home />
    <Footer />
   </div>
  
}

export default App
