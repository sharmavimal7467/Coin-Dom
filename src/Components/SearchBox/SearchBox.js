
import { useDispatch, useSelector } from "react-redux"
import "./SearchBox.css"
import React, { useEffect } from 'react'
import { fetchSearchData } from "../../Redux/features/search/searchSlice";
import { getFilterData } from "../../Redux/features/filterData/filterDataSlice";
import { coinManageText } from "../../Redux/features/manageCoinInputText/manageCoinInputTextSlice";
import { searchBoxSlice } from "../../Redux/features/handleSearchBox/handleSearchBoxSlice";

const SearchBox = () => {

    const dispatch = useDispatch();
    
    const searchCoinCrypto = useSelector(state=>state.searchCoin)

    // console.log(typeof searchCoinCrypto ,searchCoinCrypto)

    // console.log(typeof searchCoinCrypto.searchCoin , searchCoinCrypto.searchCoin)

    // console.log(typeof searchCoinCrypto.searchCoin.posts ,searchCoinCrypto.searchCoin.posts)

    // console.log(typeof searchCoinCrypto.searchCoin.posts.coins , searchCoinCrypto.searchCoin.posts.coins)

    // console.log(Array.isArray(searchCoinCrypto.searchCoin.posts.coins))

    const searchDataArray = searchCoinCrypto.posts.coins

    console.log(typeof searchDataArray , searchDataArray)

    // console.log(typeof typeof searchCoinCrypto.searchCoin.posts.coins , typeof searchCoinCrypto.searchCoin.posts.coins)

    const coinTextInput = useSelector(state=>state.coinInput.inputValue)

    // console.log(coinTextInput)



    useEffect(()=>{
        if(coinTextInput){
            // console.log(coinTextInput)
        dispatch(fetchSearchData(coinTextInput))
        }
       },[dispatch , coinTextInput])


       function getFilter(item){
        console.log(item)
        if(item){
            dispatch(getFilterData(item))
            dispatch(searchBoxSlice(false))
        }
        dispatch(coinManageText(""))
       }

       const errorSearchCoinCrypto = useSelector(state=>state.searchCoin.error)

       console.log("errorSearchCoinCrypto error",errorSearchCoinCrypto)



       const loadingsearchCoinCrypto = useSelector(state=>state.searchCoin.loading)

       console.log("loadingsearchCoinCrypto loading",loadingsearchCoinCrypto)

    //    if(errorSearchCoinCrypto){
    //     return(
    //       <div className='font-extrabold text-white text-xl w-full h-96 flex items-center justify-center '>
    //         Something went wrong,Please Try Again.
    //       </div>
    //     )
    // }

    // if(loadingsearchCoinCrypto){
    //   return(
    //     <div className='font-extrabold text-white text-xl w-full h-96 flex items-center justify-center '>
    //       loading...
    //     </div>
    //   )
    // }


  return (
    <ul className='w-[100%] xs:w-[80%] sm:w-[40%] lg:w-[36%] h-96 bg-gray-200 overflow-x-hidden backdrop-filter backdrop-blur-md bg-opacity-60 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 overflow-y-scroll absolute  z-10'>
        {
            searchDataArray && searchDataArray.length>0 ? (
                searchDataArray.map((item,index)=>(
                    <li class="flex items-center ml-4 my-2 cursor-pointer" key={index} onClick={()=>{getFilter(item)}} >
                    <img src={item.thumb} alt="usd-coin" class="w-[1rem] h-[1rem] mx-1.5" />
                    <span className='text-white font-medium text-md cursor-pointer'>{item.name}</span>
                    </li>
                ))
            ) : loadingsearchCoinCrypto ? (
                <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center'>loading...</div>
            ) : errorSearchCoinCrypto && (
                <li>No item available</li>
            )
        }
  </ul>
  )

}

export default SearchBox
