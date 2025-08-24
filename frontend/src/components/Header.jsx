import React from 'react'
import Buttons from './Buttons'

function Header() {
  return (
    <nav className='container p-6 flex justify-between align-start'>
     <div className='logo text-white'>logoooe</div>

     <div className='buttons flex space-x-5 text-white'>
        <Buttons text='Login' classname='border-1 border-[#5f46ff]' />
        <Buttons text='Register' classname=' bg-[#5f46ff] hover:bg-[#121212] border-1 border-[#5f46ff]'/>

        
     </div>

    </nav>
  )
}

export default Header