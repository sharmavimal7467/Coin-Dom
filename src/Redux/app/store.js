import { configureStore } from "@reduxjs/toolkit";
import coinInputReducer from "../features/coinInputSearch/coinInputSearchSlice"
import coinReducer from "../features/coin/coinSlice"
import currenyTextReducer from "../features/searchCurrencyText/searchCurrencyText"
import marketReducer from "../features/market/marketSlice"
import searchReducer from "../features/search/searchSlice"
import filterDataReducer from "../features/filterData/filterDataSlice"
import manageCoinReducer from "../features/manageCoinInputText/manageCoinInputTextSlice"
import trendingCoinsReducer from "../features/trendingCoins/trendingCoinsSlice"
import savedCoinsReducer from "../features/saved/savedSlice"
import pageReducer from "../features/page/pageSlice"
import coinDetailReducer from "../features/displayFullDetailCoin/displayFullDetailCoin"
import fullDetailCoinReducer from "../features/fullDetailOfCoin/fullDetailOfCoinSlice"
import chartDataReducer from "../features/chartData/chartDataSlice"
import idReducer from "../features/coinId/coinIdSlice"
import showReducer from "../features/showForDetail/showForDetailSlice"
import searchBoxReducer from "../features/handleSearchBox/handleSearchBoxSlice"
import savedCoinIdReducer from "../features/savedCoinId/savedCoinIdSlice"
import trendingCoinIdReducer from "../features/trendingCoinId/trendingCoinIdSlice"

const store = configureStore({
    reducer:{
        showCoin : coinReducer,
        coinInput: coinInputReducer,
        currenyInput: currenyTextReducer,
        marketInput: marketReducer,
        searchCoin: searchReducer,
        filter: filterDataReducer,
        manageCoin: manageCoinReducer,
        trendCoins: trendingCoinsReducer,
        savedCoins: savedCoinsReducer,
        pageNumber: pageReducer,
        detailCoin: coinDetailReducer,
        fullDetailCoin: fullDetailCoinReducer,
        chartData: chartDataReducer,
        coinId: idReducer,
        showComp: showReducer,
        closeSearchBox: searchBoxReducer,
        savedId: savedCoinIdReducer,
        trendingId: trendingCoinIdReducer
    }
})

export default store

// https://youtu.be/i3MWtUchXxc?si=z-o5-fzHtSxiEq6Y


// git