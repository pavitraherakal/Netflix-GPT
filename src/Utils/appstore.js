import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import moviesReducer from "./movieslice"
import gptReducer from "./GPTslice"
import configReducer from "./configslice"

const appstore=configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt:gptReducer,
        config:configReducer
    }
})

export default appstore; 