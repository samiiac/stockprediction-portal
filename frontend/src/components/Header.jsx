import React, { useContext } from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

function Header() {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
  const navigate=  useNavigate();
  
  function handleLogout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <nav className='container p-3 flex justify-between align-start'>
     <Link to='/'><div className='logo text-white'>logoooe</div></Link>

     <div className='buttons flex space-x-5 text-white'>
        {isLoggedIn ? <button onClick={handleLogout} className='outline-none rounded-md p-2 w-22 cursor-pointer  bg-[#5f46ff] hover:bg-[#121212] border-1 border-[#5f46ff]'>Logout</button>:
        <>
          <Buttons text='Login' classname='border-1 border-[#5f46ff]' url='login' />
          <Buttons text='Register' classname=' bg-[#5f46ff] hover:bg-[#121212] border-1 border-[#5f46ff]' url='register'/>
        </>
      

        }

       

        
     </div>

    </nav>
  )
}

export default Header