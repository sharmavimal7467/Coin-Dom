import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    posts:[],
    error:''
}


export const fetchChartData  = createAsyncThunk("chartData/fetchChartData",async(id)=>{
    console.log(id)
  if(id){
      console.log("inside if",id)
   const response =  await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&interval=daily&days=7`
    //     ,{
    //    params:{
    //     days:7,
    //     id
    //     currency
    //    }
    // }
)

// console.log('Fetched data:', response.data);
return response.data;


    // .then((response)=>response.data)
  }
})

const chartDataSlice = createSlice({
    name:"ChartData",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchChartData.pending,(state)=>{
            // console.log('Pending state:', state);
            state.loading = true;
        })
        builder.addCase(fetchChartData.fulfilled , (state , action)=>{
            // console.log('Fulfilled state:', state);
            //     console.log('Payload:', action.payload);

                state.loading = false
                state.posts = action.payload 
                state.error = ''
        })
        builder.addCase(fetchChartData.rejected , (state , action)=>{
            // console.log('Rejected state:', state);
            //     console.log('Error:', action.error.message);    

            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default chartDataSlice.reducer;



// 8619113950