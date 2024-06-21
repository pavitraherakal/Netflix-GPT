import { createSlice } from "@reduxjs/toolkit";

const GPTslice=createSlice({
name:"GPT Search",
initialState:{
    showGPTSearch:false
},
reducers:{
    toggleGPTSearch:(state)=>{
state.showGPTSearch=!state.showGPTSearch;
    }
}
})

export default GPTslice.reducer;
export const {toggleGPTSearch}=GPTslice.actions;