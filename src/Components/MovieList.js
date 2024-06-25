import React from 'react'
import MovieCard from './MovieCard'

export const MovieList = ({title,movies}) => {
    if(!movies)return;

  return (
    <div className='px-4 '>
            <h1 className=' text-white text-xl py-4'>{title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex' >
          {movies?.map((movie)=>
          <MovieCard  key={movie.id} posterPath={movie.poster_path} />)
           }
          </div>
    </div>
    </div>
  )
}
