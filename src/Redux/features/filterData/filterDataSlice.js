import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data:{}
}

const filterDataSlice = createSlice({
    name:"Data",
    initialState:initialState,
    reducers:{
        getFilterData : (state,action)=>{
            console.log(action.payload)
                state.data = action.payload
        }
    }
})

export const {getFilterData} = filterDataSlice.actions

export default filterDataSlice.reducer