import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from './MovieList';

export const GPTMoviSuggestions = () => {
  const {movieNames,movieResults}=useSelector((store)=>store.gpt);
  if(!movieNames) return null;

  return (
    <div className='w-screen  bg-black text-white bg-opacity-90'>
<div className='p-4 m-4'>
{movieNames.map((moviename,index)=><MovieList title={moviename} key={moviename} movies={movieResults[index]}/>)}
</div>
    
    </div>
  )
}
