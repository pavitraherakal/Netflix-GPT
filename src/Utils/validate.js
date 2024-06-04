import React from 'react'

const validate = (email,password) => {
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
if(!isemailvalid) return "Email id is not valid";
if(!ispasswordvalid) return "Password is not valid";
return null;
   }


export default validate