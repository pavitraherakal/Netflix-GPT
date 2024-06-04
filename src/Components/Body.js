import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import  { adduser, removeuser } from '../Utils/userslice'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';

const Body = () => {
  const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
      {
        path:"/",
        element: <Login/>
     },
     {
        path:"/browse",
        element:<Browse />
     }
    ]);
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          // ...
        } else {
          // User is signed out
          dispatch(removeuser());
        }
      })}
    ,[]);

    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
    
  )
}

export default Body