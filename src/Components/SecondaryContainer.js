import React from 'react'
import { useSelector } from 'react-redux'
import { options } from '../Utils/constant';
import { MovieList } from './MovieList';

export const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);

  return (
    <div className=' bg-black'> 
    <div className='-mt-10 pl-12 relative z-10'>
      <MovieList  title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList  title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList  title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList  title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
    </div>
  )
}
