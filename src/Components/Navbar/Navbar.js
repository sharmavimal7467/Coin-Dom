import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border border-cyan rounded-lg w-[90%] flex items-center justify-around  absolute px-[2px] py-[5px] top-[6rem] lg:w-[40%] '>
       
        <NavLink to='/'

        className={({ isActive })=>`w-fit  py-px rounded-lg   font-black font-nunito mx-[1px] text-[10px] gap-2 xxs:px-[5vw] xxs:text-xs xs:px-[9vw] xs:text-sm sm:text-md sm:px-[10vw]  lg:px-8
            ${
                isActive
                ? "bg-cyan text-gray-300"
                : " bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan"
            } `
        }
        >Crypto</NavLink>

<NavLink to='/trending'

className={({ isActive })=>{
    return`w-fit py-px rounded-lg font-black font-nunito mx-[1px] text-[10px] gap-2 xxs:px-[5vw] xxs:text-xs xs:px-[9vw] xs:text-sm sm:text-md sm:px-[10vw] lg:px-8
 ${
        isActive
        ? "bg-cyan text-gray-300"
        : " bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan"
    }`
}}
>Trending</NavLink>

<NavLink to='/saved'

        className={({ isActive })=>{
            return`w-fit  py-px rounded-lg font-black font-nunito mx-[1px] text-[10px] gap-2 xxs:px-[5vw] xxs:text-xs xs:px-[9vw] xs:text-sm sm:text-md sm:px-[10vw]  lg:px-8

            ${
                isActive
                ? "bg-cyan text-gray-300"
                : " bg-gray-200 text-gray-100 hover:text-cyan active:text-gray-300 active:bg-cyan"
            }

            `
        }}
        >Saved</NavLink>


    </nav>
  )
}

export default Navbar
