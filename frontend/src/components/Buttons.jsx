import React from 'react'
import {Link} from 'react-router-dom'
function Buttons({text,classname,url}) {
  return (
   <Link to={url}><button className={`outline-none rounded-md p-2 w-22 cursor-pointer ${classname}`}>{text}</button> </Link>
  )
}

export default Buttons