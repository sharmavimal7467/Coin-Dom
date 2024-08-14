import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    displayCoinDetail : []
}

const displayFullDetailCoin = createSlice({
    name:"page",
    initialState:initialState,
    reducers:{
        coinDetail :(state , action)=>{
            state.displayCoinDetail = [action.payload]
        }
    }
})

export const { coinDetail } = displayFullDetailCoin.actions;

export default displayFullDetailCoin.reducer;