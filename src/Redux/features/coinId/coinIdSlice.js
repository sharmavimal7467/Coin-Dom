import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:""
}


const coinIdSlice = createSlice({
    name:"id",
    initialState:initialState,
    reducers:{
        getCoinId:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {getCoinId} = coinIdSlice.actions

export default coinIdSlice.reducer