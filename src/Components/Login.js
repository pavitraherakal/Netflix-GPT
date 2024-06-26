import React, { useRef, useState } from 'react'
import Header from './Header'
import validate from '../Utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../Utils/userslice';
import { BG_IMG_URL } from '../Utils/constant';


const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const [errorMessage,seterrorMessage]=useState();
  const dispatch=useDispatch();
 
  const name=useRef(null);
const email= useRef(null);
const password=useRef(null);
  const togggleSigninPage=()=>{
    setisSignInForm(!isSignInForm);
  }
  const handleButtonClick=()=>{
    const message=validate(email.current.value,password.current.value);
    seterrorMessage(message);
    //sign/signup logic
    if(message) return;
    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://occ-0-1106-300.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          // An error occurred
          seterrorMessage(error.message);
        });
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       seterrorMessage(errorCode+ "-"+ errorMessage)
      });
    
    }else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+ "-"+ errorMessage)
  });
    }
  }

  return (
    <div  className='my-max'>
      <Header />
      <div className=" absolute">
    <img  src={BG_IMG_URL}
    alt="backgroung-image" /> 
    </div>
    
    <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12  bg-black text-white  my-36 mx-auto right-0 left-0 rounded-md">
      <h1 className='p-2 my-2 text-2xl text-white'>{isSignInForm ?"Sign In":"Sign Up"}</h1>

      {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className='p-2 my-2 w-full bg-gray-800 rounded-md' />}

      <input type="text" ref={email} placeholder="Email Address" className='p-2 my-2 w-full bg-gray-800 rounded-md' />
      <input type="password"  ref={password} placeholder="Password" className='p-2 my-2 w-full bg-gray-800 rounded-md'/>
      <p className='font-bold text-sm text-red-500' >{errorMessage}</p>
      <button  className='p-4 my-4 bg-red-700 w-full rounded-md' onClick={handleButtonClick} >{isSignInForm ?"Sign In":"Sign Up"}</button>
      <p className='p-2 my-2  text-white cursor-pointer' onClick={togggleSigninPage}> New to Netflix ? Sign Up</p>

    </form>
    </div>
    
  )
}

export default Login
