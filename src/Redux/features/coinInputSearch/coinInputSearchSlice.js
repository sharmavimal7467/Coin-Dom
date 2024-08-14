import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:""
}


const CoinInputSlice = createSlice({
    name:"CoinInput",
    initialState:initialState,
    reducers:{
        getCoinInput:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {getCoinInput} = CoinInputSlice.actions

export default CoinInputSlice.reducer