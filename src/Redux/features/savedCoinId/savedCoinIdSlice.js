import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:""
}


const savedCoinIdSlice = createSlice({
    name:"savedId",
    initialState:initialState,
    reducers:{
        savedCoinId:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {savedCoinId} = savedCoinIdSlice.actions

export default savedCoinIdSlice.reducer