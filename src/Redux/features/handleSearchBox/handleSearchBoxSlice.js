import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    inputValue:false
}


const handleSearchBoxSlice = createSlice({
    name:"showDetail",
    initialState:initialState,
    reducers:{
        searchBoxSlice:(state,action)=>{
            state.inputValue = action.payload
        }
    }
})
export const {searchBoxSlice} = handleSearchBoxSlice.actions

export default handleSearchBoxSlice.reducer