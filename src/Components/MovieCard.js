import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-40 pr-2'>
        
        <img  src={IMG_CDN_URL+posterPath} alt="movie image"></img>
    </div>
  )
}

export default MovieCard