
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const HighLowIndicator = () => {

    const [singleCoinDetailInArray , SetSingleCoinDetailInArray] = useState()

    const [singleCoinDetailInObject , SetSingleCoinDetailInObject] = useState()

    const[high,SetHigh] = useState('')

    const[low,SetLow] = useState('')

    const[current,SetCurrent] = useState('')

    const[green , SetGreen] = useState()



    const getCoinDetail = useSelector(state=>state.detailCoin)

    // console.log(getCoinDetail)

    // console.log(getCoinDetail.displayCoinDetail)

    // console.log(getCoinDetail.displayCoinDetail[0])


    useEffect(()=>{
    // console.log(getCoinDetail.displayCoinDetail)
        SetSingleCoinDetailInArray([getCoinDetail.displayCoinDetail])
    },[getCoinDetail.displayCoinDetail ])

    // console.log(singleCoinDetailInArray);


    useEffect(()=>{
    // console.log(getCoinDetail.displayCoinDetail[0])
        SetSingleCoinDetailInObject(getCoinDetail.displayCoinDetail[0])
    },[getCoinDetail.displayCoinDetail[0] ])

    // console.log(singleCoinDetailInObject);

    useEffect(()=>{
        if(singleCoinDetailInObject){
    // console.log("high" , singleCoinDetailInObject.high_24h)
        SetHigh(singleCoinDetailInObject.high_24h)}}
    ,[singleCoinDetailInObject])

    useEffect(()=>{
        if(singleCoinDetailInObject){
    // console.log("low" , singleCoinDetailInObject.low_24h)
        SetLow(singleCoinDetailInObject.low_24h)}}
    ,[singleCoinDetailInObject])

    useEffect(()=>{
        if(singleCoinDetailInObject){
    // console.log("current_price" , singleCoinDetailInObject.current_price)
        SetCurrent(singleCoinDetailInObject.current_price)}}
    ,[singleCoinDetailInObject])

    useEffect(()=>{
        let total = high - low
        // console.log("total" , total)
        let greenZone = ((high-current)*100)/total
        // console.log("greenZone" , greenZone)
        SetGreen(Math.ceil(greenZone))
    },[current , high , low])

    // console.log(high)
    // console.log(low)
    // console.log(current)
    // console.log(green)



  return (
    <div className='w-full flex'>

            <span className='bg-red h-1.5 rounded-l-lg w-[50%]' style={{width:`${100 - green}%`}} >&nbsp;</span>
            <span className='bg-green h-1.5 rounded-r-lg w-[50%]' style={{width:`${green}%`}}>&nbsp;</span>

    </div>
  )
}

export default HighLowIndicator;
