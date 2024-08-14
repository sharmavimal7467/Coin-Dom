import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    marketText : "market_cap_desc"
}

const marketSlice = createSlice({
    name:"market",
    initialState:initialState,
    reducers:{
        marketOptionText :(state , action)=>{
            state.marketText = action.payload
        }
    }
})

export const { marketOptionText } = marketSlice.actions;

export default marketSlice.reducer;