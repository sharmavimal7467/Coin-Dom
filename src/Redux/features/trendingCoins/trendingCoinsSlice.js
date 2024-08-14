import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
    loading:false,
    posts:[],
    error:''
}


export const fetchTrendingData = createAsyncThunk("trendingCoins/fetchTrendingData" , async ()=>{
                return await axios.get("https://api.coingecko.com/api/v3/search/trending")
                .then(response=>response.data)
                .catch((err)=> console.error(err))
})


const trendingCoinsSlicce = createSlice({
    name:"trend",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTrendingData.pending,(state)=>{
            state.action = true;
        })
        builder.addCase(fetchTrendingData.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchTrendingData.rejected , (state , action)=>{
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})


export default trendingCoinsSlicce.reducer;