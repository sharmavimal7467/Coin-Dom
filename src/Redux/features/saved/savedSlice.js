import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    collection : [],
    updateCollection:[]
}


const savedSlice = createSlice({
    name:"savedCoin",
    initialState:initialState,
    reducers:{
        savedCoinsCollection:(state , action)=>{
            console.log(state.collection)
            console.log(action.payload)
                state.collection = [action.payload , ...state.collection]
        },
        removeCoinFromCollection:(state , action)=>{
                state.updateCollection = [action.payload]
        }
    }
})


export const {savedCoinsCollection , removeCoinFromCollection} = savedSlice.actions

export default savedSlice.reducer