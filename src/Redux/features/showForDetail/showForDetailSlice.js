import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:"false"
}


const showForDetailSlice = createSlice({
    name:"showDetail",
    initialState:initialState,
    reducers:{
        showDetail:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {showDetail} = showForDetailSlice.actions

export default showForDetailSlice.reducer