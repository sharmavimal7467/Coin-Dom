import React, { useState } from 'react'
import "./Icons.css"
import arrowIcon from "../../Assests/arrow_icon.png"
import fb from "../../Assests/facebook-fill.svg"
import git from "../../Assests/github-fill.svg"
import logoOld from "../../Assests/logo-Old.png"
import logo from "../../Assests/logo.svg"
import pagination from "../../Assests/pagination-arrow.svg"
import reddit from "../../Assests/reddit-fill.svg"
import reset from "../../Assests/reset.svg"
import search from "../../Assests/search-icon.svg"
import select from "../../Assests/select-icon.svg"
import star from "../../Assests/star.svg"
import submit from "../../Assests/submit-icon.svg"
import twitter from "../../Assests/twitter-circle-filled.svg"
import optionDat from '../../Data/option'

const Icons = () => {

    const[callClass , SetCallClass] = useState(false);


    function appliedClass(){
        SetCallClass(!callClass)
    }


  return (
    <div>
      <img src={arrowIcon} alt="arrowIcon"/>
      <img src={fb} alt="fb"/>
      <img src={git} alt="git"/>
      <img src={logoOld} alt="logoOld"/>
      <img src={logo} alt="logo"/>
      <img src={pagination} alt="pagination"/>
      <img src={reddit} alt="reddit"/>
      <img src={reset} alt="reset"/>
      <img src={search} alt="search"/>
      <img src={select} alt="select"/>
      <img src={star} alt="star"/>
      <img src={submit} alt="submit"/>
      <img src={twitter} alt="twitter"/>      

      <select>
        <option>fe</option>
        <option>efeg</option>
        <option>af</option>
        <option>edgvv</option>
      </select>

        {/* <div className='bg-gray-200 rounded-md w-[75%] text-white text-md font-medium outline-none relative flex items-center' ></div>
        <div onClick={appliedClass} className={callClass ? 'collapse' : 'expand'}>
        <img src={select} alt="select" className='absolute right-0'/>market cap des
        </div>
        
        <div className='bg-gray-200 rounded-md w-[75%] text-white text-md font-medium outline-none aboslute'>
            {
            optionDat.map((item,index)=>(
                <div key={index}>
                        <div>{item.name}</div>
                </div>
  ))
}  
        </div> */}

        




    </div>
  )
}

export default Icons
