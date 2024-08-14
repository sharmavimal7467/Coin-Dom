import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    pageCount : 10
}

const pageSlice = createSlice({
    name:"page",
    initialState:initialState,
    reducers:{
        pageText :(state , action)=>{
            state.pageCount = action.payload
        }
    }
})

export const { pageText } = pageSlice.actions;

export default pageSlice.reducer;