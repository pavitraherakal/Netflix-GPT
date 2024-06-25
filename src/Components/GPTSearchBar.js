import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../Utils/langConstant';
import { useRef } from 'react';
import openai from '../Utils/openAI';
import { options } from '../Utils/constant';

import { Promise } from 'q';
import { addGPTmovieResults } from '../Utils/GPTslice';
export const GPTSearchBar = () => {
  const  langkey= useSelector((store)=>store.config.lang);
const searchText=useRef(null);
const dispatch= useDispatch();
  const handleGPTSearchClick=async ()=>{
    console.log(searchText?.current.value);
    //make an api call to openAi get movie results
    const GPTquery="act as movie recomondatons system and suggest some movie for the query:"+searchText.current.value+". only give 5 movies by comma seperated like the example given ahead.example result:gadare,jgone,shole,koti,aspiration";
      const GPTResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content:  GPTquery}],
        model: 'gpt-3.5-turbo',
      });
      if(!GPTResults.choices){
        const errorMessage="Results not found";
      }
const gptMovies=GPTResults.choices[0].message.content.split(",");
//for each movie i ll find in tmdb search movie    
const promiseArry=gptMovies.map(movie=>searchMovieTMDB(movie));
  const tmdbResults=await Promise.all(promiseArry);
  console.log(gptMovies);
dispatch(addGPTmovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
  }
  //Search movie in tmdb using serach api key
  const searchMovieTMDB=async (movie)=>{
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
const json=await data.json();

return json.results;

  }
  return (
    <div className=' pt-[10%]  flex justify-center '>
        <form className='  w-1/2  bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}> 
        <input  ref={searchText} className="  p-4 m-4 col-span-9 bg-white text-gray-600 rounded "type="text" placeholder={languages[langkey].GPTSearchPlaceholder}/>
        <button className="  px-2 py-2 m-4 col-span-3 bg-red-900 rounded"
        onClick={handleGPTSearchClick}>
          {languages[langkey].search}</button>
        </form>
    </div>
  )
}
