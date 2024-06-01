import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);

  const togggleSigninPage=()=>{
    setisSignInForm(!isSignInForm);
  }
  return (
    <div  className='my-max'>
      <Header />
      <div className=" absolute">
    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/38258708-fcab-4fb2-8555-dc218ab75e84/GB-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="backgroung-image" /> 
    </div>
    
    <form className="absolute w-3/12 p-12  bg-black text-white  my-36 mx-auto right-0 left-0">
      <h1 className='p-2 my-2 text-2xl text-white'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 my-2 w-full bg-gray-800' />}
      <input type="text" placeholder="Email Address" className='p-2 my-2 w-full bg-gray-800' />
      <input type="password" placeholder="Password" className='p-2 my-2 w-full bg-gray-800' />
      <button  className='p-4 my-4 bg-red-700 w-full' >{isSignInForm ?"Sign In":"Sign Up"}</button>
      <p className='p-2 my-2  text-white cursor-pointer' onClick={togggleSigninPage}> New to Netflix ? Sign Up</p>

    </form>
    </div>
    
  )
}

export default Login
