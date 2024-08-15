import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fb from "../../Assests/facebook-fill.svg"
import twitter from "../../Assests/twitter-circle-filled.svg"
import reddit from "../../Assests/reddit-fill.svg"
import github from "../../Assests/github-fill.svg"

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { fetchChartData } from '../../Redux/features/chartData/chartDataSlice';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 100, pv: 2100, amt: 2100}];

const Chart = () => {

    const[cartArrayData , SetCardArrayData] = useState()

    const[cartCvtData , SetCartCvtData] = useState()

    const[type , SetType] = useState("prices");

    const[days , SetDays] = useState(7)

    const[fullDetail , SetFullDetail] = useState()

    const id = useSelector(state=>state.coinId)

    console.log(id);

    console.log(id.inputValue);

    const finalCoinId = id.inputValue


    console.log(finalCoinId);



  

    const dispatch = useDispatch()

    useEffect(()=>{
        // console.log("Inside UseEffect",days)
        console.log(finalCoinId);
        dispatch(fetchChartData(finalCoinId))
        console.log(finalCoinId);
      },[dispatch,finalCoinId])  

      const requiredChartData = useSelector(state=>state.chartData)

      // console.log(requiredChartData)

      // console.log(requiredChartData.posts)

      useEffect(()=>{
      // console.log(requiredChartData.chartData)
        if(requiredChartData &&requiredChartData.posts){
      // console.log(requiredChartData.chartData.posts)
            SetCardArrayData(requiredChartData.posts)
        }
      },[requiredChartData.posts])

      // console.log(cartArrayData)

   useEffect(()=>{
    if(cartArrayData && cartArrayData.prices){
        SetCartCvtData(cartArrayData[type].map((item)=>(
          {
              date:new Date(item[0]).toLocaleDateString(),
              [type]:item[1]
          }
        ))
    )
    }
   },[cartArrayData , type])
     

      // console.log(cartCvtData)

      function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
            <p className="label text-sm text-cyan">{`${label} : ${payload[0]?.value?payload[0].value:"---"}`}</p>
            </div>
          );
        }
      
        return null;
      }

      const clickCoinFullDetail = useSelector(state=>state.fullDetailCoin)

      // console.log(clickCoinFullDetail)

      // console.log(clickCoinFullDetail.posts)


      useEffect(()=>{
        if(clickCoinFullDetail){
            SetFullDetail(clickCoinFullDetail.posts)
        }
      },[clickCoinFullDetail])


      // console.log(fullDetail)

    //   const errorInClickCoinFullDetail = useSelector(state=>state.fullDetailCoin.error)

    //   const loadingInClickCoinFullDetail = useSelector(state=>state.fullDetailCoin.loading)

    //   if(errorInClickCoinFullDetail){
    //     return(
    //       <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
    //         Something went wrong,Please Try Again.
    //       </div>
    //     )
    // }

    // if(loadingInClickCoinFullDetail){
    //   return(
    //     <div className='font-extrabold text-white text-xl w-full h-[100vh] flex items-center justify-center '>
    //       loading...
    //     </div>
    //   )
    // }
      
      


  return (
    <div className='w-[100%] h-full relative'>
        <ResponsiveContainer height={"90%"}>
    <LineChart width={400} height={400} data={cartCvtData}>
    <Line type="monotone" dataKey={type} stroke="#14ffec" strokeWidth={"1px"} />
    <CartesianGrid stroke="#808080" />
    {/* <CartesianGrid stroke="#323232" /> */}
    <XAxis dataKey="date" hide/>
    <YAxis dataKey={type} hide domain={["auto" , "auto"]} />
    <Tooltip content={<CustomTooltip />} cursor={false}/>
    <Legend/>
  </LineChart>
  </ResponsiveContainer>

  <div className='flex flex-wrap md:flex-wrap'>
    <button onClick={()=>SetType("prices")} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type === "prices" ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>Prices</button>

    <button onClick={()=>SetType("market_caps")} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type === "market_caps" ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>market caps</button>

    <button onClick={()=>SetType("total_volumes")} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type === "total_volumes" ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>total volumes</button>

    <button onClick={()=>SetDays(7)} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize mt-1 ${days === 7 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>7d</button>

    <button onClick={()=>SetDays(14)} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize mt-1 ${days === 14 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>14d</button>

    <button onClick={()=>SetDays(30)} className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize mt-1 ${days === 30 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"}`}>30d</button>
  </div>

  <div className='flex flex-col mt-5'>

  <div className='flex mt-5 items-center gap-1 flex-col md:flex-row'>
  <span className='text-sm capitalize text-gray-100'>Market Cap Rank:</span>

<h2 className='text-base font-bold '>{fullDetail?.market_cap_rank ?(fullDetail.market_cap_rank
):("null")}</h2>
  </div>

  <div className='flex mt-5 items-center gap-1 flex-col md:flex-row'>
  <span className='text-sm capitalize text-gray-100'>CoinGeko Rank:</span>

<h2 className='text-base font-bold '>----</h2>
  </div>

   <div className='flex mt-5 items-center gap-1 flex-col md:flex-row'>
  <span className='text-sm capitalize text-gray-100'>CoinGeko Score:</span>


{/* <h2 className='text-base font-bold '>{fullDetail.market_data?.market_cap.usd?(fullDetail.market_data.market_cap.usd):("-----")}</h2>  */}
<h2 className='text-base font-bold '>----</h2>
  </div>

  </div>

  <div className='flex gap-5 absolute items-center right-1 top-[40rem] md:top-[26rem] flex-wrap md:flex-nowrap pb-5 mt-[4rem] mx-2 lg:top-[22rem]'>
          <a href={fullDetail?.links?(`https://facebook.com/${fullDetail.links.facebook_username}`) : "#"} target={"_blank"} rel="noreferrer"><img src={fb} alt="img_not_found" className="text-lg px-1  py-1 bg-cyan hover:bg-twitterColor  rounded-full w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]"/></a>

          <a href={fullDetail?.links?(`https://twitter.com/${fullDetail.links.twitter_screen_name}`):"#"
} target={"_blank"} rel="noreferrer"><img src={twitter} alt="img_not_found" className="text-lg px-1  py-1 bg-cyan hover:bg-facebook  rounded-full w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]"/></a>

          <a href={fullDetail?.links?(fullDetail.links.repos_url.github
[0]):"#"} target={"_blank"} rel="noreferrer"><img src={github} alt="img_not_found" className="text-lg px-1  py-1 bg-cyan hover:bg-git  rounded-full w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]"/></a>

          <a href={fullDetail?.links?(fullDetail.links.
subreddit_url):"#"} target={"_blank"} rel="noreferrer">
          <img src={reddit} alt="img_not_found" className="text-lg px-1  py-1 bg-cyan hover:bg-reddit  rounded-full w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]"/>
          </a>
  </div>
    </div>
  )
}

export default Chart
