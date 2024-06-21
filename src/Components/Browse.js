import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { GPTSearch } from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearchView=useSelector((store)=>store.gpt.showGPTSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();

  return (
    <div ><Header  />
   {showGptSearchView?<GPTSearch />:
   <><MainContainer />
    <SecondaryContainer /></>} 
    </div>
  )
}

export default Browse