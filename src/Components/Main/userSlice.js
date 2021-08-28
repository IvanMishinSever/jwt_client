import {  createSlice } from "@reduxjs/toolkit";
const options ={
    name: 'user',
    initialState: {
        users:'',
       
    },
    reducers: {

    },
    extaReducers: {

    }

};
export const userSlice = createSlice(options);
export const {} = userSlice.actions;
export default userSlice.reducer;
