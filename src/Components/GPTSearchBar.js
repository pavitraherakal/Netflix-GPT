import React from 'react'
import { useSelector } from 'react-redux';
import { languages } from '../Utils/langConstant';
export const GPTSearchBar = () => {
  const  langkey= useSelector((store)=>store.config.lang);
  return (
    <div className=' pt-[10%]  flex justify-center '>
        <form className='  w-1/2  bg-black grid grid-cols-12 '> 
        <input  className="  p-4 m-4 col-span-9 bg-white text-gray-600 rounded "type="text" placeholder={languages[langkey].GPTSearchPlaceholder}/>
        <button className="  px-2 py-2 m-4 col-span-3 bg-red-900 rounded">{languages[langkey].search}</button>
        </form>
    </div>
  )
}
