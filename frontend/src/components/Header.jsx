import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='container p-3 flex justify-between align-start'>
     <Link to='/'><div className='logo text-white'>logoooe</div></Link>

     <div className='buttons flex space-x-5 text-white'>
        <Buttons text='Login' classname='border-1 border-[#5f46ff]' url='login' />
        <Buttons text='Register' classname=' bg-[#5f46ff] hover:bg-[#121212] border-1 border-[#5f46ff]' url='register'/>

        
     </div>

    </nav>
  )
}

export default Header