import React, { useEffect, useState } from 'react'
import star from "../../Assests/star.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/features/coin/coinSlice';
import { fetchSearchData } from '../../Redux/features/search/searchSlice';
import SearchBox from '../SearchBox/SearchBox';
import currenyData from '../../Data/currenyData';
import { savedCoinsCollection } from '../../Redux/features/saved/savedSlice';
import submitIcon from "../../Assests/submit-icon.svg"
import { pageText } from '../../Redux/features/page/pageSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { coinDetail } from '../../Redux/features/displayFullDetailCoin/displayFullDetailCoin';
import FilterData from '../FilterData/FilterData';
import { useNavigate } from 'react-router';
import { showDetail } from '../../Redux/features/showForDetail/showForDetailSlice';
import DetailAboutCoin from '../DetailAboutCoin/DetailAboutCoin';

const Crypto = () => {

    const[filterCoinData , SetFilterCoinData] = useState();

  const[currentPage , SetCurrentPage] = useState('')

  const[show , SetShow] = useState(false)

  const dispatch = useDispatch();


  //DATA PER PAGE
  const perPage = useSelector(state=>state.pageNumber)

  // console.log(perPage);

  const dataPerPage = perPage.pageCount;

  // console.log("dataPage" , dataPerPage)


  //TOTAL DATA FETCH FROM API
  const coins = useSelector(state=>state.showCoin.posts)

  console.log("main array",coins)


    // console.log("length of main array",coins.length)

    //ERROR DATA FETCH FROM API
    const coinsError = useSelector(state=>state.showCoin.error)

    console.log("coinSlice error",coinsError)

     //loading DATA FETCH FROM API
     const coinsLoading = useSelector(state=>state.showCoin.loading)

     console.log("coinSlice loading",coinsLoading)


     
 

     //SEARCH COINS
  const filterCoin = useSelector(state=>state.filter.data.id)

  // console.log(filterCoin);


  //SET VALUE IN USESTATE
  useEffect(()=>{
    SetFilterCoinData(filterCoin)
  },[filterCoin])

  // console.log("filter Coin Data",filterCoinData);

  // console.log("Coin",coins);



     //SHOW SINGLE SEARCH DATA INTO CRYPTO
     const filteredCoins = coins.filter(item => item.id === filterCoinData);

    //  console.log("filter Coin Length",filteredCoins);
 
    //  console.log("filter Coin Length",filteredCoins.length);



//PAGINATION
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = dataPerPage; 


//ADJUST DATA SET IN ONE PAGE

  useEffect(() => {
    setItems(coins.slice((page - 1) * itemsPerPage, page * itemsPerPage));
    setTotalPages(Math.ceil(coins.length / itemsPerPage));
  }, [coins, page, itemsPerPage]);


  //HANDLE VALUE
  const handleChange = (event, value) => {
    // console.log(value)
    setPage(value);
  };


  // console.log("page" , page)

  // console.log("items" , items)

  // console.log("totalPages" , totalPages)

  // console.log("itemsPerPage" , itemsPerPage)

    
  //MARKET INPUT FROM SELECT OPTION
    const marketTextInput = useSelector(state=>state.marketInput.marketText).replace(/ /g, '_').toLowerCase();

      // console.log("marketTextInput useSelector" , marketTextInput)


      //CURRENCY INPUT 
      const currencyTextInput = useSelector(state=>state.currenyInput.searchText).toLowerCase();

// console.log("currencyTextInput useSelector" , currencyTextInput)


      //CURRENCY SYMBOL
     const symbolForUse = useSelector(state=>state.
      currenyInput.symbol)

    //  console.log(symbolForUse)



    
//DISPATCH DATA TO FETCH API FOR COINS

    useEffect(() => {

      // console.log("currencyTextInput insideFetchUseEffect" , currencyTextInput)
      // console.log("marketTextInput insideFetchUseEffect" , marketTextInput)
    // console.log("dataPerPage" , dataPerPage);

      dispatch(fetchData({currencyTextInput : currencyTextInput,marketTextInput : marketTextInput , symbolForUse : symbolForUse , dataPerPage : dataPerPage}));


      // console.log("downSide")
      // console.log("currencyTextInput insideFetchUseEffect" , currencyTextInput)
      // console.log("marketTextInput insideFetchUseEffect" , marketTextInput)

  }, [dispatch , currencyTextInput , marketTextInput , symbolForUse , dataPerPage]);

 

  // console.log(filterCoinData)


//   if(filterCoinData){
//     <SearchBox className="hidden"/>
//   }
 

// useEffect(()=>{
//         console.log(coinTextInput)
//     dispatch(fetchSearchData(coinTextInput))
    
//    },[coinTextInput])
  
  
   
  
    //   console.log(coins)


      //CONVERT LONG NUMBER INTO TWO DIGIT
      // function reduceToTwoDigit(num){
      //   const formattedNum = num.toFixed(2);
      //   return formattedNum;
        
      // }

      //GET COLOR(RED OR GREEN)
      // function getTextColor(num){
        // console.log(typeof num);
        // console.log("hame mat chedo!")
        // const formattedNum = parseFloat(num.toFixed(2));
        // console.log(typeof formattedNum , formattedNum);
        // const clr = formattedNum>0 ? "text-green" : "text-darkRed"
        // console.log(clr)
      //   return clr;
      // }

      // console.log(coins);
    


      // console.log(filteredCoins[0]);

     
      // savedCoinsCollection

      //DISPATCH SINGLE COIN TO SAVED 
      function saved(coin){
        dispatch(savedCoinsCollection(coin))
      }

      // const perPage = useSelector(state=>state)

      // console.log(perPage);

      // console.log(perPage.pageNumber);

      // console.log(perPage.pageNumber.pageCount);

      // const dataPerPage = perPage.pageNumber.pageCount

      // console.log(dataPerPage)

     

      //SUBMIT FORM
      function coinInputSubmit(e){
        e.preventDefault()
        dispatch(pageText(currentPage))
        SetCurrentPage('')
      }

      //HANDLE CURRENY INPUT
      function currencyInput(e){
        SetCurrentPage(e.target.value)
      }

      // DATA IN SINGLE PAGE
      function sendValue(){
        dispatch(pageText(currentPage))
        SetCurrentPage('')
      }

      const navigate = useNavigate()

      // const showDetailComp = useSelector(state=>state.showComp)

      // console.log(showDetailComp)


      //DETAIL OF SINGLE COIN AFTER CLICK
      function clickedCoin(item){
        dispatch(coinDetail(item))
        navigate("/detail")
        // SetShow(true)
        dispatch(showDetail(true))
      }

      

      // useEffect(()=>{
      //   SetShow(showDetailComp.inputValue)
      // },[showDetailComp.inputValue])

      if(coinsError){
          return(
            <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
              Something went wrong,Please Try Again.
            </div>
          )
      }

      if(coinsLoading){
        return(
          <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
            loading...
          </div>
        )
      }

    return (

       <div className='w-[90%] mb-10'>

<FilterData/> 

<div className='border  flex items-center justify-around  border-gray-100 rounded-lg relative mt-8 text-center overflow-hidden'>
 



            <table className='w-full table-auto'>
                <thead className='capitalize text-base text-gray-100 font-medium border-b border-gray-100'>
                    <tr>
                        <th className='py-1'>Asset</th>
                        <th className='py-1 sm:table-cell hidden'>Name</th>
                        <th className='py-1'>Price</th>
                        <th className='py-1 sm:table-cell hidden' >Total Volume</th>
                        <th className='py-1 sm:table-cell hidden'>Market Cap Change</th>
                        <th className='py-1 lg:table-cell hidden'>1H</th>
                        <th className='py-1 lg:table-cell hidden'>2H</th>
                        <th className='py-1 lg:table-cell hidden'>7D</th>
                    </tr>
                </thead>
                <tbody>
                    {
 
// (filterCoinData  ? filteredCoins : coins)
(filterCoinData  ? filteredCoins : items).map((item,index)=>(
                        <tr className=' hover:bg-gray-200 border-b border-gray-100' key={index}>
                        <td className='flex items-center gap-2 py-4'>
                            <img src={star} alt='not_found' className='hover:text-blue-600 cursor-pointer' onClick={()=>saved(item)}/>
                            <img src={item.image} alt='not_found' className='w-[1.2rem] h-[1.2rem]'/>
                            <p className='font-medium text-white text-md cursor-pointer' onClick={()=>clickedCoin(item)} >{item.symbol.toUpperCase()}</p>
                        </td>

                        <td className='py-4 font-medium text-white text-md cursor-pointer sm:table-cell hidden' onClick={()=>clickedCoin(item)}>{item.name}</td>

                        <td className='py-4 font-medium text-white text-md'>{
                          
                          new Intl.NumberFormat("en-In",{
                            style:"currency",
                            currency:currencyTextInput
                          }).format(Number(item.current_price).toFixed(2))

                          }</td>

                        <td className='py-4 font-medium text-white text-md sm:table-cell hidden'>{item.total_volume}</td>

                        <td className={`sm:table-cell hidden py-4 font-medium  text-md ${ Number(item?.market_cap_change_percentage_24h ? item.market_cap_change_percentage_24h.toFixed(2) :"null")>0 ? "text-green" : "text-red" 
                        }`}>{Number(item?.market_cap_change_percentage_24h?item.market_cap_change_percentage_24h.toFixed(2):"-----")
                        }{item?.market_cap_change_percentage_24h? "%":""}</td>



                        <td className={`lg:table-cell hidden py-4 font-medium text-md ${
                        Number(item?.price_change_percentage_1h_in_currency ? item.price_change_percentage_1h_in_currency.toFixed(2) :"null")>0 ? "text-green" : "text-red"
                        }`}>{
                          Number(item?.price_change_percentage_1h_in_currency?item.price_change_percentage_1h_in_currency.toFixed(2):"-----")
                        }{item?.price_change_percentage_1h_in_currency? "%":""}</td>



                        <td className={`lg:table-cell hidden py-4 font-medium text-md ${
                        Number(item?.price_change_percentage_24h_in_currency ? item.price_change_percentage_24h_in_currency.toFixed(2) :"null")>0 ? "text-green" : "text-red"
                        }`}>{Number(item?.price_change_percentage_24h_in_currency?item.price_change_percentage_24h_in_currency.toFixed(2):"-----")
                        }{item?.price_change_percentage_24h_in_currency? "%":""}</td>



                        <td className={`lg:table-cell hidden py-4 font-medium text-md ${
                        Number(item?.price_change_percentage_7d_in_currency ? item.price_change_percentage_7d_in_currency.toFixed(2) :"null")>0 ? "text-green" : "text-red"
                        }`}>{Number(item?.price_change_percentage_7d_in_currency?item.price_change_percentage_7d_in_currency.toFixed(2):"-----")
                        }{item?.price_change_percentage_7d_in_currency? "%":""}</td>

                    </tr>
                    ))
                   } 
                </tbody> 
            </table>

           

        </div>


       <div className='flex flex-col mt-5 gap-3 md:flex-row md:items-center md:justify-between '>

       <div className='flex items-center w-full xxs:w-[70vw] sm:w-[30vw] md:w-[25vw]'>
        <p className='font-medium text-white'>per page:</p>
        <form className='w-[50%] outline-cyan' onSubmit={coinInputSubmit} >
          <input className='bg-gray-200 w-[85%] pl-1 rounded-md ml-1 outline-cyan text-white  pr-1' placeholder='10' onChange={currencyInput} value={currentPage}/>
        </form>
        <img src={submitIcon} alt='submitIconNotFound' onClick={sendValue}/>
      </div>

      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              backgroundColor: 'gray',
              color: 'white',
              borderRadius: '50px',
              '&:hover': {
                color: 'cyan',
              },
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: 'cyan',
              color: 'black',
            },
          }}
        />
      </Stack>

       </div>


       </div>
    )
}

export default Crypto
