import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
    theme : 'light'  | 'dark'
}
const intitialState: InitialStateType = {
    theme : 'light'
}

const themeSlice = createSlice({
    name : 'theme',
    initialState:intitialState ,
    reducers: {
        toggleTheme : (state)=>{
            state.theme === 'light' ? state.theme='dark' : state.theme='light'
        }
    }
})

export const {toggleTheme} = themeSlice?.actions
export default themeSlice?.reducer