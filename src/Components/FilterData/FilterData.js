import React, { useEffect, useState } from 'react'
import seacrhIcon from '../../Assests/search-icon.svg'
import submitIcon from "../../Assests/submit-icon.svg"
import circle from "../../Assests/reset.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getCoinInput } from "../../Redux/features/coinInputSearch/coinInputSearchSlice"
import { currenyText } from '../../Redux/features/searchCurrencyText/searchCurrencyText'
import { marketOptionText } from '../../Redux/features/market/marketSlice'
import SearchBox from '../SearchBox/SearchBox'
import { symbolSign } from '../../Redux/features/searchCurrencyText/searchCurrencyText'
import currenyData from '../../Data/currenyData'
import { searchBoxSlice } from '../../Redux/features/handleSearchBox/handleSearchBoxSlice'


const FilterData = () => {

  // const[showSearch , SetShowSearch] = useState(false);

  const[coinInputText , SetCointInputText] = useState('')
  const[currencyInputText , SetCurrencyInputText] = useState('')

  // const coinTextInput = useSelector(state=>state.coinInput.inputValue)


  //IF WE WANT TO USE THIS INSIDE THE REDUX WE SIMPLY DO DISPACTH WITH THAT SEACRH FETCHDATA API CALL THEY SEND IT TO STORE AND FROM REDUX REDUCER SEND TO STORE AND THEY BOTH MERGE AND GET THE coinTextInput IN THE SEARCH API.

  // console.log(coinTextInput);

  // console.log(coinTextInput.coinInput);


 const dispatch = useDispatch();

//  useEffect(()=>{
//   dispatch(fetchSearchData(coinTextInput))
//  },[])


  function coinInputSubmit(e){
    e.preventDefault()
    SetCointInputText('')
  }

  // console.log(currencyInputText); 

  const manageFilterCoinData = useSelector(state=>state.
    manageCoin.text)

  // console.log(manageFilterCoinData)


//  useEffect(()=>{
//   if(manageFilterCoinData){
//     SetCointInputText(manageFilterCoinData)
//   }
//  },[manageFilterCoinData])

  // useEffect(()=>{
  //   coinInputText ? SetShowSearch(true) : SetShowSearch(false)
  // },[coinInputText])

  function coinInput(e){
    SetCointInputText(e.target.value)
    dispatch(getCoinInput(e.target.value))
    dispatch(searchBoxSlice(true))
    if(!e.target.value){
      dispatch(searchBoxSlice(false))
    }
  }

  function currencyInput(e){
    // console.log(e.target.value)
    SetCurrencyInputText(e.target.value)
  }

  function handleSelectChange(e){
    const newValue = e.target.value;
    dispatch(marketOptionText(newValue)); 
};



function currencySymbols(){
  if(currencyInputText){
    dispatch(currenyText(currencyInputText))

  SetCurrencyInputText('')
  }
  
}

// how we stop to show blank page when 404 402 and 429 type of error come in reactJs?

const currencyTextInput = useSelector(state=>state.currenyInput.searchText).toLowerCase();

// console.log(currencyTextInput)

const handleSearchBox = useSelector(state=>state.closeSearchBox)

// console.log(handleSearchBox.inputValue)

const showSearch = handleSearchBox.inputValue;

// console.log(showSearch)

useEffect(()=>{
  if(!showSearch){
    // console.log("hua kuch!")
    SetCointInputText('')
  }
},[showSearch])

  return (
    <div className='w-full relative'>
      <div className= 'border w-full flex items-center justify-around p-3 border-gray-100 rounded-lg relative mt-52 lg:flex-row flex-col gap-5'>
      <div className='outline-cyan lg:w-[40%]  w-[99%]'>

      <form className='flex items-center justify-between border rounded-md bg-gray-200 px-1 w-full ' onSubmit={coinInputSubmit}>
      <input className='bg-gray-200 w-full text-white ' placeholder='search here...' onChange={coinInput} value={coinInputText}/>
        <img src={seacrhIcon} alt='search'/>
      </form>
      </div>

     
     <div className='sm:flex sm:items-center sm:justify-between lg:justify-around w-full sm:w-full lg:w-[70%] lg:items-center'>
     <div className='flex items-center lg:w-[30%]  xxs:w-[90%] sm:w-[30%]  w-full'>
        <p className='font-medium text-white'>currency:</p>
        <form className='w-[50%] outline-cyan' onSubmit={coinInputSubmit} >
            <input className='bg-gray-200 w-[85%] pl-1 rounded-md ml-1 outline-cyan text-white' placeholder='usd' onChange={currencyInput} value={currencyInputText}/>
        </form>
        <img src={submitIcon} alt='submitIconNotFound' className='hover:cursor-pointer' onClick={currencySymbols}/>
      </div>

      <div className='flex items-center justify-between gap-2 lg:w-[50%] sm:w-[50%] w-full xxs:mt-3 sm:mt-0'>
      {/* md:gap-4  md:w-[52%]  */}
        <p className='font-medium text-white'>sort by:</p>
        <select className='bg-gray-200 rounded-md w-[60%] text-white text-md font-medium outline-none'
        // value={marketOptionText}
        onChange={handleSelectChange}
        >
        <option value="market cap desc">market cap desc</option>
        <option value="market cap asc">market cap asc</option>
            <option value="volume desc">volume desc</option>
            <option value="volume asc">volume asc</option>
            <option value="id desc">id desc</option>
            <option value="id asc">id asc</option>
            <option value="gecko desc">gecko desc</option>
            <option value="gecko asc">gecko asc</option>
        </select>
        <img src={circle} alt="circleNotFound" className="text-cyan font-bold text-xl w-[1em] h-[1em]"/>
      </div>
     </div>
    </div>
    {
     showSearch && <SearchBox/> 
    }
    
    </div>
  )
}

export default FilterData
