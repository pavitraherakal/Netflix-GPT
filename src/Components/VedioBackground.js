import React, { useEffect } from 'react'
import { options } from '../Utils/constant'
import { useDispatch, useSelector } from 'react-redux'

import { addTrailorVedio } from '../Utils/movieslice'
export const VedioBackground = ({id}) => {
    const dispatch=useDispatch();
    const firstTrailor=useSelector((store)=>store.movies?.tralorVedio);
    
   const fetchvedio= async ()=>{
const vedios= await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options);
const json=await vedios.json();
const trailorVedio=json.results.filter((vedio)=>vedio.type==="Trailer");
const trailor=trailorVedio.length==null?json.results[0]:trailorVedio[0];
dispatch(addTrailorVedio(trailor ));

   };
   useEffect(()=>{
    fetchvedio();
   },[]);
  return (
    <div className='w-screen'>
      
        <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+ firstTrailor?.key+'?autoplay=1&mute=1'}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
    ></iframe>

    </div>
  )
}
