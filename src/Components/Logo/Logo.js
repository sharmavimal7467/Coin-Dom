import React from 'react'
import logo from "../../Assests/logo.svg"

const Logo = () => {
  return (

         <div className='flex items-center absolute sm:top-[1.5rem] sm:left-[1.5rem] top-4 left-4'>
      <img src={logo} alt='CryptoBucks' className='w-8 h-8 sm:w-full sm:h-full'/>
      <p className='sm:text-xl text-md text-cyan font-nunito '>CryptoBucks</p>
    </div> 
  )
}

export default Logo
