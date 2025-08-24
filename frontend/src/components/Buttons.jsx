import React from 'react'

function Buttons({text,classname}) {
  return (
   <button className={`outline-none rounded-md p-2 w-22 cursor-pointer ${classname}`}>{text}</button>
  )
}

export default Buttons