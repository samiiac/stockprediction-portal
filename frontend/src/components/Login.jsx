import React,{useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

function Login() {
 const[userData ,setUserData] =useState({
   username: " ",
   password: " ",
 })
 const navigate = useNavigate()
 const [error,setError] = useState()
 const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  function handleLogin(e){
  e.preventDefault()
  setError('')
    async function login(){
      try{
        const response = await axios.post('http://127.0.0.1:8000/api/token/',userData);
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        setIsLoggedIn(true)
        navigate('/')
      }catch(err){
        setError('Invalid Credentials');
        // console.log('Invalid Credentials',err.response.data)
      }
    }

    login()
  }
  return (
     <div className="container max-w-[370px] ">
    
      <div className="w-full p-3 bg-[#0e0e0e] rounded-lg border-1 border-[#363535]">
        <h1 className="text-white text-center mb-6 text-xl font-light">
        Log in to our portal.
      </h1>
        <form
          className="p-3 flex flex-col text-white "
          onSubmit={handleLogin}
        >
          <div className="mb-3 p-1">
            <input
              className="form-control w-full border-b-1 border-white outline-none"
              type="text"
              name="username"
              placeholder="Enter your name.."
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
                
              }}
            />
           
          </div>
        

          <div className="mb-3 p-1">
            <input
              className="form-control w-full border-b-1 border-white outline-none"
              type="password"
              name="password"
              placeholder="Enter your password.."
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
            
              }}
            />
           
          </div>
          <div className='text-red-600 font-light '>{
          error ? error : ''
} </div>
          <button
            type="submit"
            className="mt-6 outline-none rounded-md p-2 w-full cursor-pointer bg-[#5f46ff] hover:bg-[#0e0e0e] border-1 border-[#5f46ff]"
          >
           Login
          </button>

        </form>
         
      </div>
     
    </div>
  )
}

export default Login