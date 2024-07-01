import React, { useState } from 'react'

export const MovieInfo = () => {
  const [showModal,setshowModal]=useState(true);

    return (
        <div>{showModal&& <> <div className='bg-white'>hello</div></>
        }</div>
      );
}
