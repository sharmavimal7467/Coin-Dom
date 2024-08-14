import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchText : 'usd',
    symbol : '$'
}

const searchCurrencyText = createSlice({
    name:"CurrenyText",
    initialState:initialState,
    reducers:{
        currenyText :(state , action)=>{
            state.searchText = action.payload
        },
        symbolSign :(state , action)=>{
            state.symbol = action.payload
        }
    }
})

export const {currenyText} = searchCurrencyText.actions

export const {symbolSign} = searchCurrencyText.actions

export default searchCurrencyText.reducer