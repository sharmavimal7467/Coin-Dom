import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:""
}


const trendingCoinIdSlice = createSlice({
    name:"savedId",
    initialState:initialState,
    reducers:{
        trendingCoinId:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {trendingCoinId} = trendingCoinIdSlice.actions

export default trendingCoinIdSlice.reducer