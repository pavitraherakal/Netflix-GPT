import React,{ useEffect } from "react";
import { nowPlayingMovieList } from "../Utils/movieslice";
import { options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = ()=>{
    //fetch data from tmdb api and update the store
    const nowPlayingMovies=useSelector((store)=>store.nowPlayingMovies);
    
  const dispatch=useDispatch();
  const fetchmovielist=async()=>{
    const movielist=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const json=await movielist.json();
      dispatch(nowPlayingMovieList(json.results));
  }

  useEffect(()=>{
    !nowPlayingMovies&&fetchmovielist();
  },[])
}
export default useNowPlayingMovies;