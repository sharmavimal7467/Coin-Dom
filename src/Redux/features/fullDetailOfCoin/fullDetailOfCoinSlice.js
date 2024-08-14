import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    posts:[],
    error:''
}


export const fetchFullDataByClick = createAsyncThunk("fullDetailOfCoin/fetchFullDataByClick",async(id)=>{
    // console.log("id inside fetch function",id);
    return await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=>response.data)
})

const fullDetailOfCoinSlice = createSlice({
    name:"coinDetail",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchFullDataByClick.pending,(state)=>{
            // console.log('Pending state:', state);
            state.loading = true;
        })
        builder.addCase(fetchFullDataByClick.fulfilled , (state , action)=>{
            // console.log('Fulfilled state:', state);
            //     console.log('Payload:', action.payload);

                state.loading = false
                state.posts = action.payload 
                state.error = ''
        })
        builder.addCase(fetchFullDataByClick.rejected , (state , action)=>{
            // console.log('Rejected state:', state);
            //     console.log('Error:', action.error.message);    

            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default fullDetailOfCoinSlice.reducer;