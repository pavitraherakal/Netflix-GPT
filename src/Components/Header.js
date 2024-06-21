import React,{useEffect} from 'react'
import {auth} from '../Utils/firebase';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { adduser,removeuser } from '../Utils/userslice';
import { LOGO_URL, Supported_Languages } from '../Utils/constant';
import { toggleGPTSearch } from '../Utils/GPTslice';
import { changelanguage } from '../Utils/configslice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
const user=useSelector(store=>store.user);
const showGPTSerach=useSelector((store)=>store.gpt.showGPTSearch);
  const handleSignout=()=>{
   
    signOut(auth).then(() => {
     
    }).catch((error) => {
      
    });
  
  }
  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate("/");
      }
    })
    //this is called when components get unmount
  return ()=>unSubscribe();

}
  ,[]);
const handleGptSearchClick=()=>{
  //toggle gpt search
  dispatch(toggleGPTSearch());

} 
const handleoptionsclick=(e)=>{
dispatch(changelanguage(e.target.value))
}

  return (
    <div className="w-full h-25 absolute bg-gradient-to-b from-black z-10 flex  justify-between">
    
      <img className="w-40 py-2 m-4" src={LOGO_URL}
       alt="logo" />

      { user&& <div className='flex py-6 m-4 '>
       {showGPTSerach && <select className='p-2 m-2 bg-gray-900 text-white'  onChange={handleoptionsclick}>
          {Supported_Languages.map((language)=><option key={language.identifier} value={language.identifier} 
          >{language.name}</option>)} 
        </select>} 
      <button className=' bg-purple-900 text-white px-2 mr-2 rounded' onClick={handleGptSearchClick}>GPT Search</button>
       <img className=" w-8 h-8 mx-2" src={user?.photoURL} alt="phot"/>
       <button className=' text-white font-bold border-r-500' onClick={handleSignout}>Signout</button>
       </div>}
    </div>
  )
}

export default Header