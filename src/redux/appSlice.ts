import { createSlice } from "@reduxjs/toolkit";


interface AppState {
      tabVal : 'home' | 'profile' | 'setting',
      value : number
}

const initialState : AppState = {
   tabVal : 'home',
   value: 0
}

const appSlice = createSlice({
     initialState : initialState ,
     name: 'app',
     reducers:{
        increment : (state, action  ) =>{
            state.value = state.value+ action?.payload
        },

        updateTabValue : (state, action) =>{
            state.tabVal = action.payload
        }
     }

})

export const {increment,updateTabValue} = appSlice.actions
export default appSlice.reducer