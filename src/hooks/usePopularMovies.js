import React ,{useEffect} from 'react'
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { popularMovieList } from '../Utils/movieslice';
export const usePopularMovies = () => {
    const dispatch=useDispatch();
    const fetchmovielist=async()=>{
      const movielist=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const json=await movielist.json();
        dispatch(popularMovieList(json.results));
    }
  
    useEffect(()=>{
      fetchmovielist();
    },[])
}
