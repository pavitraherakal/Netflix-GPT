import { createSlice } from "@reduxjs/toolkit";


const movieslice= createSlice({
    name:"movies",
    initialState:{
        "nowPlayingMovies":null,
        "tralorVedio":null
    },
    reducers:{
        nowPlayingMovieList:(state,action)=>{
         state.nowPlayingMovies=action.payload;
        },
        popularMovieList:(state,action)=>{
            state.popularMovies=action.payload;
           },
          topRatedMovieList:(state,action)=>{
            state.topRatedMovies=action.payload;
           },
           upcomingMovieList:(state,action)=>{
               state.upcomingMovies=action.payload;
              },
        addTrailorVedio:(state,action)=>{
            state.tralorVedio=action.payload;
        }
        
    }
})
export default movieslice.reducer;
export const {nowPlayingMovieList,popularMovieList,topRatedMovieList,upcomingMovieList,addTrailorVedio}=movieslice.actions;