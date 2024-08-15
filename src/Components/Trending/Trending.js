import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingData } from '../../Redux/features/trendingCoins/trendingCoinsSlice';
import { trendingCoinId } from '../../Redux/features/trendingCoinId/trendingCoinIdSlice';
import { useNavigate } from 'react-router';

const Trending = () => {


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTrendingData())
    },[])
    
    const trend = useSelector(state=>state.trendCoins.posts.coins)

    const errorTrend = useSelector(state=>state.trendCoins.error)

    console.log(errorTrend)

    const loadingTrend = useSelector(state=>state.trendCoins.loading)

    console.log(loadingTrend)

    // console.log(trend)
    // console.log(trend.trendCoins)
    // console.log(trend.trendCoins.posts)
    // console.log(trend.trendCoins.posts.coins)

    // const trendData = trend.trendCoins.posts.coins

    // console.log(trendData)

    const navigate = useNavigate()

    
    function releaseTrendingCoinId(item){
        console.log(item.item.id)
        dispatch(trendingCoinId(item.item.id))
        navigate("/detail")
    }

    if(errorTrend){
        return(
          <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
            Something went wrong,Please Try Again.
          </div>
        )
    }

    if(loadingTrend){
      return(
        <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
          loading...
        </div>
      )
    }


  return (
    <div className='border w-[90%] flex items-center justify-center border-gray-100 rounded-lg  mt-44 text-center mb-8'>
    <div className='w-[95%] flex items-center justify-around flex-wrap lg:flex-row flex-col'>
    {
        trend && trend.length>0 ? (
            trend.map((item,index)=>(
                <div className=' lg:w-[40%] w-full  bg-gray-200 flex items-center content-between text-left leading-5 rounded-lg hover:bg-gray-100 hover:bg-opacity-40 hover:cursor-pointer relative mt-7 mb-3 sm:px-[3vw] sm:w-[70%] md:w-[60%]' key={index} onClick={()=>{releaseTrendingCoinId(item)}}>
                     
                <div className='leading-8'>
               <p className='text-gray-100 flex items-center capitalize'>Name:<span className='text-cyan font-medium'>{item.item.name}</span><img src={item.item.thumb} alt='img_not_found' className='w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full'/></p>
           
                       <p className='text-gray-100 capitalize'>Market Cap Rank:<span className='text-cyan font-medium'>{item.item.market_cap_rank}</span></p>
           
        <p className='text-gray-100 capitalize'>Price (In Btc):<span className='text-cyan font-medium'>BTC {Number(item.item.price_btc).toFixed(10)}</span></p>
           
                       <p className='text-gray-100 capitalize'>Score:<span className='text-cyan font-medium'>{item.item.score
                       }</span></p>
                 </div>
           
                 <img src={item.item.thumb} alt='image_not_found' className='lg:w-[7rem] w-[7rem] h-auto rounded-full absolute xs:block hidden xs:left-[59vw] sm:left-[39vw] md:left-[35vw] lg:left-[23vw]'/>
                </div>
            ))
        )

        :

        (
            <p>Something want wrond please reload once</p> 
        )
      
    }
    </div>
    </div>
  )
}

export default Trending
