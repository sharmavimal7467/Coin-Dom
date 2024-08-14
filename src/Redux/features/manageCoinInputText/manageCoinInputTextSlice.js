import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    text:""
}

const manageCoinInputTextSlice = createSlice({
    name:"ManageCoinInput",
    initialState:initialState,
    reducers:{
        coinManageText :(state , action)=>{
                state.text  = action.payload
        }
    }
})

export const {coinManageText} = manageCoinInputTextSlice.actions


export default manageCoinInputTextSlice.reducer
