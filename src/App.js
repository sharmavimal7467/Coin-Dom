import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import FilterData from './Components/FilterData/FilterData';
import Icons from './Components/Icons/Icons';
import Crypto from './Components/Crypto/Crypto';
import SearchBox from './Components/SearchBox/SearchBox';
import Trending from './Components/Trending/Trending';
import SavedCoins from './Components/SavedCoins/SavedCoins';
import DetailAboutCoin from './Components/DetailAboutCoin/DetailAboutCoin';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDetail } from './Redux/features/showForDetail/showForDetailSlice';
import { useEffect, useRef } from 'react';

const App = () =>{

  const dispatch = useDispatch()

  // function showFalse(){
  //   dispatch(showDetail(false))
  // }

  
 

  return(
    <div className='w-full h-full bg-gray-300  flex flex-col items-center justify-center'>
      <Logo/>
      <Navbar/>


        <Routes>
        <Route path="/" element={<Crypto className="fixed"/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/saved" element={<SavedCoins/>}/>
        <Route path="/detail" element={<DetailAboutCoin className="fixed"/>}/>
        </Routes>  
       

    </div>
  )
}

export default App;


// Intl.NumberFormat()
