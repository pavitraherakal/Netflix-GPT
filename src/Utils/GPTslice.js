import { createSlice } from "@reduxjs/toolkit";

const GPTslice=createSlice({
name:"GPT Search",
initialState:{
    showGPTSearch:false,
    movieResults:"",
    movieNames:""
},
reducers:{
    toggleGPTSearch:(state)=>{
state.showGPTSearch=!state.showGPTSearch;
    },
    addGPTmovieResults:(state,action)=>{
        const {movieNames,movieResults}=action.payload
      state.movieNames=movieNames;
       state.movieResults=movieResults;
    }
}
})

export default GPTslice.reducer;
export const {toggleGPTSearch,addGPTmovieResults}=GPTslice.actions;