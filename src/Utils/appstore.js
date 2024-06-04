import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";

const appstore=configureStore({
    reducer:{
        user: userslice
    }
})

export default appstore;