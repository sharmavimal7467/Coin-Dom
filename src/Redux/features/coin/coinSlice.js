import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    posts:[],
    error:''
}


export const fetchData = createAsyncThunk("coin/fetchData",async({currencyTextInput,marketTextInput}, { rejectWithValue })=>
    
    {

    // console.log("currencyTextInput insideSliceJs" , currencyTextInput)
    // console.log("marketTextInput insideSliceJs" , marketTextInput)
    // console.log("dataPerPage" , dataPerPage)

    return await axios.get("https://api.coingecko.com/api/v3/coins/markets?&price_change_percentage=1h%2C24h%2C7d"
        ,{
       params:{
        vs_currency: currencyTextInput,
        order:marketTextInput,  
       }

    }
).then(response=> response.data)
})

// {
//     try {
//         const response = await axios.get("https://api.coingeck.com/api/v3/coins/markets?&price_change_percentage=1h%2C24h%2C7d"
//                     ,{
//                    params:{
//                     vs_currency: currencyTextInput,
//                     order:marketTextInput,  
//                    }
            
//                 })
//                 return response.data;
//     } 
//     catch (error) {
//         if (error.response) {
//             console.log(error.response.status)
//             return rejectWithValue(error.response.status); // Pass detailed error information
//           } else if (error.request) {
//             return rejectWithValue('No response received');
//           } else {
//             return rejectWithValue(error.message);
//           }
//     }
// }
// )

const coinSlice = createSlice({
    name:"Coins",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            console.log('Pending state:', state);
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled , (state , action)=>{
            console.log('Fulfilled state:', state);
                console.log('Payload:', action.payload);

                state.loading = false
                state.posts = action.payload 
                state.error = ''
        })
        builder.addCase(fetchData.rejected , (state , action)=>{
            console.log('Rejected state:', state);
            console.log(action.payload);
                console.log('Error:', action.error.message);    

            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default coinSlice.reducer;