import { configureStore } from "@reduxjs/toolkit";
import  appReducer from '../redux/appSlice'

export const store = configureStore({
    reducer:{
       app :  appReducer  
    }
})

// ✅ Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;