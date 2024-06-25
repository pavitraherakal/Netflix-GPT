import React,{ useEffect } from "react";
import { nowPlayingMovieList, topRatedMovieList } from "../Utils/movieslice";
import { options } from "../Utils/constant";
import { useDispatch,useSelector } from "react-redux";

const useTopRatedMovies = ()=>{
    //fetch data from tmdb api and update the store
  const dispatch=useDispatch();
  const topRatedMovies=useSelector((store)=>store.topRatedMovies);

  const fetchmovielist=async()=>{
    const movielist=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const json=await movielist.json();
      dispatch(topRatedMovieList(json.results));
  }

  useEffect(()=>{
    !topRatedMovies  && fetchmovielist();
  },[])
}
export default useTopRatedMovies;