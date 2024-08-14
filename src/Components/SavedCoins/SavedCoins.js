import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import star from "../../Assests/star.svg"
import { fetchData } from '../../Redux/features/coin/coinSlice'
import { removeCoinFromCollection, savedCoinsCollection } from '../../Redux/features/saved/savedSlice'
import { savedCoinId } from '../../Redux/features/savedCoinId/savedCoinIdSlice'
import { useNavigate } from 'react-router'

const SavedCoins = () => {

    const dispatch = useDispatch(   )

    const[filterCoinData , SetFilterCoinData] = useState([]);


    const savedCoins = useSelector(state=>state.savedCoins)

    // console.log(savedCoins)

    // console.log(savedCoins.savedCoins)

    // console.log(savedCoins.savedCoins)

    // console.log(savedCoins.savedCoins.collection)

    const selectSavedCoins = savedCoins.collection

    // console.log(selectSavedCoins)





    function reduceToTwoDigit(num){
        const formattedNum = num.toFixed(2);
        return formattedNum;
        
      }

      function getTextColor(num){
        // console.log(typeof num);
        const formattedNum = parseFloat(num.toFixed(2));
        // console.log(typeof formattedNum , formattedNum);
        const clr = formattedNum>0 ? "text-green" : "text-darkRed"
        // console.log(clr)
        return clr;
      }

      const filterCoin = useSelector(state=>state.filter.data.id)

    //   useEffect(()=>{
    //     SetFilterCoinData(filterCoin)
    //   },[filterCoin])

    //   const filteredCoins = selectSavedCoins.filter(item => item.id === filterCoinData);

        

      function Unsaved( UnSavedItem){
        // console.log("UnSavedItem",UnSavedItem)
        // console.log("UnSavedItem.id",UnSavedItem.id)
        // console.log("selectSavedCoins before filter",selectSavedCoins)
        const updateSaved = selectSavedCoins.filter(item=>item.id !== UnSavedItem.id)
        // console.log("selectSavedCoins after filter",selectSavedCoins)
        // console.log("updateSaved",updateSaved)
        // dispatch(removeCoinFromCollection(updateSaved))
        dispatch(savedCoinsCollection(updateSaved))
        SetFilterCoinData(updateSaved)
      }

      // console.log(filterCoinData)

      const symbolForUse = useSelector(state=>state.
        currenyInput.symbol)

        const currencyTextInput = useSelector(state=>state.currenyInput.searchText).toLowerCase();

        const marketTextInput = useSelector(state=>state.marketInput.marketText).replace(/ /g, '_').toLowerCase();


        useEffect(() => {
            dispatch(fetchData({currencyTextInput : currencyTextInput,marketTextInput : marketTextInput , symbolForUse : symbolForUse}));
        }, [dispatch , currencyTextInput , marketTextInput , symbolForUse]);

        const dataToDisplay = filterCoinData.length ? filterCoinData : selectSavedCoins;

        const navigate = useNavigate()

        function releaseSavedCoinId(item){
          console.log(item);
          console.log(item.id);
          dispatch(savedCoinId(item.id))
          navigate("/detail")
        }

        // console.log(dataToDisplay)
        
        // if(dataToDisplay.length == 0){
        //     return(
        //       <h2 className='text-cyan font-black w-[100%] h-[100vh] flex items-center justify-center relative'>No Data Found Or Add Something In Saved Page</h2>
        //     )
        //
        //  }

        


  return (

    <div className='border w-[90%]  flex items-center justify-around  border-gray-100 rounded-lg relative text-center overflow-hidden  mt-48 mb-[30.3%]'>

          {
            dataToDisplay.length>0 ? (<table className='w-full table-auto'>
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
                              dataToDisplay.map((item,index)=>(
                                <tr className=' hover:bg-gray-200 border-b border-gray-100' key={index}>
                
                                <td className='flex items-center gap-2 py-4'>
                                    <img src={star} alt='not_found' className='hover:text-blue-600 cursor-pointer' onClick={()=>Unsaved(item)}/>
                                    <img src={item.image} alt='not_found' className='w-[1.2rem] h-[1.2rem]'/>
                                    <p className='font-medium text-white text-md cursor-pointer' onClick={()=>releaseSavedCoinId(item)}>{item.symbol.toUpperCase()}</p>
                                </td>
                
                                <td className='py-4 font-medium text-white text-md cursor-pointer sm:table-cell hidden' onClick={()=>releaseSavedCoinId(item)}>{item.name}</td>
                
                                <td className='py-4 font-medium text-white text-md'>{symbolForUse}{reduceToTwoDigit(item.current_price)}</td>
                
                                <td className='py-4 font-medium text-white text-md sm:table-cell hidden'>{item.total_volume}</td>
                
                                <td className={`py-4 font-medium  text-md sm:table-cell hidden ${ getTextColor(item.market_cap_change_percentage_24h) }`}>{reduceToTwoDigit(item.market_cap_change_percentage_24h)
                                }%</td>
                
                                <td className={`py-4 font-medium text-md lg:table-cell hidden ${getTextColor(item.price_change_percentage_1h_in_currency)
                                }`}>{reduceToTwoDigit(item.price_change_percentage_1h_in_currency)
                                }%</td>
                
                                <td className={`py-4 font-medium text-md lg:table-cell hidden ${getTextColor(item.price_change_percentage_24h_in_currency)
                                }`}>{reduceToTwoDigit(item.price_change_percentage_24h_in_currency)
                                }%</td>
                
                                <td className={`py-4 font-medium text-md lg:table-cell hidden ${getTextColor(item.price_change_percentage_7d_in_currency)
                                }`}>{reduceToTwoDigit(item.price_change_percentage_7d_in_currency)
                                }%</td>
                
                            </tr>
                            ))
                 } 
              </tbody> 
          </table>) 
          : (<h2 className='text-cyan font-black w-full h-[50vh]  flex items-center justify-center'>No Data Found Or Add Something In Saved Page</h2>)
          }
    
</div>

)
}

export default SavedCoins








































