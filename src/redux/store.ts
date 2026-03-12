import { configureStore } from "@reduxjs/toolkit";
import  appReducer from '../redux/appSlice'
import themeReducer from '../redux/themeSlice'
export const store = configureStore({
    reducer:{
       app :  appReducer  ,
       theme : themeReducer
    }
})

// ✅ Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;