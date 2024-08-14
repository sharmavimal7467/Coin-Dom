import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    loading:false,
    posts:[],
    error:''
}

export const fetchSearchData = createAsyncThunk("Search/fetchSearchData" , async(searchText)=>{
    // console.log(searchText)
    const response =  await axios.get("https://api.coingecko.com/api/v3/search" , {
        params:{
            query:searchText
        }
    })

    // console.log(response.data)

    return response.data
    
    // .then(response=>response.data)
   
})


const SearchSlice = createSlice({
    name:"search",
    initialState:initialState,
    extraReducers:(builder)=>{
            builder.addCase(fetchSearchData.pending,(state)=>{
                // console.log('Pending state:', state);
                state.loading = true
            })
            builder.addCase(fetchSearchData.fulfilled,(state , action)=>{

                // console.log('Fulfilled state:', state);
                // console.log('Payload:', action.payload);

                state.loading = false
                state.posts = action.payload
                state.error = ''
            })
            builder.addCase(fetchSearchData.rejected,(state ,action)=>{

                // console.log('Rejected state:', state);
                // console.log('Error:', action.error.message);   

                state.loading = false
                state.posts = []
                state.error = action.error.message
            })
    }
})

export default SearchSlice.reducer