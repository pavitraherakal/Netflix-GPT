import React, { useState } from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
import { MovieInfo } from './MovieInfo';


const MovieCard = ({posterPath}) => {

  
  if(!posterPath) return null;
const showmodal=()=>{
<MovieInfo />
}
  
  return (
    <div className=' w-40 pr-2'>
        
        <img  src={IMG_CDN_URL+posterPath} alt="movie image" onClick={showmodal} ></img>
             
        
      
    </div>
  )
}

export default MovieCard