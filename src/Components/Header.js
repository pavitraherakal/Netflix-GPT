import React from 'react'
import {auth} from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import appstore from '../Utils/appstore';


const Header = () => {
  const navigate=useNavigate();
const user=useSelector(store=>store.user);

  const handleSignout=()=>{
   
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
    });
  
  }
  return (
    <div className="w-full h-25 absolute bg-gradient-to-b from-black z-10 flex  justify-between">
      <img className="w-40 py-2 m-4" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo" />
      { user&& <div className='flex p-2 m-4 '>
       <img className=" w-8 h-8 mx-2" src={user?.photoURL} alt="phot"/>
       <button className=' text-white font-bold border-r-500' onClick={handleSignout}>Signout</button>
       </div>}
    </div>
  )
}

export default Header