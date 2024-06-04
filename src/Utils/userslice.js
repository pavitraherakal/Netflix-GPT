import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:{user:null},
    reducers:{
        adduser:(state,action)=>{
        return action.payload;
        },
        removeuser:(state,action)=>{
        return null;
        },

    }
})
export default userslice.reducer;
export const {adduser,removeuser} =userslice.actions;