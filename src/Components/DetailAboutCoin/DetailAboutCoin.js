import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import select from "../../Assests/arrow_icon.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HighLowIndicator from '../HighLowIndicator/HighLowIndicator';
import { fetchFullDataByClick } from '../../Redux/features/fullDetailOfCoin/fullDetailOfCoinSlice';
import { fetchChartData } from '../../Redux/features/chartData/chartDataSlice';
import Chart from '../Chart/Chart';
import { getCoinId } from '../../Redux/features/coinId/coinIdSlice';
import { showDetail } from '../../Redux/features/showForDetail/showForDetailSlice';
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router';

const DetailAboutCoin = () => {

    const[fullDetail , SetFullDetail] = useState()


    const dispatch = useDispatch()

    const [singleCoinDetailInObject , SetSingleCoinDetailInObject] = useState()

      const getCoinDetail = useSelector(state=>state.detailCoin)
  
      console.log(getCoinDetail)
  
      console.log(getCoinDetail.displayCoinDetail)
  
      console.log(getCoinDetail.displayCoinDetail[0])
  
  
      useEffect(()=>{
        console.log(getCoinDetail.displayCoinDetail[0])
            if(getCoinDetail?.displayCoinDetail?.[0]){
                SetSingleCoinDetailInObject(getCoinDetail.displayCoinDetail[0])
            }
        },[getCoinDetail])
    
        console.log(singleCoinDetailInObject);
        
        const[singleCoinDetailInObjectWithId, SetSingleCoinDetailInObjectWithId] = useState("")

        useEffect(()=>{
          if(singleCoinDetailInObject){
            SetSingleCoinDetailInObjectWithId(singleCoinDetailInObject.id)
          }
        },[singleCoinDetailInObject])

        console.log(singleCoinDetailInObjectWithId)

        const showDetailComp = useSelector(state=>state.showComp.inputValue)

        // console.log(showDetailComp)

        const savedCoinId = useSelector(state=>state.savedId)

        // console.log(savedCoinId.inputValue)

        const savedPageCoinId = savedCoinId.inputValue;

        // console.log(savedPageCoinId)

        const trendingCoinId = useSelector(state=>state.trendingId)

        // console.log(trendingCoinId.inputValue)

        const trendingPageCoinId = trendingCoinId.inputValue

        // console.log(trendingPageCoinId)


        



        useEffect(()=>{
            if(singleCoinDetailInObjectWithId || savedPageCoinId || trendingPageCoinId){
                dispatch(fetchFullDataByClick(singleCoinDetailInObjectWithId || savedPageCoinId || trendingPageCoinId))
                dispatch(getCoinId(singleCoinDetailInObjectWithId || savedPageCoinId || trendingPageCoinId))
            }
        },[singleCoinDetailInObject])



          //CONVERT LONG NUMBER INTO TWO DIGIT
      function reduceToTwoDigit(num){
        const formattedNum = num.toFixed(2);
        return formattedNum;
        
      }

      //GET COLOR(RED OR GREEN)
      function getTextColor(num){
        // console.log(typeof num);
        const formattedNum = parseFloat(num.toFixed(2));
        // console.log(typeof formattedNum , formattedNum);
        const clr = formattedNum>0 ? "text-green bg-green " : "text-darkRed bg-darkRed"
        // console.log(clr)
        return clr;
      }

    //FOR ARROW WHICH
      function selectArrow(num){
        // console.log(typeof num);
        const formattedNum = parseFloat(num.toFixed(2));
        // console.log(typeof formattedNum , formattedNum);
        const clr = formattedNum>0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
        // console.log(clr)
        return clr;
      }

      const clickCoinFullDetail = useSelector(state=>state.fullDetailCoin)

      // console.log(clickCoinFullDetail)

      // console.log(clickCoinFullDetail.posts)


      useEffect(()=>{
      // console.log(clickCoinFullDetail.posts)
        if(clickCoinFullDetail){
      // console.log(clickCoinFullDetail.posts)
            SetFullDetail(clickCoinFullDetail.posts)
        }
      },[clickCoinFullDetail])


      // console.log(fullDetail)



        //CURRENCY INPUT 
        const currencyTextInput = useSelector(state=>state.currenyInput.searchText).toLowerCase();

        // console.log("currencyTextInput useSelector" , currencyTextInput)
      

        const currencyFormatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currencyTextInput,
            notation: "compact"
          });

          const currentPrice = fullDetail?.market_data?.current_price[currencyTextInput];

          const formattedPrice = currentPrice ? currencyFormatter.format(currentPrice) : null;

          const currentMarketCap = fullDetail?.market_data?.market_cap
          [currencyTextInput];

          const formattedMarketCap= currentMarketCap ? currencyFormatter.format(currentMarketCap) : null;

          const currentTotalVolume = fullDetail?.market_data?.total_volume
          [currencyTextInput];

          const formattedTotalVolume = currentTotalVolume ? currencyFormatter.format(currentTotalVolume) : null;


          // console.log(fullDetail.market_data.low_24h)

          // console.log(fullDetail.market_data.high_24h)

          const currentLow24 = fullDetail?.market_data?.low_24h[currencyTextInput];

          const formattedLow24 = currentLow24 ? currencyFormatter.format(currentLow24) : null;

          const currentHigh24 = fullDetail?.market_data?.high_24h[currencyTextInput];

          const formattedHigh24 = currentHigh24 ? currencyFormatter.format(currentHigh24) : null;

          const currentCirculatingSupply = fullDetail?.market_data?.circulating_supply;

          const formattedCirculatingSupply = currentCirculatingSupply ? currencyFormatter.format(currentCirculatingSupply) : null;

          const currentMaxSupply = fullDetail?.market_data?.max_supply;

          const formattedMaxSupply = currentMaxSupply ? currencyFormatter.format(currentMaxSupply) : null;

          const currentFullDilutedValuation = fullDetail?.market_data?.max_supply;

          const formattedFullDilutedValuation = currentFullDilutedValuation ? currencyFormatter.format(currentFullDilutedValuation) : null;


          const outerRef = useRef();
          const navigate = useNavigate();

  function showFalse(e){
    e.preventDefault();
    // console.log(outerRef.current)
    // console.log(outerRef.current.contains(e.target))
    if(outerRef.current && !outerRef.current.contains(e.target)){
      // console.log("ander aaya kiya!")
        dispatch(showDetail(false))
        navigate("/")
    }
    // console.log("nahi aaya bhai")
    
  }

  useEffect(()=>{
    document.addEventListener("click" , showFalse)
    return ()=>{
      document.removeEventListener("click" , showFalse)
    }
  },[])

         


        if (!fullDetail) {
            return <div className='w-[80%] bg-red bg-opacity-75 rounded-lg text-white relative p-4'>Loading...</div>;
          }

  return ReactDOM.createPortal(
    <div className='bg-gray-300 flex items-center justify-center'>

    {/* <div className='flex items-center justify-center'> */}

     {
      showDetailComp && 
      <div className='w-[70%] bg-gray-200  rounded-lg text-white relative mb-8 h-[50%] mt-8 flex  flex-col items-center justify-center overflow-y-scroll md:overflow-hidden' ref={outerRef}>

{/* <div className='w-[70%] bg-gray-200 bg-opacity-30 rounded-lg text-white relative mb-8 h-[50%] mt-8 flex  flex-col items-center justify-center overflow-y-scroll md:overflow-hidden' ref={outerRef}> */}

<div className='flex w-full items-center pt-5 px-3 md:pt-8 md:pl-2 '>


   {fullDetail.image?.thumb ? (
               <img src={fullDetail.image.thumb} alt='img_not_found' className='w-6 h-6 mx-0 sm:w-[3rem] sm:h-[3rem] md:mx-1.5' />
           ) : (
               <div className='w-[3rem] h-[3rem] mx-1.5 bg-gray-300' />
           )}

   <h1 className='capitalize font-medium text-md sm:text-xl'>{fullDetail.name}</h1>
   <span className='text-sm py-0.5 px-2.5 ml-2 bg-cyan text-cyan rounded bg-opacity-25 uppercase'>{fullDetail.symbol}</span>
   </div>


   <div className='flex items-start justify-between  h-auto w-full  relative p-2 flex-col md:p-4 md:flex-row '>

       

   <div className='flex flex-col  w-full h-full pr-0 md:pr-5'>

   

   <div className='flex w-full  mt-6 justify-between  md:justify-between'>
       <div className='w-full flex flex-col justify-between  md:justify-between'>
           <div className='flex  justify-between md:justify-between'>
               <div>
               <span className='text-sm capitalize text-gray-100'>Price</span>
               {
formattedPrice ? (
<h2 className='font-bold text-md xxs:text-lg'>{formattedPrice}</h2>
) : (
<div className='text-lg font-bold'>Data not available</div>
)
               } 
               </div>
               <div className='text-xs md:text-sm capitalize text-gray-100'>
                   <div className={`text-xs ml-0 px-0 md:text-sm md:px-1 md:ml-2 font-medium flex items-center rounded bg-opacity-25 uppercase ${
                       fullDetail.market_data?.price_change_percentage_24h?(
                       getTextColor(fullDetail.market_data.price_change_percentage_24h)):(<div/>)

                   }`}>
                       <span>    
                           {
                                 fullDetail.market_data?.price_change_percentage_24h?(
                                   reduceToTwoDigit(fullDetail.market_data.price_change_percentage_24h)):(<div/>)
                           }%
                       </span>
                       {

                                   fullDetail.market_data?.price_change_percentage_24h?(
                                   selectArrow(fullDetail.market_data.price_change_percentage_24h)):(<div/>)
                       }
                   </div>
               </div>
               
           </div>

       </div>

   </div>






   <div className='flex flex-col  w-full  mt-4 justify-between lg:flex-row lg:items-center'>

       <div className='flex flex-col'>

       <span className='text-sm capitalize text-gray-100'>Market Cap</span>
       <h2 className='text-sm md:text-base font-bold '>{
           formattedMarketCap ? (
               <h2>{formattedMarketCap}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }</h2>

       </div>
       <div className='flex flex-col'>
           <span className='text-sm capitalize text-gray-100 mt-4 lg:mt-0'>fully diluted valuation</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedFullDilutedValuation ? (
               <h2>{formattedFullDilutedValuation}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>
       </div>
   </div>







   <div className='flex w-full  mt-4 justify-between'>
       <div className='flex flex-col'>
           <span className='text-sm capitalize text-gray-100'>Total Volume</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedTotalVolume ? (
               <h2>{formattedTotalVolume}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>
       </div>
   </div>

   <div className='flex w-full  mt-4 justify-between'>
           <HighLowIndicator/>
   </div>

   <div className='flex w-full  mt-4 justify-between flex-col md:flex-row'>

       <div className='flex flex-col'>
           <span className='text-sm capitalize text-gray-100'>Low 24H</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedLow24 ? (
               <h2>{formattedLow24}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>
       </div>
       <div className='flex flex-col mt-3'>
           <span className='text-sm capitalize text-gray-100'>High 24H</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedHigh24 ? (
               <h2>{formattedHigh24}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>
       </div>

   </div>

   <div className='flex w-full  mt-4 justify-between flex-col md:flex-row '>

       <div className='flex flex-col'>
           <span className='text-sm capitalize text-gray-100'>max supply</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedMaxSupply ? (
               <h2>{formattedMaxSupply}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>
       </div>
       <div className='flex flex-col'>

           <span className='text-sm capitalize text-gray-100'>circulating supply</span>
           <h2 className='text-sm md:text-base font-bold'>
           {
           formattedCirculatingSupply ? (
               <h2>{formattedCirculatingSupply}</h2>
             ) : (
               <div className='text-sm font-bold'>Data not available</div>
             )
   }
</h2>

       </div>

   </div>

   <div className='flex  w-full  mt-4 justify-between flex-col md:flex-row'>

       <div className='flex flex-col'>
           <a href="http://www.bitcoin.org" target="_blank" rel="noreferrer" className="text-sm bg-gray-200 text-gray-100 px-px w-fit md:px-1.5 py-0.5  my-1 rounded">http://www.bitcoin.org</a>
           
           <a href="https://mempool.space/" target="_blank" rel="noreferrer" className="text-sm bg-gray-200 text-gray-100 px-px w-fit md:px-1.5 py-0.5  my-1 rounded">https://mempool.space</a>

           <a href="https://bitcointalk.org/" target="_blank" rel="noreferrer" className="text-sm bg-gray-200 text-gray-100 px-px w-fit md:px-1.5 py-0.5  my-1 rounded">https://bitcointalk.org</a>
       </div>

       <div className='flex flex-col content-start  mt-1'>
           <span className='text-sm capitalize text-gray-100'>sentiment</span>
           <div className='text-sm px-1 my-1 font-medium flex items-center bg-green text-green rounded bg-opacity-25 uppercase w-fit '>
               <span>{fullDetail.sentiment_votes_up_percentage
               }%</span>
               <ArrowDropUpIcon/>
           </div>
           <div className='text-sm px-1 my-1 font-medium flex items-center bg-red text-red rounded bg-opacity-25 uppercase w-fit '>

               <span>{fullDetail.sentiment_votes_down_percentage}%</span>
               <ArrowDropDownIcon/>

              

           </div>
       </div>

   </div>
   

   </div>


   <div className='flex flex-col  w-full pl-0 mt-2 h-[50vh] md:h-[20vw] '>
               <Chart/>
   </div>

 

   </div>
 

</div>
     }
    </div>,
    document.getElementById("model")
  )
}

// 9109657094

export default DetailAboutCoin
