import React from 'react'

export const VedioTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-24 text-white bg-gradient-to-r from-black absolute'>
      <h1 className='pt-36  w-1/3 text-4xl font-bold my-4'>{title}</h1>
      <p className=' text-sm w-1/3 '>{overview}</p>
      <button className='w-24 m-4 px-2 py-1 text-sm bg-white  text-black hover:bg-gray-400 rounded'> ▶️ Play </button>
      <button className='w-24 px-2 py-1 text-sm text-black  bg-white hover:bg-gray-400 rounded'> More Info</button>
    </div>
  )
}
