import React,{ useEffect } from "react";
import {  upcomingMovieList } from "../Utils/movieslice";
import { options } from "../Utils/constant";
import { useDispatch,useSelector } from "react-redux";

const useUpcomingMovies = ()=>{
    //fetch data from tmdb api and update the store
  const dispatch=useDispatch();
  
  const upcomingMovies=useSelector((store)=>store.upcomingMovies);
  const fetchmovielist=async()=>{
    const movielist=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const json=await movielist.json();
      dispatch(upcomingMovieList(json.results));
  }

  useEffect(()=>{
    !upcomingMovies && fetchmovielist();
  },[])
}
export default useUpcomingMovies;