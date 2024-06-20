import React from 'react'
import { useSelector } from 'react-redux'
import { VedioTitle } from './VedioTitle';
import { VedioBackground } from './VedioBackground';

export const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
   
    if(!movies) return;
    const mainmovie=movies[2];
    
   const {original_title,overview,id}=mainmovie;
  return (
    <div>
       
        <VedioTitle  title={original_title} overview={overview}/>
    <VedioBackground id={id}/>
    </div>
  )
}
