import React from 'react'
import { GPTSearchBar } from './GPTSearchBar'
import { GPTMoviSuggestions } from './GPTMoviSuggestions'
import { BG_IMG_URL } from '../Utils/constant'

export const GPTSearch = () => {
  return (
    <div>
       <div className=" absolute -z-20">
    <img  src={BG_IMG_URL}
    alt="backgroung-image" /> 
    </div>
        <GPTSearchBar />
        <GPTMoviSuggestions />
    </div>
  )
}
